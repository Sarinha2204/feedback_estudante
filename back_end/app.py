# pip install mysql-connector-python
# import mysql.connector

# Conexão com o banco
conexao = mysql.connector.connect(
    host="localhost",       # onde está o banco (localhost para sua máquina)
    user="root",            # usuário do MySQL
    password="sua_senha",   # senha do usuário
    database="sistema"      # nome do banco que você criou
)

# Criar um cursor para executar comandos SQL
cursor = conexao.cursor()

# Exemplo: criar tabela (se não existir)
cursor.execute("""
CREATE TABLE IF NOT EXISTS estudantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    idade INT
);
""")

# Inserir dado
sql = "INSERT INTO estudantes (nome, idade) VALUES (%s, %s)"
valores = ("Maria", 21)
cursor.execute(sql, valores)

# Salvar alterações
conexao.commit()

# Consultar dados
cursor.execute("SELECT * FROM estudantes")
resultado = cursor.fetchall()

for linha in resultado:
    print(linha)

# Encerrar conexão
cursor.close()
conexao.close()
