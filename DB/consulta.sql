-- LOGIN
SELECT * FROM Estudantes e WHERE e.sgde = 1212962 AND e.senha = '1212962ALBERTY';


-- TURMA DO ESTUDANTE
SELECT t.id, t.nome FROM Turmas t, Matriculas m WHERE m.estudante_id = 1212962 AND m.turma_id = t.id;


-- DISCIPLINAS DO ESTUDANTE 
SELECT d.id, d.nome FROM Disciplinas d, Turmas t WHERE t.id = 1 AND  t.id = d.turma_id;


-- DISCIPLINAS DO ESTUDANTE COM PROFESSORES
SELECT d.id, d.nome, p.nome FROM Disciplinas d, Turmas t, Professores p WHERE t.id = 1 AND  t.id = d.turma_id AND d.professor_id = p.id;

-- ADM;
SELECT * FROM administradores;
SELECT * FROM avaliacoes;
SELECT * FROM matriculas;
SELECT * FROM perguntas;
SELECT * FROM turmas;
SELECT * FROM estudantdataNascimentoes;
SELECT count(*) FROM estudantes;
SELECT * FROM estudantes;
SELECT DATE_FORMAT(dataNascimento, '%d/%m/%Y'), sgde, nome, situacao, senha FROM estudantes;
SELECT DATE_FORMAT(dataNascimento, '%d/%m/%Y') sgde, nome, dataNascimento, situacao, senha FROM estudantes;

INSERT INTO turmas (id, nome, status) VALUES (4, '1º Ano A - 2024', 'Concluída');
INSERT INTO turmas (id, nome, status) VALUES (5, '2º Ano A - 2024', 'Concluída');
INSERT INTO turmas (id, nome, status) VALUES (6, '3º Ano A - 2024', 'Concluída');
SELECT * FROM configuracoes;
