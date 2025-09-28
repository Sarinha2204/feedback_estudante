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
    nome VARCHAR(45) NOT NULL
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
    ano YEAR NOT NULL,
    FOREIGN KEY (estudante_id) REFERENCES Estudantes(sgde),
    FOREIGN KEY (turma_id) REFERENCES Turmas(id)
);

-- AVALIAÇÂO DO DOCENTE
CREATE TABLE Avaliacao (
	id INT AUTO_INCREMENT PRIMARY KEY ,
    bimestre VARCHAR(20) NOT NULL,
    estudante_id INT NOT NULL,
    professor_id INT NOT NULL,
    disciplina_id INT NOT NULL,
    nt1 TINYINT NOT NULL, 
    com1 VARCHAR(100),
	nt2 TINYINT NOT NULL,
    com2 VARCHAR(100),
	nt3 TINYINT NOT NULL,
    com3 VARCHAR(100),
    nt4 TINYINT NOT NULL, 
    com4 VARCHAR(100),
    nt5 TINYINT NOT NULL,
	com5 VARCHAR(100),
    nt6 TINYINT NOT NULL,
	com6 VARCHAR(100),
    nt7 TINYINT NOT NULL, 
    com7 VARCHAR(100),   
    nt8 TINYINT NOT NULL,
	com8 VARCHAR(100),
    nt9 TINYINT NOT NULL,
	com9 VARCHAR(100),
    nt10 TINYINT NOT NULL,
    com10 VARCHAR(100), 
    FOREIGN KEY (estudante_id) REFERENCES Estudantes(sgde),
    FOREIGN KEY (professor_id) REFERENCES Professores(id),
    FOREIGN KEY (disciplina_id) REFERENCES Disciplinas(id)
);
