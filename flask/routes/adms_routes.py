from flask import Blueprint, request, jsonify
from controllers.adms_controller import (
    verificarLoginadm,
    listarTurmasadm,
    listarEstudantesadm,
    pegarconfig,
    setarconfig
)

adms_bp = Blueprint('adm', __name__)


@adms_bp.route('/login', methods=['POST'])
def login():
    dados = request.get_json()
    user = dados.get("codigo")
    senha = dados.get("senha")

    resultado, status = verificarLoginadm(user, senha)
    return jsonify(resultado), status

@adms_bp.route('/home', methods=['POST'])
def listar():
    resultado, status = listarTurmasadm()
    return jsonify(resultado), status

@adms_bp.route('/estudantes', methods=['POST'])
def listarEstu():
    resultado, status = listarEstudantesadm()
    return jsonify(resultado), status
    
@adms_bp.route('/config', methods=['POST'])
def config():
    resultado, status = pegarconfig()
    return jsonify(resultado), status

@adms_bp.route('/setconfig', methods=['POST'])
def setconfig():
    dados = request.get_json()
    bimestre = dados.get("bimestre")
    estado = dados.get("estado")
    resultado, status = setarconfig(bimestre, estado)
    return jsonify(resultado), status

    