from flask import Flask, request, jsonify
import mysql.connector
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

def get_db_connection():
    try:
        return mysql.connector.connect(
            host="localhost",
            user="root",
            password="2204",
            database="FEEDBACKJT"
        )
    except mysql.connector.Error as e:
        print(f"Erro ao conectar ao banco de dados: {e}")
        return None

def validar_login(sgde: str, senha: str) -> dict:
    if not sgde or not senha: 
        return {"sucesso": False, "mensagem": "SGDE e senha são obrigatórios."}

    conexao = None
    cursor = None
    try:
        conexao = get_db_connection()
        if conexao is None:
            return {"sucesso": False, "mensagem": "Erro de conexão com o banco de dados."}

        cursor = conexao.cursor(dictionary=True)
        cursor.execute("SELECT senha_hash, status FROM Estudantes WHERE sgde = %s", (sgde,))
        estudante = cursor.fetchone()

        if not estudante:
            return {"sucesso": False, "mensagem": "SGDE ou senha inválidos."}

        senha_banco = estudante["senha_hash"]

        
        if senha_banco.startswith("pbkdf2:"):
            senha_correta = check_password_hash(senha_banco, senha)
        else:
            
            senha_correta = senha_banco == senha
            if senha_correta:
                
                novo_hash = generate_password_hash(senha)
                cursor.execute("UPDATE Estudantes SET senha_hash = %s WHERE sgde = %s", (novo_hash, sgde))
                conexao.commit()

        if not senha_correta:
            return {"sucesso": False, "mensagem": "SGDE ou senha inválidos."}

        status = estudante.get("status", "ativo").lower()
        if status in ["transferido", "remanejado"]:
            return {"sucesso": False, "mensagem": "Usuário não ativo."}
        
        return {"sucesso": True, "mensagem": "Login bem-sucedido."}

    except mysql.connector.Error as e:
        print(f"Erro no banco de dados: {e}")
        return {"sucesso": False, "mensagem": "Erro interno do servidor."}
    except Exception as e:
        print(f"Erro inesperado: {e}")
        return {"sucesso": False, "mensagem": "Erro interno do servidor."}
    finally:
        if cursor:
            cursor.close()
        if conexao and conexao.is_connected():
            conexao.close()

@app.route("/login", methods=["POST"])
def login():
    dados = request.get_json()
    if not dados: 
        return jsonify({"sucesso": False, "mensagem": "Requisição inválida. JSON esperado."}), 400

    sgde = dados.get("sgde", "").strip()
    senha = dados.get("senha", "").strip()
    
    resultado = validar_login(sgde, senha)
    status_code = 200 if resultado["sucesso"] else 401
    return jsonify(resultado), status_code

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
