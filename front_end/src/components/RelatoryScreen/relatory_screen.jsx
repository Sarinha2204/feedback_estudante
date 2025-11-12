import React, { useState, useMemo } from "react";
// Importa a folha de estilos principal
import "./relatory_screen.css";

// Importações de bibliotecas
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
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
  Star,
  CheckCircle,
  ArrowLeft, // <--- MUDANÇA: Ícone de Voltar
  LucideLaugh,
} from "lucide-react"; // (Limpei os imports não usados)

// Importa a lógica de cor
import { definirCorDaNota } from "./relatorio_utils/logicaGraficos.js";

// Importa os subcomponentes
import CardEstatistica from "./relatorio_subcomponentes/CardEstatistica.jsx";
import DropdownFiltro from "./relatorio_subcomponentes/DropdownFiltro.jsx";
import TabelaProfessores from "./relatorio_subcomponentes/TabelaProfessores.jsx";
import TabelaLegenda from "./relatorio_subcomponentes/TabelaLegenda.jsx";
import ListaComentarios from "./relatorio_subcomponentes/ListaComentarios.jsx";
import ModalDetalhesProfessor from "./relatorio_subcomponentes/ModalDetalhesProfessor.jsx";


// --- DADOS MOCKADOS (Como você deixou) ---
const DADOS_CARDS_SUPERIORES = [
  {
    titulo: "4.2",
    label: "Estrelas",
    subtitulo: "Média Geral",
    background: "linear-gradient(45deg, #0b74cf, #887dec)",
    icone: <Star size={20} />,
  },
  {
    titulo: "152",
    label: "Respostas",
    subtitulo: "Total de Avaliações",
    background: "linear-gradient(45deg, #0b74cf, #887dec)",
    icone: <CheckCircle size={20} />,
  },
  {
    titulo: "12",
    label: "Professores",
    subtitulo: "Avaliados",
    background: "linear-gradient(45deg, #0b74cf, #887dec)",
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
    notasPorPergunta: [
      { nome: "Didática", score: 4.8 },
      { nome: "Clareza", score: 4.7 },
      { nome: "Material", score: 4.0 },
      { nome: "Pontualidade", score: 5.0 },
      { nome: "Relacionamento", score: 4.2 },
      { nome: "Avaliações", score: 4.3 },
    ],
  },
  {
    id: "T002",
    nome: "Prof. Bruno Costa",
    disciplina: "Física",
    media: 4.1,
    respostas: 22,
    comentarios: 3,
    notasPorPergunta: [
      { nome: "Didática", score: 4.2 },
      { nome: "Clareza", score: 4.5 },
      { nome: "Material", score: 3.5 },
      { nome: "Pontualidade", score: 4.0 },
      { nome: "Relacionamento", score: 4.1 },
      { nome: "Avaliações", score: 4.2 },
    ],
  },
  {
    id: "T003",
    nome: "Prof. Carla Dias",
    disciplina: "História",
    media: 4.8,
    respostas: 28,
    comentarios: 8,
    notasPorPergunta: [
      { nome: "Didática", score: 5.0 },
      { nome: "Clareza", score: 4.8 },
      { nome: "Material", score: 4.7 },
      { nome: "Pontualidade", score: 2.9 },
      { nome: "Relacionamento", score: 1.0 },
      { nome: "Avaliações", score: 4.5 },
    ],
  },
];
const DADOS_TODOS_COMENTARIOS = [
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
  {
    id: "C04",
    professor: "Prof. Ana Silva",
    pergunta: "Relacionamento",
    comentario: "Muito atenciosa, sempre disposta a ajudar depois da aula.",
  },
  {
    id: "C05",
    professor: "Prof. Bruno Costa",
    pergunta: "Material",
    comentario: "Os slides são confusos.",
  },
];
const urlLogoEscola = "https://imgur.com/oGUfXtc.png";
// --- FIM DOS DADOS MOCKADOS ---


// --- Componente Principal (Tela de Relatório) ---

