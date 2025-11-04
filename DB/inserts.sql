-- INSERTS AVALIAÇÕES

INSERT INTO Perguntas (id, texto) VALUES (1, 'O plano de conteúdo da disciplina é compartilhado nos primeiros dias de aula?');
INSERT INTO Perguntas (id, texto) VALUES (2, 'A avaliação está de acordo com os conteúdos dados em aula?');
INSERT INTO Perguntas (id, texto) VALUES (3, 'A data dos critérios de avaliação estão de acordo com o que foi combinado?');
INSERT INTO Perguntas (id, texto) VALUES (4, 'O professor mostra que conhece bem o conteúdo que ensina?');
INSERT INTO Perguntas (id, texto) VALUES (5, 'O professor se importa com a participação e o desenvolvimento dos alunos?');
INSERT INTO Perguntas (id, texto) VALUES (6,  'O professor usa diferentes formas de ensinar (como debates, trabalhos em grupo, aulas práticas etc.)?');
INSERT INTO Perguntas (id, texto) VALUES (7, 'O professor mantém a sala de aula limpa e organizada?');
INSERT INTO Perguntas (id, texto) VALUES (8, 'O professor organiza bem o tempo das atividades (começo e fim)?');
INSERT INTO Perguntas (id, texto) VALUES (9, 'O professor devolve as avaliações depois de corrigidas?');
INSERT INTO Perguntas (id, texto) VALUES (10, '...');


-- AVALIACOES

INSERT INTO avaliacoes (estudante_id, disciplina_id, bimestre) VALUES (1212962, 1188689, 3);
INSERT INTO avaliacoes (estudante_id, disciplina_id, bimestre) VALUES (1212962, 1188690, 3);
INSERT INTO avaliacoes (estudante_id, disciplina_id, bimestre) VALUES (1212962, 1188687, 3);
INSERT INTO avaliacoes (estudante_id, disciplina_id, bimestre) VALUES (1212962, 1188688, 3);
INSERT INTO avaliacoes (estudante_id, disciplina_id, bimestre) VALUES (1212962, 1188678, 3);
INSERT INTO avaliacoes (estudante_id, disciplina_id, bimestre) VALUES (1212962, 1188680, 3);
INSERT INTO avaliacoes (estudante_id, disciplina_id, bimestre) VALUES (1212962, 1188686, 3);
INSERT INTO avaliacoes (estudante_id, disciplina_id, bimestre) VALUES (1212962, 1188679, 3);
INSERT INTO avaliacoes (estudante_id, disciplina_id, bimestre) VALUES (1212962, 1188682, 3);
INSERT INTO avaliacoes (estudante_id, disciplina_id, bimestre) VALUES (1212962, 1188692, 3);
INSERT INTO avaliacoes (estudante_id, disciplina_id, bimestre) VALUES (1212962, 1188681, 3);
INSERT INTO avaliacoes (estudante_id, disciplina_id, bimestre) VALUES (1212962, 1188683, 3);
INSERT INTO avaliacoes (estudante_id, disciplina_id, bimestre) VALUES (1212962, 1188684, 3);
INSERT INTO avaliacoes (estudante_id, disciplina_id, bimestre) VALUES (1212962, 1188693, 3);


