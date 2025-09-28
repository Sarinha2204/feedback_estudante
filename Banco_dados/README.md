# 📊 Banco de Dados - Sistema de Avaliação Acadêmica

Este diretório contém a modelagem e scripts do **banco de dados** utilizados no sistema acadêmico para gerenciamento de estudantes, turmas, disciplinas, professores e avaliações.

## 🗂 Estrutura do Banco

O banco de dados foi modelado para contemplar os seguintes módulos:

- **Estudantes**: dados pessoais e acadêmicos dos alunos.
- **Turmas**: agrupamento de estudantes por ano/período.
- **Disciplinas**: matérias ofertadas, com carga horária e professor responsável.
- **Professores**: informações dos docentes.
- **Matrículas**: relação entre estudante e turma em um determinado ano.
- **Avaliações**: feedback que o estudante fornece para professor/disciplina.

---

## 📐 Modelo Entidade-Relacionamento (MER)

![MER do Banco](/MER.png)

---

## 🗃 Tabelas e Campos

### 👤 Estudantes
| Campo          | Tipo          | Descrição                      |
|----------------|--------------|---------------------------------|
| sgde (PK)      | INT          | Código único do estudante       |
| nome           | VARCHAR(45)  | Nome completo do estudante      |
| dataNascimento | DATE         | Data de nascimento              |
| senha          | VARCHAR(50)  | Senha de acesso (sgde + 1ºNOME) |
| situacao       | VARCHAR(45)  | Situação (Em curso, Transferido, etc.) |

---

### 🏫 Turmas
| Campo      | Tipo         | Descrição                |
|------------|-------------|--------------------------|
| id (PK)    | INT         | Identificador da turma   |
| nome       | VARCHAR(45) | Nome da turma/período    |

---

### 📚 Disciplinas
| Campo         | Tipo         | Descrição                        |
|---------------|-------------|----------------------------------|
| idDisciplinas (PK) | INT    | Código da disciplina             |
| nome          | VARCHAR(45) | Nome da disciplina               |
| chAnual       | FLOAT       | Carga horária anual              |
| professor_id (FK) | INT     | Professor responsável            |
| turma_id (FK) | INT         | Turma que oferta a disciplina    |

---

### 👨‍🏫 Professores
| Campo   | Tipo         | Descrição                 |
|---------|-------------|---------------------------|
| id (PK) | INT         | Código único do professor |
| nome    | VARCHAR(45) | Nome do professor         |

---

### 📝 Matrículas
| Campo         | Tipo   | Descrição                           |
|---------------|-------|-------------------------------------|
| idMatriculas (PK) | INT | Identificador da matrícula         |
| estudante_id (FK) | INT | Estudante matriculado              |
| turma_id (FK)     | INT | Turma associada                    |
| ano              | YEAR(4) | Ano da matrícula               |

---

### ⭐ Avaliações
| Campo          | Tipo   | Descrição                                |
|----------------|-------|------------------------------------------|
| idAvaliacao (PK) | INT | Identificador da avaliação               |
| bimestre | VARCHAR(20) | Bimestre da avaliação               |
| estudante_id (FK) | INT | Estudante que avaliou                   |
| professor_id (FK) | INT | Professor avaliado                      |
| disciplina_id (FK)| INT | Disciplina relacionada                  |
| nt1 | TINYINT | Nota da 1º pergunta                  |
| com1 | VARCHAR(100) | Comentário da 1º pergunta              |


---

## 🔑 Relacionamentos

- **Estudante → Matrícula → Turma**  
- **Turma → Disciplina → Professor**  
- **Estudante → Avaliação → (Professor / Disciplina)**  

---

## ⚙️ Como Utilizar

1. Executar os scripts de criação de tabelas em `estrutura.sql`.
   
2. Preencher as tabelas com dados iniciais presentes em `dados.sql`.

---

📌 ***Este banco de dados é parte do projeto acadêmico em grupo da disciplina de Atividade de Extensão I do curso de Técnólogo em Anális e Desenvolvimento de Sistemas (IFMS-TL) .***