const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost:27017/meuBanco', { useNewUrlParser: true, useUnifiedTopology: true });

const TarefaSchema = new mongoose.Schema({
  tarefa: String,
  custo: Number,
  dataLimite: String,
});

const Tarefa = mongoose.model('Tarefa', TarefaSchema);

app.use(express.json());

// Cadastrar uma nova tarefa
app.post('/tarefas', async (req, res) => {
  const novaTarefa = new Tarefa(req.body);
  await novaTarefa.save();
  res.status(201).send(novaTarefa);
});

// Listar todos os usuários
app.get('/tarefas', async (req, res) => {
  const tarefas = await Tarefa.find();
  res.send(tarefas);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});