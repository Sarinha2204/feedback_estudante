from flask import Flask, request, jsonify
import mysql.connector

app = Flask(__name__)

# Conexão com o banco
def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="2204",
        database="FEEDBACKJT"
    )


def obter_dados_turmas(sgde: str) -> dict:
    
    try:
        conexao = get_db_connection()
        cursor = conexao.cursor(dictionary=True)

        
        cursor.execute("""
            SELECT nome
            FROM Estudantes
            WHERE sgde = %s
        """, (sgde,))
        estudante = cursor.fetchone()
        nome_estudante = estudante["nome"]

        
        cursor.execute("""
            SELECT t.id, t.nome
            FROM Matriculas m
            INNER JOIN Turmas t ON m.turma_id = t.id
            WHERE m.estudante_id = %s
        """, (sgde,))
        resultado = cursor.fetchone()
        turma_ativa_id = resultado["id"]

        
        cursor.execute("SELECT id, nome FROM Turmas ORDER BY id ASC")
        todas_turmas = cursor.fetchall()

        lista_turmas = []
        for turma in todas_turmas:
            habilitado = turma["id"] == turma_ativa_id
            lista_turmas.append({
                "id": turma["id"],
                "descricao": turma["nome"],
                "habilitado": habilitado
            })

        return {
            "sucesso": True,
            "mensagem": "Lista de turmas obtida com sucesso.",
            "nome_estudante": nome_estudante,
            "turmas": lista_turmas
        }

    except mysql.connector.Error as e:
        return {"sucesso": False, "mensagem": f"Erro no banco: {e}"}

    finally:
        if conexao.is_connected():
            cursor.close()
            conexao.close()


@app.route("/dados_turmas", methods=["POST"])
def dados_turmas():
    """
    Endpoint para listar turmas do estudante logado.
    Assume que o SGDE enviado é válido.
    """
    dados = request.get_json()
    sgde = dados.get("sgde", "").strip()
    return jsonify(obter_dados_turmas(sgde))


if __name__ == "__main__":
    app.run(debug=True)