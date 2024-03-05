# Gerenciador de Tasks

Este projeto é uma API de gerenciamento de tasks (tarefas), que permite criar, listar, atualizar, deletar e marcar tasks como completas. Também suporta importação de tasks em massa por meio de um arquivo CSV.

## Tecnologias Utilizadas

- Node.js
- Express
- CSV-Parse (para importação de tasks via CSV)

## Funcionalidades

- Criação de uma task
- Listagem de todas as tasks
- Atualização de uma task pelo ID
- Remoção de uma task pelo ID
- Marcação de uma task como completa pelo ID
- Importação de tasks em massa via arquivo CSV

## Como Executar

Para executar este projeto, você precisará do Node.js instalado em seu ambiente. Siga os passos abaixo:

1. Clone o repositório para sua máquina local:

    ```bash
    git clone <URL-do-seu-repositório>
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd <nome-do-seu-diretorio>
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Inicie o servidor:

    ```bash
    node server.js
    ```

Agora a API deve estar rodando e acessível em `http://localhost:3000`.

## Endpoints da API

### `POST /tasks`

Cria uma nova task.

### `GET /tasks`

Lista todas as tasks.

### `PUT /tasks/:id`

Atualiza uma task existente pelo ID.

### `DELETE /tasks/:id`

Remove uma task pelo ID.

### `PATCH /tasks/:id/complete`

Marca uma task como completa pelo ID.

### `POST /tasks/import`

Importa tasks em massa via arquivo CSV.

## Contribuições

Contribuições são sempre bem-vindas! Por favor, crie um pull request para contribuir.

## Licença

Este projeto é licenciado sob a Licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.
