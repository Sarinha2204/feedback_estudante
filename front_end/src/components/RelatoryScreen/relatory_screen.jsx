import React, { useState } from "react";
// Importa a folha de estilos dedicada para este componente
import "./relatory_screen.css";

// Importações de bibliotecas de gráficos (recharts) e ícones (lucide)
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LabelList,
} from "recharts";
import {
  Calendar,
  Users,
  Search,
  Building,
  GraduationCap,
  LogOut,
  ChevronDown,
  ChevronUp,
  Star,
  MessageSquare,
  CheckCircle,
  LucideLaugh,
} from "lucide-react";

// --- DADOS MOCKADOS (Substituir pela API) ---
// Estes são dados de exemplo para o front-end poder renderizar o layout.
const DADOS_CARDS_SUPERIORES = [
  {
    titulo: "4.2",
    label: "Estrelas",
    subtitulo: "Média Geral",
    cor: "#ebb81fff",
    icone: <Star size={20} />,
  },
  {
    titulo: "152",
    label: "Respostas",
    subtitulo: "Total de Avaliações",
    cor: "#3b82f6",
    icone: <CheckCircle size={20} />,
  },
  {
    titulo: "12",
    label: "Professores",
    subtitulo: "Avaliados",
    cor: "#a83bf6ff",
    icone: <Users size={20} />,
  },
];

const DADOS_GRAFICO_DESTAQUES = [
  { nome: "Prof. Carla Dias", score: 4.8 },
  { nome: "Prof. Ana Silva", score: 4.5 },
  { nome: "Prof. Elisa F.", score: 4.3 },
  { nome: "Prof. Bruno Costa", score: 4.1 },
  { nome: "Prof. Daniel M.", score: 3.7 },
];

const DADOS_GRAFICO_PERGUNTAS = [
  { nome: "Didática", score: 4.1 },
  { nome: "Clareza", score: 4.5 },
  { nome: "Material", score: 3.9 },
  { nome: "Pontualidade", score: 4.8 },
  { nome: "Relacionamento", score: 4.3 },
  { nome: "Avaliações", score: 3.8 },
];

const DADOS_TABELA_PROFESSORES = [
  {
    id: "T001",
    nome: "Prof. Ana Silva",
    disciplina: "Matemática",
    media: 4.5,
    respostas: 25,
    comentarios: 5,
  },
  {
    id: "T002",
    nome: "Prof. Bruno Costa",
    disciplina: "Física",
    media: 4.1,
    respostas: 22,
    comentarios: 3,
  },
  {
    id: "T003",
    nome: "Prof. Carla Dias",
    disciplina: "História",
    media: 4.8,
    respostas: 28,
    comentarios: 8,
  },
];

const DADOS_LEGENDA_ESTRELAS = [
  { estrelas: 5, icone: <LucideLaugh color="green" size={20} /> },
  { estrelas: 4, icone: <LucideLaugh color="#2fc12fff" size={20} /> },
  { estrelas: 3, icone: <LucideLaugh color="gold" size={20} /> },
  { estrelas: 2, icone: <LucideLaugh color="orange" size={20} /> },
  { estrelas: 1, icone: <LucideLaugh color="red" size={20} /> },
];

const DADOS_ULTIMOS_COMENTARIOS = [
  {
    id: "C01",
    professor: "Prof. Ana Silva",
    pergunta: "Didática",
    comentario: "A professora explica muito bem, mas poderia usar mais exemplos.",
  },
  {
    id: "C02",
    professor: "Prof. Carla Dias",
    pergunta: "Clareza",
    comentario: "Melhor aula de História que já tive! Muito clara e interessante.",
  },
  {
    id: "C03",
    professor: "Prof. Daniel Moreira",
    pergunta: "Avaliações",
    comentario: "As provas são muito difíceis e não condizem com a aula.",
  },
];

const urlLogoEscola = "https://imgur.com/9FAmRRW.png";
// --- FIM DOS DADOS MOCKADOS ---

/**
 * Lógica de Front-end: Define a cor da barra do gráfico com base na nota.
 * @param {number} score - A nota (de 0 a 5).
 * @returns {string} - Código hexadecimal da cor.
 */
