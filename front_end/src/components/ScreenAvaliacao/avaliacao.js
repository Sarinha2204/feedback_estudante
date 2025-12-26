// Lista de palavras ofensivas que serão bloqueadas
    const offensiveWords = [
        // Palavras ofensivas comuns
        "idiota",
        "burro",
        "burra",
        "estúpido",
        "estúpida",
        "imbecil",
        "retardado",
        "deficiente",
        "besta",
        "animal",
        "asno",
        "jumento",
        "palhaço",
        "babaca",
        "babaca",
        "merda",
        "porra",
        "caralho",
        "cacete",
        "puta",
        "puto",
        "viado",
        "bicha",
        "veado",
        "cuzão",
        "cu",
        "buceta",
        "xoxota",
        "pau",
        "rola",
        "pica",
        "bosta",
        "cocô",
        "mijar",
        "foder",
        "foda",
        "porcaria",
        "desgraça",
        "desgraçado",
        "arrombado",
        "corno",
        "cornudo",
        "otário",
        "trouxa",
        "panaca",
        "mongol",
        "lesado",

        // Insultos mais graves
        "vadia",
        "vagabunda",
        "piranha",
        "prostituta",
        "cadela",
        "cachorra",
        "canalha",
        "safado",
        "canalha",
        "desprezível",
        "nojento",
        "nojentão",
        "bundão",

        // Termos discriminatórios
        "preto",
        "negro",
        "macaco",
        "crioulo", // (usados de forma ofensiva)
        "judeu",
        "alemão",
        "japonês",
        "chinês", // (usados de forma ofensiva)
        "gordo",
        "gorda",
        "baleia",
        "baleião",
        "baleiona",
        "magrelo",
        "magrela",
        "osseco",
        "ossuda",
        "feio",
        "feia",
        "horrível",
        "monstro",

        // Palavras com variações
        "bost",
        "merd",
        "cuz",
        "put",
        "fd",
        "pqp",
        "ptqp",
        "vsf",
        "vsfd",
        "nc",
        "nconta",
        "tnc",
        "vtnc",
        "vtmnc",
      ];

      // Array com todas as perguntas da avaliação
      const questions = [
        "O plano de conteúdo da disciplina é compartilhado nos primeiros dias de aula?",
        "A avaliação está de acordo com os conteúdos dados em aula?",
        "A data dos critérios de avaliação estão de acordo com o que foi combinado?",
        "O professor mostra que conhece bem o conteúdo que ensina?",
        "O professor se importa com a participação e o desenvolvimento dos alunos?",
        "O professor usa diferentes formas de ensinar (como debates, trabalhos em grupo, aulas práticas etc.)?",
        "O professor mantém a sala de aula limpa e organizada?",
        "O professor organiza bem o tempo das atividades (começo e fim)?",
        "O professor devolve as avaliações depois de corrigidas?",
      ];

      // Array com os professores e suas disciplinas
      const teachers = [
        { name: "Rainy Vitoria Prado Mendes", subject: "Matemática" },
        { name: "Carlos Alberto Silva", subject: "Português" },
        { name: "Maria Fernanda Santos", subject: "História" },
        { name: "João Pedro Oliveira", subject: "Geografia" },
        { name: "Ana Paula Costa", subject: "Ciências" },
      ];

      // Índice da pergunta atual (começa em 0)
      let currentQuestion = 0;

      // Estrutura para armazenar as respostas de todas as perguntas e professores
      const answers = Array(questions.length)
        .fill()
        .map(() =>
          Array(teachers.length)
            .fill()
            .map(() => ({ rating: 0, comment: "" }))
        );

      // Referências aos elementos HTML importantes
      const questionTitle = document.getElementById("question-title");
      const questionText = document.getElementById("question-text");
      const currentQuestionSpan = document.getElementById("current-question");
      const progressPercent = document.getElementById("progress-percent");
      const progressBar = document.getElementById("progress-bar");
      const prevBtn = document.getElementById("prev-btn");
      const nextBtn = document.getElementById("next-btn");
      const teachersTable = document.getElementById("teachers-table");
      const validationAlert = document.getElementById("validation-alert");
      const offensiveAlert = document.getElementById("offensive-alert");
      const offensiveMessage = document.getElementById("offensive-message");

      // Função para verificar se o texto contém palavras ofensivas
      function containsOffensiveWords(text) {
        if (!text) return null;

        const cleanText = text
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "") // Remove acentos
          .replace(/[^a-z0-9\s]/g, " "); // Remove caracteres especiais

        for (const word of offensiveWords) {
          // Verifica se a palavra ofensiva está no texto
          const regex = new RegExp(`\\b${word}\\b`, "i");
          if (regex.test(cleanText)) {
            return word;
          }
        }

        return null;
      }

      // Função para limpar texto ofensivo
      function cleanOffensiveText(text) {
        let cleanText = text;

        offensiveWords.forEach((word) => {
          const regex = new RegExp(`\\b${word}\\b`, "gi");
          cleanText = cleanText.replace(regex, "****");
        });

        return cleanText;
      }

      // Mostra alerta de conteúdo ofensivo
      function showOffensiveAlert(offensiveWord, inputElement) {
        offensiveMessage.textContent = `O comentário contém linguagem inadequada ("${offensiveWord}"). Por favor, revise seu comentário.`;
        offensiveAlert.classList.remove("hidden");
        offensiveAlert.classList.add("validation-error");

        // Destaca o campo com conteúdo ofensivo
        inputElement.classList.add("border-danger", "border-2");
        inputElement.focus();

        // Remove a animação após ela terminar
        setTimeout(() => {
          offensiveAlert.classList.remove("validation-error");
        }, 500);
      }

      // Esconde alerta de conteúdo ofensivo
      function hideOffensiveAlert() {
        offensiveAlert.classList.add("hidden");
        // Remove o destaque de todos os campos
        document.querySelectorAll(".comment-input").forEach((input) => {
          input.classList.remove("border-danger", "border-2");
        });
      }

      // Verifica se todas as avaliações da pergunta atual foram preenchidas
      function isCurrentQuestionComplete() {
        return answers[currentQuestion].every((answer) => answer.rating > 0);
      }

      // Exibe o alerta de validação com animação de shake
      function showValidationAlert() {
        validationAlert.classList.remove("hidden");
        validationAlert.classList.add("validation-error");

        // Remove a animação após ela terminar
        setTimeout(() => {
          validationAlert.classList.remove("validation-error");
        }, 500);

        // Destaca as avaliações não preenchidas
        document.querySelectorAll(".star-rating").forEach((rating, index) => {
          if (answers[currentQuestion][index].rating === 0) {
            rating.classList.add("validation-error");

            setTimeout(() => {
              rating.classList.remove("validation-error");
            }, 500);
          }
        });
      }

      // Oculta o alerta de validação
      function hideValidationAlert() {
        validationAlert.classList.add("hidden");
      }

      // Atualiza toda a interface com base no estado atual
      function updateUI() {
        // Atualiza o título e texto da pergunta
        questionTitle.textContent = `Pergunta ${currentQuestion + 1}`;
        questionText.textContent = `"${questions[currentQuestion]}"`;
        currentQuestionSpan.textContent = currentQuestion + 1;

        // Atualiza a barra de progresso
        const percent = Math.round(
          ((currentQuestion + 1) / questions.length) * 100
        );
        progressPercent.textContent = percent;
        progressBar.style.width = `${percent}%`;

        // Atualiza o estado dos botões de navegação
        prevBtn.disabled = currentQuestion === 0;
        prevBtn.classList.toggle("opacity-50", currentQuestion === 0);
        prevBtn.classList.toggle("cursor-not-allowed", currentQuestion === 0);

        // Muda o texto do botão próximo para "Finalizar" na última pergunta
        nextBtn.textContent =
          currentQuestion === questions.length - 1 ? "Finalizar" : "Próximo";

        // Esconde alertas de validação ao mudar de pergunta
        hideValidationAlert();
        hideOffensiveAlert();

        // Renderiza a tabela de professores
        renderTeachers();

        // Atualiza os ícones feather
        feather.replace();
      }

      // Renderiza a tabela de professores com inputs de avaliação
      function renderTeachers() {
        // Limpa a tabela atual
        teachersTable.innerHTML = "";

        // Para cada professor, cria uma linha na tabela
        teachers.forEach((teacher, index) => {
          const row = document.createElement("tr");
          const currentAnswer = answers[currentQuestion][index];

          // HTML da linha do professor
          row.innerHTML = `
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${
                      teacher.name
                    }</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${
                      teacher.subject
                    }</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="star-rating">
                            ${[5, 4, 3, 2, 1]
                              .map(
                                (star) => `
                                <input type="radio" id="star${star}-q${currentQuestion}-t${index}" 
                                       name="rating-${currentQuestion}-${index}" 
                                       value="${star}" 
                                       ${
                                         currentAnswer.rating === star
                                           ? "checked"
                                           : ""
                                       }>
                                <label for="star${star}-q${currentQuestion}-t${index}">★</label>
                            `
                              )
                              .join("")}
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <input type="text" 
                               class="comment-input border-b border-gray-300 focus:border-primary focus:outline-none py-1 w-full" 
                               data-question="${currentQuestion}" 
                               data-teacher="${index}" 
                               value="${currentAnswer.comment}" 
                               placeholder="Comentários (opcional)...">
                    </td>
                `;

          // Adiciona a linha à tabela
          teachersTable.appendChild(row);
        });

        // Adiciona event listeners para as estrelas de avaliação
        document
          .querySelectorAll('.star-rating input[type="radio"]')
          .forEach((radio) => {
            radio.addEventListener("change", function () {
              // Extrai os índices da pergunta e professor do nome do input
              const nameParts = this.name.split("-");
              const questionIndex = parseInt(nameParts[1]);
              const teacherIndex = parseInt(nameParts[2]);

              // Atualiza a resposta no estado
              answers[questionIndex][teacherIndex].rating = parseInt(
                this.value
              );

              // Esconde o alerta de validação se todas as avaliações estiverem preenchidas
              if (isCurrentQuestionComplete()) {
                hideValidationAlert();
              }
            });
          });

        // Adiciona event listeners para os campos de comentário
        document.querySelectorAll(".comment-input").forEach((input) => {
          input.addEventListener("input", function () {
            const questionIndex = parseInt(this.dataset.question);
            const teacherIndex = parseInt(this.dataset.teacher);
            const text = this.value;

            // Verifica se há palavras ofensivas
            const offensiveWord = containsOffensiveWords(text);

            if (offensiveWord) {
              // Mostra alerta de conteúdo ofensivo
              showOffensiveAlert(offensiveWord, this);

              // Limpa o texto ofensivo automaticamente
              const cleanText = cleanOffensiveText(text);
              this.value = cleanText;

              // Atualiza o estado com o texto limpo
              answers[questionIndex][teacherIndex].comment = cleanText;
            } else {
              // Esconde alerta se não há palavras ofensivas
              hideOffensiveAlert();

              // Atualiza o comentário no estado
              answers[questionIndex][teacherIndex].comment = text;
            }
          });

          // Também verifica quando o campo perde o foco
          input.addEventListener("blur", function () {
            const text = this.value;
            const offensiveWord = containsOffensiveWords(text);

            if (offensiveWord) {
              const cleanText = cleanOffensiveText(text);
              this.value = cleanText;

              const questionIndex = parseInt(this.dataset.question);
              const teacherIndex = parseInt(this.dataset.teacher);
              answers[questionIndex][teacherIndex].comment = cleanText;
            }
          });
        });
      }

      // Botão "Anterior" - volta para a pergunta anterior
      prevBtn.addEventListener("click", () => {
        if (currentQuestion > 0) {
          currentQuestion--;
          updateUI();
        }
      });

      // Botão "Próximo" - avança para a próxima pergunta ou finaliza
      nextBtn.addEventListener("click", () => {
        // Valida se todas as avaliações foram preenchidas
        if (!isCurrentQuestionComplete()) {
          showValidationAlert();
          return;
        }

        // Navega para a próxima pergunta
        if (currentQuestion < questions.length - 1) {
          currentQuestion++;
          updateUI();
        } else {
          // Finaliza a avaliação
          const successMessage = document.createElement("div");
          successMessage.className =
            "fixed inset-0 bg-green-500 bg-opacity-90 flex items-center justify-center z-50";
          successMessage.innerHTML = `
      <div class="bg-white p-8 rounded-lg shadow-lg text-center">
        <i data-feather="check-circle" class="w-16 h-16 text-green-500 mx-auto mb-4"></i>
        <h2 class="text-2xl font-bold text-gray-800 mb-2">Avaliação Concluída!</h2>
        <p class="text-gray-600 mb-4">Obrigado por sua participação.</p>
        <p class="text-sm text-gray-500">Redirecionando em 3 segundos...</p>
      </div>
    `;
          document.body.appendChild(successMessage);
          feather.replace();

          // Redireciona após 3 segundos
          setTimeout(() => {
            window.location.href =
              "/front_end/src/components/ScreenMenu/Screen_menu.js"; // Volta para a tela inicial
          }, 3000);
        }
      });

export default ScreenMenu;

