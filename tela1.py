from flask import Flask, request, jsonify

app = Flask(__name__)

# Banco de dados Teste
USUARIOS = {
    "12345678": "senha123",
    "87654321": "abc123",
}


def validar_login(codigo: str, senha: str) -> dict:
    if not codigo:
        return {"sucesso": False, "mensagem": "O campo código é obrigatório."}
    if not senha:
        return {"sucesso": False, "mensagem": "O campo senha é obrigatório."}

    if codigo not in USUARIOS:
        return {"sucesso": False, "mensagem": "Usuário não encontrado."}

    if USUARIOS[codigo] != senha:
        return {"sucesso": False, "mensagem": "Senha incorreta."}

    return {"sucesso": True, "mensagem": "Login realizado com sucesso!"}


@app.route("/login", methods=["POST"])
def login():
    dados = request.get_json()
    codigo = dados.get("codigo", "").strip()
    senha = dados.get("senha", "").strip()
    return jsonify(validar_login(codigo, senha))


if __name__ == "__main__":
    app.run(debug=True)
