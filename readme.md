# API Game List 🕹️
### Uma API RESTful para gerenciamento de lista de jogos, desenvolvida com:

- Node.js 🟢

- Express ⚡

- TypeScript 🔷

- CORS 🌐

## Funcionalidades

### Para Todos os Usuários

- Listar todos os jogos

- Obter detalhes de um jogo específico pelo ID

### Para o Administrador (Dono)

- Listar todos os jogos

- Obter detalhes de um jogo específico pelo ID

- Adicionar novos jogos 

- Atualizar informações dos jogos existentes 

- Remover jogos da lista 

## Estrutura dos Dados 📊

### Jogos (Games)

```json
{
  "id": "string",
  "nome": "string",
  "plataforma": "string",
  "preco": "number",
  "dataLancamento": "Date"
}
```

### Publishers (Editoras)

```json
{
  "id": "string",
  "nome": "string"
}
```

## Rotas da API 🛣️

- GET /games - Lista todos os jogos
- GET /games/:id - Obtém um jogo específico pelo id
- POST /games - Adiciona um novo jogo (admin)
- PATCH /games/:id - Atualiza um jogo (admin)
- DELETE /games/:id - Remove um jogo pelo id (admin)

- GET /publishers - Lista todas as publishers
- GET /publishers/:id - Obtém uma publisher específico pelo id
- POST /publisher - Adiciona uma nova publisher(admin)
- DELETE /publishers/:id - Remove uma publisher pelo id (admin)

## Como Executar ▶️

- Clone o repositório

- Instale as dependências: npm install

- Execute em desenvolvimento: npm run dev

- A API estará disponível em http://localhost:3333

## Requisitos 🧰

- Node.js (v18+)

- npm ou yarn