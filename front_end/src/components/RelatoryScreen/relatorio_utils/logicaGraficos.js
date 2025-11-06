/**
 * Lógica de Front-end: Define a cor da barra do gráfico com base na nota.
 * MUDANÇA: Agora usa uma escala de 5 cores.
 * @param {number} score - A nota (de 0 a 5).
 * @returns {string} - Código hexadecimal da cor.
 */
export const definirCorDaNota = (score) => {
  if (score >= 4.5) return "#166534"; // Verde Escuro (Excelente: 4.5 - 5.0)
  if (score >= 4.0) return "#22c55e"; // Verde (Bom: 4.0 - 4.4)
  if (score >= 3.0) return "#eab308"; // Amarelo (Regular: 3.0 - 3.9)
  if (score >= 2.0) return "#f97316"; // Laranja (Ruim: 2.0 - 2.9)
  return "#ef4444"; // Vermelho (Péssimo: < 2.0)
};