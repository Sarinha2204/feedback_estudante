-- CRIA BASE DE DADOS
CREATE DATABASE FEEDBACKJT DEFAULT CHARACTER SET utf8mb4;

-- SELECIONAR O BANCO PARA UTILIZAR
USE FEEDBACKJT;

-- CRIAR TABELA
CREATE TABLE Estudantes (
    sgde INT PRIMARY KEY NOT NULL,
    nome VARCHAR(50) NOT NULL,
    dataNascimento DATE NOT NULL,
    situacao VARCHAR(25) NOT NULL,
    senha VARCHAR(45)
);


CREATE TABLE Professores (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome VARCHAR(200) NOT NULL
);


CREATE TABLE Turmas (
    id INT PRIMARY KEY NOT NULL,
    nome VARCHAR(45) NOT NULL,
    status VARCHAR(15) NOT NULL
    
);


CREATE TABLE Disciplinas (
    id INT PRIMARY KEY NOT NULL,
    nome VARCHAR(100) NOT NULL,
    chanual FLOAT,
    professor_id INT NOT NULL,
    turma_id INT NOT NULL,
    FOREIGN KEY (professor_id) REFERENCES Professores(id), 
    FOREIGN KEY (turma_id) REFERENCES Turmas(id) 
);


CREATE TABLE Matriculas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    estudante_id INT NOT NULL,
    turma_id INT NOT NULL,
    FOREIGN KEY (estudante_id) REFERENCES Estudantes(sgde),
    FOREIGN KEY (turma_id) REFERENCES Turmas(id)
);

-- AVALIAÇÂO DO DOCENTE

CREATE TABLE perguntas (
    id INT PRIMARY KEY,
    texto VARCHAR(255) NOT NULL
);

CREATE TABLE avaliacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    estudante_id INT NOT NULL,
    disciplina_id INT NOT NULL,
    bimestre INT NOT NULL,
    FOREIGN KEY (estudante_id) REFERENCES estudantes(sgde),
    FOREIGN KEY (disciplina_id) REFERENCES disciplinas(id)
);


-- Respostas (nota e observação por pergunta/professor)
CREATE TABLE respostas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    avaliacao_id INT NOT NULL,
    nota1 INT NOT NULL,
    comen1 TEXT,
    nota2 INT NOT NULL,
    comen2 TEXT,
    nota3 INT NOT NULL,
    comen3 TEXT,
    nota4 INT NOT NULL,
    comen4 TEXT,
    nota5 INT NOT NULL,
    comen5 TEXT,
    nota6 INT NOT NULL,
    comen6 TEXT,
    nota7 INT NOT NULL,
    comen7 TEXT,
    nota8 INT NOT NULL,
    comen8 TEXT,
    nota9 INT NOT NULL,
    comen9 TEXT,
    nota10 INT NOT NULL,
    comen10 TEXT,
    FOREIGN KEY (avaliacao_id) REFERENCES avaliacoes(id)
);


-- Administradores
CREATE TABLE administradores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    usuario VARCHAR(50) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL
);


CREATE TABLE configuracoes(
	id INT AUTO_INCREMENT PRIMARY KEY,
	bimestre INT NOT NULL,
    estado VARCHAR(50) NOT NULL
);