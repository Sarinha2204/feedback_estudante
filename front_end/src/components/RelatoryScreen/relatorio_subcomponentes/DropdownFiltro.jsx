import React from "react";
import { ChevronDown } from "lucide-react";

/**
 * Dropdown de filtro (Escola, Ano Letivo, Turma).
 */
const DropdownFiltro = ({ icone, label, valor, aoMudar, opcoes }) => (
  <div className="dropdown-filtro">
    <label>{label}</label>
    <div className="dropdown-filtro-caixa">
      <div className="dropdown-filtro-conteudo">
        {icone}
        <select
          className="dropdown-filtro-select"
          value={valor}
          onChange={aoMudar}
        >
          {opcoes.map((opcao) => (
            <option key={opcao} value={opcao}>
              {opcao}
            </option>
          ))}
        </select>
      </div>
      <ChevronDown size={16} style={{ color: "#9ca3af", pointerEvents: "none" }} />
    </div>
  </div>
);

export default DropdownFiltro;