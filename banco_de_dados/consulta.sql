-- LOGIN
SELECT * FROM Estudantes e WHERE e.sgde = 1212962 AND e.senha = '1212962ALBERTY';


-- TURMA DO ESTUDANTE
SELECT t.id, t.nome FROM Turmas t, Matriculas m WHERE m.estudante_id = 1212962 AND m.turma_id = t.id;


-- DISCIPLINAS DO ESTUDANTE 
SELECT d.id, d.nome FROM Disciplinas d, Turmas t WHERE t.id = 1 AND  t.id = d.turma_id;


-- DISCIPLINAS DO ESTUDANTE COM PROFESSORES
SELECT d.id, d.nome, p.nome FROM Disciplinas d, Turmas t, Professores p WHERE t.id = 1 AND  t.id = d.turma_id AND d.professor_id = p.id;