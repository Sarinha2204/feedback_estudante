from flask import Blueprint, request, jsonify
from controllers.estudantes_controller import (
    verificarLogin,
    listarTurmas,
)

estudante_bp = Blueprint('estudantes', __name__)


@estudante_bp.route('/login', methods=['POST'])
def login():
    dados = request.get_json()
    sgde = dados.get("sgde")
    senha = dados.get("senha")

    resultado, status = verificarLogin(sgde, senha)
    return jsonify(resultado), status

@estudante_bp.route('/home', methods=['GET'])
def listar():
    sgde = request.args.get("sgde")
    resultado, status = listarTurmas(sgde)
    return jsonify(resultado), status
    