import React from "react";

/**
 * Card de estatística (Média Geral, Total de Respostas).
 * MUDANÇA: Recebe 'background' (gradiente) em vez de 'cor' (sólida).
 */
const CardEstatistica = ({ titulo, label, subtitulo, background, icone }) => (
  // MUDANÇA: style agora usa 'background'
  <div className="card-estatistica" style={{ background: background }}>
    <div className="card-estatistica-topo">
      <div className="card-estatistica-titulo-grupo">
        <span className="card-estatistica-titulo">{titulo}</span>
        <span className="card-estatistica-label">{label}</span>
      </div>
      <div className="card-estatistica-icone">{icone}</div>
    </div>
    <span className="card-estatistica-subtitulo">{subtitulo}</span>
  </div>
);

export default CardEstatistica;