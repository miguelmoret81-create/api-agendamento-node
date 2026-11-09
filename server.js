const express = require ('express');
const app = express();
const agendamentos = [];

app.use(express.json());

app.get('/', (req, res) => {
    res.send('servidor da API de agendamento está rodando!');
});

app.get('/agendamentos', (req, res) => {
    res.json(agendamentos);
});

app.post('/agendamentos', (req, res) => {
    const { nome, data, hora } = req.body;
    const novoAgendamento = { nome, data, hora };
    agendamentos.push(novoAgendamento);
    res.status(201).json({ mensagem: "agendamento criado!", agendamento: novoAgendamento });
});
    
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}`);
});