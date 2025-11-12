from db import get_connection

mysql = get_connection()

def verificarLogin(sgde, senha):
    try:
        if not sgde or not senha: 
            return {
                "success": False,
                "mensagem": "Preencha os campos corretamente.",
            }, 401

        cursor = mysql.connection.cursor()
        cursor.execute("SELECT * FROM estudantes WHERE sgde = %s AND senha = %s", (sgde, senha))
        user = cursor.fetchone()
        cursor.close()

        if user:
            status = user.get('situacao').lower()

            if status in ["transferido", "cancelamento renovação"]:
                return {
                "success": False,
                "mensagem": "Usuário não ativo.",
                }, 401

            return {
                "success": True,
                "mensagem": "Login realizado com sucesso!",
                "user": user
            }, 200
                    
        else:
            return {
                "success": False,
                "mensagem": "SGDE ou senha incorretos. Tente novamente."
            }, 401  # código HTTP de não autorizado

    except Exception as e:
        return {
                "success": False,
                "mensagem": e.args,
            }, 500
    

def listarTurmas(sgde):
    try:
        cursor = mysql.connection.cursor()
        # Exemplo de estrutura: tabela matriculas relacionando estudante e turma
        query = "SELECT t.id, t.nome, t.status FROM Turmas t, Matriculas m WHERE m.estudante_id = %s AND m.turma_id = t.id"
        cursor.execute(query, (sgde,))
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
    
