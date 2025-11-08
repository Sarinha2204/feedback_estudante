import React from "react";

/**
 * Ícone de estrela simples para as tabelas.
 */
const IconeEstrela = ({ fill = false }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={fill ? "#f9b916ff" : "none"}
    stroke={fill ? "#f9b916ff" : "#f9b916ff"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export default IconeEstrela;