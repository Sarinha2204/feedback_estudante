Aqui está um **único arquivo `README.md` completo e bem estruturado**, descrevendo separadamente as necessidades e instruções para o **banco de dados MySQL**, o **backend Flask (Python)** e o **frontend React**.
Ele está formatado para uso direto no GitHub.

---

````markdown
# 🎓 Projeto de Faculdade — Sistema Feedback Estudante

Este repositório contém um sistema dividido em **três partes principais**:

1. **Banco de Dados (MySQL)**  
2. **Backend (Flask - Python)**  
3. **Frontend (React)**  

O projeto tem como objetivo integrar um backend em Flask que se comunica com um banco MySQL, e um frontend em React que consome os endpoints da API.

---

## 🗃️ 1. Banco de Dados — MySQL

### 📦 Requisitos
- MySQL Server instalado localmente (versão 8 ou superior)
- Acesso a um usuário com permissão de leitura/escrita

### ⚙️ Configuração do Banco
1. Abra o MySQL Workbench, DBeaver ou terminal.
2. Crie o banco de dados

3. Atualize suas credenciais no arquivo `db.py` do Flask (veja abaixo).

---

## 🐍 2. Backend — Python Flask

### 📂 Estrutura da Pasta

```
flask/
├── app.py
├── db.py
|__ requirements.txt
```

### ⚙️ Configuração do Ambiente

1. Acesse a pasta:

   ```bash
   cd flask
   ```

2. Crie um ambiente virtual:

   * **Windows**

     ```bash
     python -m venv venv
     venv\Scripts\activate
     ```

3. Instale as dependências:

   ```bash
   pip install -r requirements.txt
   ```


### 🚀 Executar o Servidor Flask

```bash
python app.py
```

Ou:

```bash
flask run -p 5000
```

O servidor iniciará em: [http://localhost:5000](http://localhost:5000)

---

## ⚛️ 3. Frontend — React

### 📦 Requisitos

* Node.js 18+
* npm 

### ⚙️ Configuração

1. Entre na pasta:

   ```bash
   cd frontReact
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um projeto:

   ```
   npx create-react-app frontReact
   ```

4. Execute o projeto React:

   ```bash
   npm run dev
   ```

   O servidor será iniciado em: [http://localhost:5173](http://localhost:5173)

### 🔗 Comunicação com o Flask

No frontend, a API pode ser chamada assim:

```js
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

fetch(`${API_URL}/api/feedback`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

---

## ▶️ Como Rodar Tudo Junto

1. Inicie o MySQL localmente.
2. Abra um terminal e suba o Flask:

   ```bash
   cd flask
   python app.py
   ```
3. Em outro terminal, suba o React:

   ```bash
   cd frontReact
   npm run dev
   ```
4. Acesse o frontend e teste as interações com a API Flask.

---

## 🧩 Dependências Principais

### Flask (`requirements.txt`)

```
blinker==1.9.0
click==8.3.0
colorama==0.4.6
Flask==3.1.2
flask-cors==6.0.1
Flask-MySQLdb==2.0.0
itsdangerous==2.2.0
Jinja2==3.1.6
MarkupSafe==3.0.3
mysql-connector-python==9.4.0
mysqlclient==2.2.7
python-dotenv==1.1.1
Werkzeug==3.1.3
```

### React (`package.json`)

Inclui dependências padrão do React, como:

```
react, react-dom, vite, axios, etc.
```

---

## 🧠 Dicas e Soluções de Erros

* **Erro ao conectar no MySQL**
  Verifique se o servidor MySQL está ativo e se o `.env` tem as credenciais corretas.

* **Erro de CORS**
  Certifique-se de que `flask-cors` está instalado e que a origem está incluída em `CORS_ORIGINS`.

* **React não encontra a API**
  Verifique se o Flask está rodando na porta 5000 e o `.env` do React está configurado.

---