const definirCorDaNota = (score) => {
  if (score < 3) return "#ef4444"; // Vermelho
  if (score < 4) return "#eab308"; // Amarelo
  return "#22c55e"; // Verde
};

// --- Subcomponentes (Componentes menores usados apenas nesta tela) ---

/**
 * Card de estatística (Média Geral, Total de Respostas).
 */
const CardEstatistica = ({ titulo, label, subtitulo, cor, icone }) => (
  <div className="card-estatistica" style={{ backgroundColor: cor }}>
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

/**
 * Dropdown de filtro (Escola, Ano Letivo, Turma).
 */
const DropdownFiltro = ({ icone, label, value }) => (
  <div className="dropdown-filtro">
    <label>{label}</label>
    <div className="dropdown-filtro-caixa">
      <div className="dropdown-filtro-conteudo">
        {icone}
        <span>{value}</span>
      </div>
      <ChevronDown size={16} style={{ color: "#9ca3af" }} />
    </div>
  </div>
);

/**
 * Ícone de estrela simples para as tabelas.
 */
const IconeEstrela = ({ fill = false }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={fill ? "#f97316" : "none"}
    stroke={fill ? "#f97316" : "#f97316"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

/**
 * Tabela principal com o desempenho dos professores.
 */
const TabelaProfessores = () => (
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
        {DADOS_TABELA_PROFESSORES.map((professor) => (
          <tr key={professor.id}>
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

/**
 * Lista lateral com os últimos comentários.
 */
const ListaComentarios = () => (
  <div className="container-lista-comentarios">
    {DADOS_ULTIMOS_COMENTARIOS.map((item) => (
      <div key={item.id} className="bloco-comentario">
        <div className="comentario-cabecalho">
          <span className="comentario-professor">{item.professor}</span>
          <span className="comentario-pergunta">({item.pergunta})</span>
        </div>
        <p className="comentario-texto">"{item.comentario}"</p>
      </div>
    ))}
  </div>
);

// --- Componente Principal (Tela de Relatório) ---

/**
 * Renderiza a página completa do relatório da direção.
 * @param {object} props - Propriedades do React.
 * @param {function} props.aoSair - Função de callback para executar o logout.
 */
export default function TelaRelatorio({ aoSair }) {
  /**
   * Estado para controlar quais gráficos estão recolhidos (true) ou expandidos (false).
   */
  const [graficosRecolhidos, setGraficosRecolhidos] = useState({
    destaques: false,
    pontuacao: false,
  });

  /**
   * Alterna o estado (recolhido/expandido) de um gráfico específico.
   * @param {string} idGrafico - O ID do gráfico ('destaques' or 'pontuacao').
   */
  const alternarRecolher = (idGrafico) => {
    setGraficosRecolhidos((estadoAnterior) => ({
      ...estadoAnterior,
      [idGrafico]: !estadoAnterior[idGrafico],
    }));
  };

  return (
    <>
      {/* Cabeçalho fixo no topo, igual ao do Login */}
      <header className="cabecalho-fixo">
        <div className="cabecalho-conteudo">
          <div className="container-logo">
            <img
              src={urlLogoEscola}
              alt="Logo da Escola"
              className="logo-escola"
            />
            <h1 className="nome-escola">Escola Estadual Padre João Tomes</h1>
          </div>
          <button onClick={aoSair} className="botao-sair">
            Sair
            <LogOut size={18} style={{ marginLeft: "8px" }} />
          </button>
        </div>
      </header>

      {/* Container principal da tela (com padding para o cabeçalho) */}
      <div className="tela-relatorio-wrapper">
        {/* Conteúdo centralizado */}
        <main className="conteudo-principal largura-maxima">
          {/* Título principal com gradiente */}
          <h1 className="titulo-gradiente" style={{ textAlign: "left" }}>
            Relatório de Feedback Discente
          </h1>

          {/* Grid com os cards de estatística (Média, Respostas, etc.) */}
          <div className="grid-estatisticas">
            {DADOS_CARDS_SUPERIORES.map((stat) => (
              <CardEstatistica key={stat.label} {...stat} />
            ))}
          </div>

          {/* Card com os filtros */}
          <div className="card-geral card-filtros">
            <div className="grid-filtros">
              <DropdownFiltro
                icone={<Building size={16} />}
                label="Escola"
                value="E.E. Padre João Tomes"
              />
              <DropdownFiltro
                icone={<Calendar size={16} />}
                label="Ano Letivo"
                value="2025"
              />
              <DropdownFiltro
                icone={<GraduationCap size={16} />}
                label="Turma"
                value="3º Ano A"
              />
              <DropdownFiltro
                icone={<Users size={16} />}
                label="Professor"
                value="Todos"
              />
            </div>
          </div>

          {/* --- Seção de Gráficos --- */}
          <div className="grid-graficos">
            
            {/* Card: Destaques dos Professores (Recolhível) */}
            <div className="card-geral">
              <div
                className="cabecalho-card-recolhivel"
                onClick={() => alternarRecolher("destaques")}
              >
                <h2 className="titulo-card">Destaques dos Professores</h2>
                <ChevronDown
                  size={24}
                  className={`icone-recolher ${
                    graficosRecolhidos.destaques ? "recolhido" : ""
                  }`}
                />
              </div>
              <div
                className={`container-grafico ${
                  graficosRecolhidos.destaques ? "recolhido" : ""
                }`}
              >
                <ResponsiveContainer>
                  <BarChart
                    layout="vertical"
                    data={DADOS_GRAFICO_DESTAQUES}
                    margin={{ left: 30, right: 20, top: 5, bottom: 5 }}
                  >
                    <XAxis
                      type="number"
                      domain={[0, 5]}
                      tick={{ fontSize: 10 }}
                    />
                    <YAxis
                      dataKey="nome"
                      type="category"
                      width={100}
                      tick={{ fontSize: 10 }}
                    />
                    <Tooltip formatter={(value) => value.toFixed(1)} />
                    <Bar dataKey="score" name="Média">
                      {DADOS_GRAFICO_DESTAQUES.map((entry, index) => (
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
            </div>

            {/* Card: Pontuação Média por Pergunta (Recolhível) */}
            <div className="card-geral col-span-2">
              <div
                className="cabecalho-card-recolhivel"
                onClick={() => alternarRecolher("pontuacao")}
              >
                <h2 className="titulo-card">Pontuação Média por Pergunta</h2>
                <ChevronDown
                  size={24}
                  className={`icone-recolher ${
                    graficosRecolhidos.pontuacao ? "recolhido" : ""
                  }`}
                />
              </div>
              <div
                className={`container-grafico ${
                  graficosRecolhidos.pontuacao ? "recolhido" : ""
                }`}
              >
                <ResponsiveContainer>
                  <BarChart
                    data={DADOS_GRAFICO_PERGUNTAS}
                    margin={{ left: 10, right: 30 }}
                  >
                    <XAxis dataKey="nome" tick={{ fontSize: 10 }} />
                    <YAxis domain={[0, 5]} />
                    <Tooltip formatter={(value) => value.toFixed(1)} />
                    <Legend />
                    <Bar dataKey="score" fill="#ddb503ff" name="Média de 5 ⭐">
                      <LabelList
                        dataKey="score"
                        position="top"
                        style={{ fontSize: 12, fill: "#6b7280" }}
                        formatter={(value) => value.toFixed(1)}
                      />
                      {DADOS_GRAFICO_PERGUNTAS.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={definirCorDaNota(entry.score)}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* --- Seção de Tabelas --- */}
          <div className="grid-tabelas">
            
            {/* Card: Tabela de Professores */}
            <div className="card-geral col-span-2">
              <div className="cabecalho-tabela">
                <h2 className="titulo-card" style={{ marginBottom: 0 }}>
                  Desempenho por Professor
                </h2>
                <div className="barra-busca">
                  <input type="text" placeholder="Buscar professor..." />
                  <Search size={16} />
                </div>
              </div>
              <TabelaProfessores />
            </div>

            {/* Container para tabelas menores */}
            <div className="container-tabelas-menores">
              <div className="card-geral">
                <h2 className="titulo-card">Legenda das Estrelas</h2>
                <TabelaLegenda />
              </div>
              <div className="card-geral">
                <h2 className="titulo-card">Últimos Comentários</h2>
                <ListaComentarios />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}