--- RESPOSTAS
INSERT INTO respostas (avaliacao_id, nota1, comen1, nota2, comen2, nota3, comen3, nota4, comen4, nota5, comen5, nota6, comen6, nota7, comen7, nota8, comen8, nota9, comen9, nota10, comen10) VALUES (1, 5, 'Bom', 5, 'Pode melhorar', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom');
INSERT INTO respostas (avaliacao_id, nota1, comen1, nota2, comen2, nota3, comen3, nota4, comen4, nota5, comen5, nota6, comen6, nota7, comen7, nota8, comen8, nota9, comen9, nota10, comen10) VALUES (2, 5, 'Bom', 5, 'Pode melhorar', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom');
INSERT INTO respostas (avaliacao_id, nota1, comen1, nota2, comen2, nota3, comen3, nota4, comen4, nota5, comen5, nota6, comen6, nota7, comen7, nota8, comen8, nota9, comen9, nota10, comen10) VALUES (3, 5, 'Bom', 5, 'Pode melhorar', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom');
INSERT INTO respostas (avaliacao_id, nota1, comen1, nota2, comen2, nota3, comen3, nota4, comen4, nota5, comen5, nota6, comen6, nota7, comen7, nota8, comen8, nota9, comen9, nota10, comen10) VALUES (4, 5, 'Bom', 5, 'Pode melhorar', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom');
INSERT INTO respostas (avaliacao_id, nota1, comen1, nota2, comen2, nota3, comen3, nota4, comen4, nota5, comen5, nota6, comen6, nota7, comen7, nota8, comen8, nota9, comen9, nota10, comen10) VALUES (5, 5, 'Bom', 5, 'Pode melhorar', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom');
INSERT INTO respostas (avaliacao_id, nota1, comen1, nota2, comen2, nota3, comen3, nota4, comen4, nota5, comen5, nota6, comen6, nota7, comen7, nota8, comen8, nota9, comen9, nota10, comen10) VALUES (6, 5, 'Bom', 5, 'Pode melhorar', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom');
INSERT INTO respostas (avaliacao_id, nota1, comen1, nota2, comen2, nota3, comen3, nota4, comen4, nota5, comen5, nota6, comen6, nota7, comen7, nota8, comen8, nota9, comen9, nota10, comen10) VALUES (7, 5, 'Bom', 5, 'Pode melhorar', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom');
INSERT INTO respostas (avaliacao_id, nota1, comen1, nota2, comen2, nota3, comen3, nota4, comen4, nota5, comen5, nota6, comen6, nota7, comen7, nota8, comen8, nota9, comen9, nota10, comen10) VALUES (8, 5, 'Bom', 5, 'Pode melhorar', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom');
INSERT INTO respostas (avaliacao_id, nota1, comen1, nota2, comen2, nota3, comen3, nota4, comen4, nota5, comen5, nota6, comen6, nota7, comen7, nota8, comen8, nota9, comen9, nota10, comen10) VALUES (9, 5, 'Bom', 5, 'Pode melhorar', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom');
INSERT INTO respostas (avaliacao_id, nota1, comen1, nota2, comen2, nota3, comen3, nota4, comen4, nota5, comen5, nota6, comen6, nota7, comen7, nota8, comen8, nota9, comen9, nota10, comen10) VALUES (10, 5, 'Bom', 5, 'Pode melhorar', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom');
INSERT INTO respostas (avaliacao_id, nota1, comen1, nota2, comen2, nota3, comen3, nota4, comen4, nota5, comen5, nota6, comen6, nota7, comen7, nota8, comen8, nota9, comen9, nota10, comen10) VALUES (11, 5, 'Bom', 5, 'Pode melhorar', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom');
INSERT INTO respostas (avaliacao_id, nota1, comen1, nota2, comen2, nota3, comen3, nota4, comen4, nota5, comen5, nota6, comen6, nota7, comen7, nota8, comen8, nota9, comen9, nota10, comen10) VALUES (12, 5, 'Bom', 5, 'Pode melhorar', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom');
INSERT INTO respostas (avaliacao_id, nota1, comen1, nota2, comen2, nota3, comen3, nota4, comen4, nota5, comen5, nota6, comen6, nota7, comen7, nota8, comen8, nota9, comen9, nota10, comen10) VALUES (13, 5, 'Bom', 5, 'Pode melhorar', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom');
INSERT INTO respostas (avaliacao_id, nota1, comen1, nota2, comen2, nota3, comen3, nota4, comen4, nota5, comen5, nota6, comen6, nota7, comen7, nota8, comen8, nota9, comen9, nota10, comen10) VALUES (14, 5, 'Bom', 5, 'Pode melhorar', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom', 5, 'Bom');

-- ADM
INSERT INTO administradores (nome, usuario, senha) VALUES ('DIRETOR', 'EDSON','ADM123');

-- CONFIG 
INSERT INTO configuracoes (id, bimestre, estado) VALUES (2, 3, 'ON');
UPDATE configuracoes SET bimestre=4, estado='OFF' WHERE id = 2
