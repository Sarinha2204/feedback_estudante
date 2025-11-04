from flask import Flask, jsonify
from flask_cors import CORS
from db import init_db
from routes.estudantes_routes import estudante_bp
from routes.adms_routes import adms_bp

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
init_db(app)


# registra os blueprints
app.register_blueprint(estudante_bp, url_prefix='/estudantes')
app.register_blueprint(adms_bp, url_prefix='/adm')

@app.route('/')
def index():
    return jsonify({'mensagem': 'Flask + MySQL funcionando!'})

if __name__ == '__main__':
    app.run(debug=True)
