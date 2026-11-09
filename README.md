#API de Agendamento (Node.js)

##Visão Geral
API RESTful desenvolvida para gerenciar agendamentos de serviços. O projeto permite criar novos agendamentos (POST) e visualizar a lista de agendamentos existentes (GET). Desenvolvido como projeto prático de back-end.

##Tecnologias Utilizadas
- **Node.js** (Ambiente de execução)
- **Express** (Framework para criação das rotas da API)
- **JavaScript** (Linguagem)

##Como Executar o Projeto

1. Instale as dependências:
```bash
npm install
```
2. Inicie o servidor:
```bash
node server.js
```
3. O servidor estará rodando em http://localhost:3000

Endpoints da API

GET /agendamentos: Retorna a lista de todos os agendamentos (formato JSON).

POST /agendamentos: Cria um novo agendamento. (Requer o envio de um JSON no corpo da requisição com os dados do cliente).
