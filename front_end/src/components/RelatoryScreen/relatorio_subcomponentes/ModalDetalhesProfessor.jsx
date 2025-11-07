import React from "react";
import { XCircle } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
// MUDANÇA: O import agora "sobe um nível" (../) para achar a pasta utils
import { definirCorDaNota } from "../relatorio_utils/logicaGraficos.js";

/**
 * Componente do Modal de Detalhes do Professor
 */
const ModalDetalhesProfessor = ({ professor, comentarios, aoFechar }) => {
  return (
    <div className="modal-overlay" onClick={aoFechar}>
      <div className="modal-conteudo" onClick={(e) => e.stopPropagation()}>
        <div className="modal-cabecalho">
          <div>
            <h2 className="modal-titulo">{professor.nome}</h2>
            <p className="modal-subtitulo">{professor.disciplina}</p>
          </div>
          <button className="modal-botao-fechar" onClick={aoFechar}>
            <XCircle size={24} />
          </button>
        </div>

        <div className="modal-corpo">
          {/* Estatísticas Gerais (do clique) */}
          <h3 className="titulo-secao-modal">Visão Geral</h3>
          <div className="modal-stats">
            <div className="stat-item">
              <strong>{professor.media.toFixed(1)}</strong>
              <span>Média Geral</span>
            </div>
            <div className="stat-item">
              <strong>{professor.respostas}</strong>
              <span>Respostas</span>
            </div>
            <div className="stat-item">
              <strong>{professor.comentarios}</strong>
              <span>Comentários</span>
            </div>
          </div>

          {/* Gráfico de breakdown por pergunta */}
          <h3 className="titulo-secao-modal">Média por Pergunta</h3>
          <div className="modal-grafico-container">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                layout="vertical"
                data={professor.notasPorPergunta}
                margin={{ left: 10, right: 30, top: 5, bottom: 5 }}
              >
                <XAxis
                  type="number"
                  domain={[0, 5]}
                  tick={{ fontSize: 10 }}
                />
                <YAxis
                  dataKey="nome"
                  type="category"
                  width={80}
                  tick={{ fontSize: 10 }}
                />
                <Tooltip formatter={(value) => value.toFixed(1)} />
                <Bar dataKey="score" name="Média">
                  {professor.notasPorPergunta.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={definirCorDaNota(entry.score)}
                    />
                  ))}
                  <LabelList
                    dataKey="score"
                    position="right"
                    style={{ fontSize: 12, fill: "#374151" }}
                    formatter={(value) => value.toFixed(1)}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Comentários específicos */}
          <h3 className="titulo-secao-modal">Comentários dos Alunos</h3>
          <div className="modal-lista-comentarios">
            {comentarios.length === 0 ? (
              <p className="comentario-vazio">
                Nenhum comentário encontrado para este professor.
              </p>
            ) : (
              comentarios.map((item) => (
                <div key={item.id} className="bloco-comentario">
                  <div className="comentario-cabecalho">
                    <span className="comentario-pergunta">
                      Sobre: "{item.pergunta}"
                    </span>
                  </div>
                  <p className="comentario-texto">"{item.comentario}"</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetalhesProfessor;