from flask import Blueprint, request, jsonify
from controllers.avaliacao_controller import (
    listar_avaliacoes,
    salvar_avaliacao,
)

avaliacao_bp = Blueprint('avaliacao', __name__)

@avaliacao_bp.route('/', methods=['GET'])
def listar():
    return listar_avaliacoes()

@avaliacao_bp.route('/', methods=['POST'])
def salvar():
    data = request.json
    return salvar_avaliacao(data)
