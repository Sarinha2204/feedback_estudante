from db import get_connection
from datetime import date



mysql = get_connection()

def verificarLoginadm(user, senha):
    try:
        if not user or not senha: 
            return {
                "success": False,
                "mensagem": "Preencha os campos corretamente.",
            }, 401

        cursor = mysql.connection.cursor()
        cursor.execute("SELECT * FROM administradores WHERE usuario = %s AND senha = %s", (user, senha))
        adm = cursor.fetchone()
        cursor.close()

        if adm:
            return {
                "success": True,
                "mensagem": "Login realizado com sucesso!",
                "user": adm
            }, 200
                    
        else:
            return {
                "success": False,
                "mensagem": "usuário ou senha incorretos. Tente novamente."
            }, 401  # código HTTP de não autorizado

    except Exception as e:
        return {
                "success": False,
                "mensagem": e.args,
            }, 500
    

def listarTurmasadm():
    try:
        cursor = mysql.connection.cursor()
        # Exemplo de estrutura: tabela matriculas relacionando estudante e turma
        cursor.execute("SELECT * FROM turmas")
        dados = cursor.fetchall()
        cursor.close()

        # Transformar em dicionário para JSON
        turmas = []
        
        if dados:
            for turma in dados:
                turma = {
                    "id": turma['id'],
                    "nome": turma['nome'] if turma['nome'] else "",
                    "status": turma['status'] if turma['status'] else "Indefinido"
                }
                turmas.append(turma)
                
        return {"success": True, "turmas": turmas}, 200

    except Exception as e:
        print("Erro ao listar turmas:", e)
        return {"success": False, "message": "Erro ao buscar turmas"}, 500


def listarEstudantesadm():
    try:
        cursor = mysql.connection.cursor()
        # Exemplo de estrutura: tabela matriculas relacionando estudante e turma
        cursor.execute("SELECT * FROM estudantes;")
        dados = cursor.fetchall()
        cursor.close()

        # Transformar em dicionário para JSON
        estudantes = []
        
        if dados:
            for estudante in dados:
                data = estudante['dataNascimento']  
                data_formatada = data.strftime('%d/%m/%Y')
                estudante = {
                    "sgde": estudante['sgde'],
                    "nome": estudante['nome'],
                    "dataNascimento": data_formatada,
                    "situacao": estudante['situacao'] if estudante['situacao'] else "Indefinido"
                }
                estudantes.append(estudante)
        return {"success": True, "estudantes": estudantes}, 200

    except Exception as e:
        print("Erro ao listar estudantes:", e)
        return {"success": False, "message": "Erro ao buscar estudantes"}, 500


def pegarconfig():
    try:
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT * FROM configuracoes WHERE id=1;")
        dados = cursor.fetchall()
        cursor.close()
        
        config = list(dados)

        if config: 
            print(config)
            # [{'id': 1, 'bimestre': 4, 'estado': 'OFF'}]
            return {"success": True, "config": config}, 200

    except Exception as e:
        print("Erro ao listar configuração:", e)
        return {"success": False, "message": "Erro ao buscar configuração"}, 500

def setarconfig(bimestre, estado):
    try:
        cursor = mysql.connection.cursor()
        cursor.execute("UPDATE configuracoes SET bimestre = %s, estado = %s WHERE  id = 1",(bimestre, estado))
        dados = cursor.fetchall()
        mysql.connection.commit()
        cursor.close()
        
        return {"success": True, "message": "Alterações salvas com sucesso!"}, 200

    except Exception as e:
        print("Erro ao listar configuração:", e)
        return {"success": False, "message": "Erro ao buscar configuração"}, 500