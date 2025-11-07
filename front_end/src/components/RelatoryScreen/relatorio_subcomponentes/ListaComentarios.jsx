import React from "react";

/**
 * Lista lateral com os últimos comentários.
 */
const ListaComentarios = ({ comentarios }) => (
  <div className="container-lista-comentarios">
    {comentarios.length === 0 ? (
      <p className="comentario-vazio">Nenhum comentário recente.</p>
    ) : (
      comentarios.map((item) => (
        <div key={item.id} className="bloco-comentario">
          <div className="comentario-cabecalho">
            <span className="comentario-professor">{item.professor}</span>
            <span className="comentario-pergunta">({item.pergunta})</span>
          </div>
          <p className="comentario-texto">"{item.comentario}"</p>
        </div>
      ))
    )}
  </div>
);

export default ListaComentarios;