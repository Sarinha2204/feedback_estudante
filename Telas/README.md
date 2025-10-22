
# 🧩 Pasta Telas — Estrutura e Organização das Telas do Projeto

Esta pasta **`/Telas`** é destinada ao **armazenamento das telas (componentes de interface)** do site.  
Cada membro da equipe será responsável por desenvolver **uma tela específica**, que deve ser organizada dentro de **uma subpasta própria** com o nome da tela atribuída.

---

## 📁 Estrutura Esperada

Cada tela deve estar dentro de uma **pasta individual** com o nome do componente (em padrão *camelCase* ou *snake_case*).  
Dentro dessa pasta, devem ser incluídos **todos os arquivos relacionados à tela**, como HTML, CSS e JS/React.

### 🧱 Exemplo de Estrutura:

```

Telas/
├── avaliacaoScreen/
│   ├── avaliacao_screen.html
│   ├── avaliacao_screen.css
│   └── avaliacao_screen.js
├── loginScreen/
│   ├── login_screen.html
│   ├── login_screen.css
│   └── login_screen.js
├── cadastroScreen/
│   ├── cadastro_screen.html
│   ├── cadastro_screen.css
│   └── cadastro_screen.js
└── README.md

```

---

## 👩‍💻 Atribuição de Telas

Cada integrante do grupo terá uma tela (ou mais) para desenvolver.  
Ao começar, crie **sua própria pasta dentro de `/Telas`** conforme o nome da funcionalidade da tela.

### 🧭 Exemplo Prático:

Se **Yasmin** for responsável pela tela de **Avaliação**, ela deverá criar:

```

/Telas/avaliacaoScreen/

```

E adicionar dentro dessa pasta seus arquivos da tela:

```

avaliacao_screen.html
avaliacao_screen.css
avaliacao_screen.js

```

Ou, se estiver usando React:

```

avaliacao_screen.jsx
avaliacao_screen.css

````

---

## 📝 Padrões e Boas Práticas

1. **Nome da pasta:** use nomes descritivos e padronizados, como `avaliacaoScreen`, `cadastroScreen`, `loginScreen`.
2. **Nome dos arquivos:** mantenha o nome da tela seguido do tipo de arquivo (`_screen.css`, `_screen.jsx`, etc.).
3. **Responsabilidade única:** cada pasta deve conter **apenas a tela** e seus arquivos diretos (sem componentes genéricos).
4. **CSS local:** estilizações devem ficar dentro do arquivo CSS da própria tela.
5. **Não modifique** as telas de outros membros sem combinar previamente.

---

## 🔀 Versionamento no GitHub

Ao finalizar ou atualizar sua tela:

1. **Adicione seus arquivos:**
   ```bash
   git add Telas/avaliacaoScreen/
````

2. **Faça o commit com uma mensagem clara:**

   ```bash
   git commit -m "Adiciona tela de avaliação (Yasmin)"
   ```
3. **Envie para o repositório:**

   ```bash
   git push origin main
   ```

---

## 📌 Dicas

* Antes de subir novas alterações, **faça pull** para evitar conflitos:

  ```bash
  git pull origin main
  ```
* Se houver conflito de merge, comunique-se com a equipe antes de sobrescrever alterações.
* Para reutilizar componentes (botões, cabeçalho, etc.), crie uma pasta separada chamada `/components` (fora de `/Telas`).

---

## 🧠 Resumo

| Membro      | Tela Responsável | Pasta a Criar      |
| ----------- | ---------------- | ------------------ |
| Yasmin      | Avaliação        | `avaliacaoScreen`  |
| João        | Login            | `loginScreen`      |
| Ana         | Cadastro         | `cadastroScreen`   |
| [Outros...] | [Suas Telas...]  | `nomeDaTelaScreen` |

---

## 📄 Objetivo

Manter o projeto **organizado, modular e colaborativo**, permitindo que cada desenvolvedor trabalhe na sua tela de forma independente e o grupo integre tudo facilmente.

---

**💡 Importante:**
Não adicione arquivos soltos diretamente dentro da pasta `/Telas/`.
Sempre crie uma subpasta para a sua tela.

---


