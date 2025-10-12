from flask import Flask, request, jsonify
import mysql.connector

app = Flask(__name__)

def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="2204",
        database="FEEDBACKJT"
    )

def validar_login(sgde: str, senha: str) -> dict:
    if not sgde:
        return {"sucesso": False, "mensagem": "O campo sgde é obrigatório."}
    if not senha:
        return {"sucesso": False, "mensagem": "O campo senha é obrigatório."}

    try:
        conexao = get_db_connection()
        cursor = conexao.cursor(dictionary=True)
        cursor.execute("SELECT * FROM Estudantes WHERE sgde = %s", (sgde,))
        estudante = cursor.fetchone()

        if not estudante:
            return {"sucesso": False, "mensagem": "Usuário não encontrado."}

        if estudante["senha"] != senha:
            return {"sucesso": False, "mensagem": "Senha incorreta."}

        status = estudante.get("status", "ativo").lower()
        if status == "transferido":
            return {"sucesso": False, "mensagem": "Estudante transferido."}
        elif status == "remanejado":
            return {"sucesso": False, "mensagem": "Estudante remanejado."}
        else:
            return {"sucesso": True, "mensagem": "Login realizado com sucesso!"}

    except mysql.connector.Error as e:
        return {"sucesso": False, "mensagem": f"Erro no banco: {e}"}
    finally:
        if conexao.is_connected():
            cursor.close()
            conexao.close()

@app.route("/login", methods=["POST"])
def login():
    dados = request.get_json()
    sgde = dados.get("sgde", "").strip()
    senha = dados.get("senha", "").strip()
    return jsonify(validar_login(sgde, senha))

if __name__ == "__main__":
    app.run(debug=True)
