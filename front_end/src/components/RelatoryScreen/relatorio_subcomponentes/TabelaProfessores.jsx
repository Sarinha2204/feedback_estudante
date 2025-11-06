import React from "react";
import IconeEstrela from "./IconeEstrela.jsx";

/**
 * Tabela principal com o desempenho dos professores.
 */
const TabelaProfessores = ({ professores, aoSelecionar }) => (
  <div className="container-tabela">
    <table className="tabela-relatorio">
      <thead>
        <tr>
          <th>Professor</th>
          <th>Disciplina</th>
          <th>Média Geral</th>
          <th>Nº de Respostas</th>
          <th>Nº de Comentários</th>
        </tr>
      </thead>
      <tbody>
        {professores.map((professor) => (
          <tr
            key={professor.id}
            className="tr-clicavel"
            onClick={() => aoSelecionar(professor)}
          >
            <td className="td-destaque-nome">{professor.nome}</td>
            <td>{professor.disciplina}</td>
            <td className="td-destaque-final">
              {professor.media.toFixed(1)} <IconeEstrela fill={true} />
            </td>
            <td>{professor.respostas}</td>
            <td>{professor.comentarios}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TabelaProfessores;