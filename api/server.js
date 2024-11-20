import express from 'express'
//import mongoose from 'mongoose'

const PORT = 5000;

const app = express();
app.use(express.json());

const tasks = [];



//mongoose.connect('mongodb://localhost:27017/meuBanco', { useNewUrlParser: true, useUnifiedTopology: true });

/*const TarefaSchema = new mongoose.Schema({
  tarefa: String,
  custo: Number,
  dataLimite: String,
});*/

//const Tarefa = mongoose.model('Tarefa', TarefaSchema);

// Cadastrar uma nova tarefa
app.post('/tarefas', (req, res) => {
  
  tasks.push(req.body);

  res.status(201).json(req.body);
});

// Listar todoas as tarefas
app.get('/tarefas', (req, res) => {
  res.status(200).json(tasks);
});

// Iniciar o servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));