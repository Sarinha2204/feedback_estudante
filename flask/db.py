from flask_mysqldb import MySQL

# Cria o objeto MySQL (mas ainda não conecta)
mysql = MySQL()

def init_db(app):
    
    app.config['MYSQL_HOST'] = 'localhost'
    app.config['MYSQL_USER'] = 'root'
    app.config['MYSQL_PASSWORD'] = 'eepjt'
    app.config['MYSQL_DB'] = 'feedbackjt'
    app.config['MYSQL_CURSORCLASS'] = 'DictCursor'  # retorna resultados como dicionário

    # Inicializa o MySQL dentro do app Flask
    mysql.init_app(app)

def get_connection():
    return mysql

    
