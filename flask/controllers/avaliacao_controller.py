from db import get_connection

def listar_avaliacoes():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM avaliacoes")
    avaliacoes = cursor.fetchall()
    cursor.close()
    conn.close()
    return {'avaliacoes': avaliacoes}

def salvar_avaliacao(data):
    conn = get_connection()
    cursor = conn.cursor()
    query = """
        INSERT INTO avaliacoes (estudante_id, professor_id, bimestre, pergunta_id, nota, comentario)
        VALUES (%s, %s, %s, %s, %s, %s)
    """
    values = (
        data['estudante_id'],
        data['professor_id'],
        data['bimestre'],
        data['pergunta_id'],
        data['nota'],
        data['comentario']
    )
    cursor.execute(query, values)
    conn.commit()
    cursor.close()
    conn.close()
    return {'mensagem': 'Avaliação salva com sucesso!'}
