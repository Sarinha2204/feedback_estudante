from flask import Flask, jsonify, request
from db import init_db, get_connection
from flask_cors import CORS

app = Flask(__name__)

# Inicializa o MySQL (executa a função do db.py)
init_db(app)

mysql = get_connection()

# Possibilita a conexão do react
CORS(app)

@app.route('/')
def index():
    return jsonify({'mensagem': 'Flask + MySQL funcionando!'})


@app.route('/login', methods=['POST'])
def verificarLogin():

    dados = request.get_json()
    sgde = dados.get("sgde")
    senha = dados.get("senha")

    try:
        if not sgde or not senha: 
            return jsonify({
                "success": False,
                "mensagem": "Preencha os campos corretamente.",
            }), 401

        
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT * FROM estudantes WHERE sgde = %s AND senha = %s", (sgde, senha))
        user = cursor.fetchone()
        cursor.close()

        if user:
            print(user)
            status = user.get('situacao').lower()

            if status in ["transferido", "cancelamento renovação"]:
                return jsonify({
                "success": False,
                "mensagem": "Usuário não ativo.",
                }), 401

            return jsonify({
                "success": True,
                "mensagem": "Login realizado com sucesso!",
                "user": user
            }), 200
                    
        else:
            return jsonify({
                "success": False,
                "mensagem": "SGDE ou senha incorretos. Tente novamente."
            }), 401  # código HTTP de não autorizado

    except Exception as e:
        return jsonify({
                "success": False,
                "mensagem": e.args,
            }), 500

@app.route('/Home/<int:sgde>', methods=['GET'])
def listar_turmas(sgde):
    try:
        cursor = mysql.connection.cursor()

        # Exemplo de estrutura: tabela matriculas relacionando estudante e turma
        query = "SELECT t.id, t.nome, t.status FROM Turmas t, Matriculas m WHERE m.estudante_id = %s AND m.turma_id = t.id ORDER BY t.nome asc"
        cursor.execute(query, (sgde,))
        dados = cursor.fetchall()
        cursor.close()
        print(dados)

        # Transformar em dicionário para JSON
        turmas = []
        print(dados)
        if dados:
            for turma in dados:
                turma = {
                    "id": turma['id'],
                    "nome": turma['nome'] if turma['nome'] else "",
                    "status": turma['status'] if turma['status'] else "Indefinido"
                }
                turmas.append(turma)
                print(turmas)
                
        return jsonify({"success": True, "turmas": turmas})

    except Exception as e:
        print("Erro ao listar turmas:", e)
        return jsonify({"success": False, "message": "Erro ao buscar turmas"}), 500

if __name__ == '__main__':
    app.run(debug=True)



