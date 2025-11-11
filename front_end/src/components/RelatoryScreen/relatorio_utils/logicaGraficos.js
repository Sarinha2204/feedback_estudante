/**
 * Lógica de Front-end: Define a cor da barra do gráfico com base na nota.
 * @param {number} score - A nota (de 0 a 5).
 * @returns {string} - Código hexadecimal da cor.
 */
export const definirCorDaNota = (score) => {
  if (score >= 4.5) return "#264653"; // Verde Escuro (Excelente: 4.5 - 5.0)
  if (score >= 4.0) return "#2A9D8F"; // Verde (Bom: 4.0 - 4.4)
  if (score >= 3.0) return "#E9C46A"; // Amarelo (Regular: 3.0 - 3.9)
  if (score >= 2.0) return "#f4A261"; // Laranja (Ruim: 2.0 - 2.9)
  return "#ef4444"; // Vermelho (Péssimo: < 2.0)
};