// MUDANÇA: Recebe 'aoVoltar' (do ScreenMenu) em vez de 'aoSair' (do App.js)
export default function TelaRelatorio({ aoVoltar }) {
  // --- Estados para os Filtros ---
  const [filtroAno, setFiltroAno] = useState("2025");
  const [filtroTurma, setFiltroTurma] = useState("3º Ano A");
  const [filtroProfessor, setFiltroProfessor] = useState("Todos");
  const [termoBusca, setTermoBusca] = useState("");

  // --- Estado para o Modal ---
  const [professorSelecionado, setProfessorSelecionado] = useState(null);

  // --- Estado dos Gráficos (Colapso) ---
  const [graficosRecolhidos, setGraficosRecolhidos] = useState({
    destaques: false,
    pontuacao: false,
  });

  const alternarRecolher = (idGrafico) => {
    setGraficosRecolhidos((estadoAnterior) => ({
      ...estadoAnterior,
      [idGrafico]: !estadoAnterior[idGrafico],
    }));
  };

  /**
   * Lógica de Front-end: Filtra os professores baseado nos estados.
   */
  const professoresFiltrados = useMemo(() => {
    let dados = DADOS_TABELA_PROFESSORES;

    if (filtroProfessor !== "Todos") {
      dados = dados.filter((p) => p.nome === filtroProfessor);
    }
    if (termoBusca.trim() !== "") {
      dados = dados.filter((p) =>
        p.nome.toLowerCase().includes(termoBusca.toLowerCase())
      );
    }
    return dados;
  }, [termoBusca, filtroProfessor]);

  /**
   * Lógica de Front-end: Filtra os comentários para o professor no modal.
   */
  const comentariosDoProfessor = useMemo(() => {
    if (!professorSelecionado) return [];
    return DADOS_TODOS_COMENTARIOS.filter(
      (c) => c.professor === professorSelecionado.nome
    );
  }, [professorSelecionado]);

  // Funções do Modal
  const abrirModal = (professor) => setProfessorSelecionado(professor);
  const fecharModal = () => setProfessorSelecionado(null);

  /**
   * Lógica para definir as classes do grid de gráficos (Expansão Horizontal)
   */
  const definirClassesDeGrid = () => {
    const { destaques, pontuacao } = graficosRecolhidos;
    let classes = "grid-graficos ";

    if (destaques && !pontuacao) {
      classes += "grid-recolhido-destaques";
    } else if (!destaques && pontuacao) {
      classes += "grid-recolhido-pontuacao";
    }
    
    return classes;
  };

  // --- Opções dos Filtros (para os dropdowns reais) ---
  const opcoesAno = ["2025", "2024", "2023"];
  const opcoesTurma = ["3º Ano A", "3º Ano B", "2º Ano A"];
  const opcoesProfessor = [
    "Todos",
    "Prof. Ana Silva",
    "Prof. Bruno Costa",
    "Prof. Carla Dias",
  ];

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
          {/* MUDANÇA: O botão agora é "Voltar" e usa a prop 'aoVoltar' */}
          <button onClick={aoVoltar} className="botao-sair">
            Voltar
            <ArrowLeft size={18} style={{ marginLeft: "8px" }} />
          </button>
        </div>
      </header>

      {/* Container principal da tela (com padding para o cabeçalho) */}
      <div className="tela-relatorio-wrapper">
        <main className="conteudo-principal largura-maxima">
          
          <h1 className="titulo-gradiente" style={{ textAlign: "left" }}>
            Relatório de Feedback Discente
          </h1>

          <div className="grid-estatisticas">
            {DADOS_CARDS_SUPERIORES.map((stat) => (
              <CardEstatistica key={stat.label} {...stat} />
            ))}
          </div>

          {/* Card com os filtros (AGORA FUNCIONAIS) */}
          <div className="card-geral card-filtros">
            <div className="grid-filtros">
              <DropdownFiltro
                icone={<Building size={16} />}
                label="Escola"
                value="E.E. Padre João Tomes"
                aoMudar={() => {}}
                opcoes={["E.E. Padre João Tomes"]}
              />
              <DropdownFiltro
                icone={<Calendar size={16} />}
                label="Ano Letivo"
                valor={filtroAno}
                aoMudar={(e) => setFiltroAno(e.target.value)}
                opcoes={opcoesAno}
              />
              <DropdownFiltro
                icone={<GraduationCap size={16} />}
                label="Turma"
                valor={filtroTurma}
                aoMudar={(e) => setFiltroTurma(e.target.value)}
                opcoes={opcoesTurma}
              />
              <DropdownFiltro
                icone={<Users size={16} />}
                label="Professor"
                valor={filtroProfessor}
                aoMudar={(e) => setFiltroProfessor(e.target.value)}
                opcoes={opcoesProfessor}
              />
            </div>
          </div>

          {/* --- Seção de Gráficos --- */}
          <div className={definirClassesDeGrid()}>
            
            {/* Card: Destaques dos Professores (Recolhível) */}
            <div className="card-geral col-destaques">
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
            <div className="card-geral col-pontuacao">
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
                    <Bar dataKey="score" fill="#457be9ff" name="Média de 5 ⭐">
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
            <div className="card-geral col-span-2">
              <div className="cabecalho-tabela">
                <h2 className="titulo-card" style={{ marginBottom: 0 }}>
                  Desempenho por Professor
                </h2>
                <div className="barra-busca">
                  <input
                    type="text"
                    placeholder="Buscar professor..."
                    value={termoBusca}
                    onChange={(e) => setTermoBusca(e.target.value)}
                  />
                  <Search size={16} />
                </div>
              </div>
              <TabelaProfessores
                professores={professoresFiltrados}
                aoSelecionar={abrirModal}
              />
            </div>

            <div className="container-tabelas-menores">
              <div className="card-geral">
                <h2 className="titulo-card">Legenda das Estrelas</h2>
                <TabelaLegenda />
              </div>
              <div className="card-geral">
                <h2 className="titulo-card">Últimos Comentários</h2>
                <ListaComentarios
                  comentarios={DADOS_TODOS_COMENTARIOS.slice(0, 3)}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
      
      {/* --- Renderização Condicional do Modal --- */}
      {professorSelecionado && (
        <ModalDetalhesProfessor
          professor={professorSelecionado}
          comentarios={comentariosDoProfessor}
          aoFechar={fecharModal}
        />
      )}
    </>
  );
}