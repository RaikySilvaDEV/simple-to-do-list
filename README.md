# Simple To-Do App com Next.js 13

Um aplicativo de lista de tarefas (To-Do) simples e moderno, construído para demonstrar os recursos do Next.js 13 com o App Router. O projeto permite aos usuários gerenciar suas tarefas diárias por meio de uma interface limpa e intuitiva.

![Demonstração do App](./imagens_PROJETO_RODANDO/projeto-rodando-1.png)

![Demonstração do App](./imagens_PROJETO_RODANDO/projeto-rodando-2.png)

![Demonstração do App](./imagens_PROJETO_RODANDO/projeto-rodando-3.png)

![Demonstração do App](./imagens_PROJETO_RODANDO/projeto-rodando-4.png)


## ✨ Funcionalidades

- **Adicionar Tarefas:** Crie novas tarefas com um texto descritivo.
- **Visualizar Tarefas:** Veja a lista completa de tarefas pendentes.
- **Editar Tarefas:** Modifique o texto de tarefas existentes.
- **Excluir Tarefas:** Remova tarefas que já foram concluídas.
- **Persistência de Dados:** As tarefas são salvas localmente em um arquivo `json`, funcionando como um banco de dados simples.

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- **Next.js 13**: Framework React para produção, utilizando o **App Router**.
- **React 18**: Biblioteca para construção de interfaces de usuário.
- **Tailwind CSS**: Framework CSS utility-first para estilização rápida e moderna.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **UUID**: Para gerar IDs únicos para cada nova tarefa.

## 📂 Estrutura do Projeto

A estrutura de pastas segue o padrão do Next.js 13 App Router:

```
simple-todoapp-with-next13-main/
├── app/
│   ├── api/
│   │   └── todos/
│   │       ├── [id]/
│   │       │   └── route.ts  // Rotas para DELETE e PUT
│   │       └── route.ts      // Rotas para GET e POST
│   ├── components/           // Componentes React reutilizáveis (ex: TodoItem, AddTodo)
│   ├── layout.tsx            // Layout principal da aplicação
│   └── page.tsx              // Página inicial que renderiza a lista de tarefas
├── data/
│   └── todos.json            // Arquivo usado como "banco de dados"
├── public/                   // Arquivos estáticos
└── ...                       // Arquivos de configuração (next.config.js, tailwind.config.ts, etc.)
```

## 🏁 Como Começar

Siga os passos abaixo para executar o projeto em seu ambiente local.

### Pré-requisitos

- Node.js (versão 18.x ou superior)
- npm, yarn ou pnpm

### Instalação

1.  Clone o repositório para sua máquina local:
    ```bash
    git clone https://github.com/raikysilva/simple-todoapp-with-next13.git
    ```

2.  Navegue até o diretório do projeto:
    ```bash
    cd simple-todoapp-with-next13
    ```

3.  Instale as dependências do projeto:
    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    ```

### Executando a Aplicação

1.  Inicie o servidor de desenvolvimento e a api:
    ```bash
    npm run dev
    # ou
    yarn dev
    # ou
    pnpm dev
    ```


2.  Abra seu navegador e acesse http://localhost:3000 para ver a aplicação em funcionamento.

## ⚙️ API Endpoints

A aplicação utiliza rotas de API do Next.js para manipular os dados do arquivo `todos.json`.

- `GET /api/todos`: Retorna a lista de todas as tarefas.
- `POST /api/todos`: Cria uma nova tarefa. Espera um corpo de requisição com `{ "text": "..." }`.
- `PUT /api/todos/[id]`: Atualiza uma tarefa existente. Espera um corpo de requisição com `{ "text": "..." }`.
- `DELETE /api/todos/[id]`: Exclui uma tarefa específica.

---

Feito com ❤️ por [Raiky Silva](https://github.com/raikysilva).