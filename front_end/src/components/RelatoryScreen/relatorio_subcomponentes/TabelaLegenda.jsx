import React from "react";
import IconeEstrela from "./IconeEstrela.jsx";
import { LucideAngry, LucideLaugh, LucideMeh, LucideSmile, LucideSmilePlus } from "lucide-react";

// Os dados da legenda só são usados aqui
const DADOS_LEGENDA_ESTRELAS = [
  { estrelas: 5, icone: <LucideLaugh color="green" size={20} /> },
  { estrelas: 4, icone: <LucideSmile color="#2fc12fff" size={20} /> },
  { estrelas: 3, icone: <LucideSmile color="gold" size={20} /> },
  { estrelas: 2, icone: <LucideMeh color="orange" size={20} /> },
  { estrelas: 1, icone: <LucideMeh color="red" size={20} /> },
];

/**
 * Tabela lateral com a legenda das estrelas.
 */
const TabelaLegenda = () => (
  <div className="container-tabela">
    <table className="tabela-relatorio">
      <thead>
        <tr>
          <th>Estrelas</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        {DADOS_LEGENDA_ESTRELAS.map((item) => (
          <tr key={item.estrelas}>
            <td className="td-destaque-nome">
              {item.estrelas} <IconeEstrela fill={true} />
            </td>
            <td>{item.icone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TabelaLegenda;