import express from 'express'
import path from 'path'
import crypto from "crypto"

const PORT = 5000;

const __dirname = path.resolve();
const app = express();
app.use(express.json());


const tasks = [];

app.get("/", function(req, res){
  res.sendFile(__dirname + "/html/index.html")
});
app.get("/style.css", function(req,res){
  res.sendFile(__dirname + "/html/style.css")
})
app.get("/script.js", function(req,res){
  res.sendFile(__dirname + "/html/script.js")
})

// Cadastrar uma nova tarefa
app.post('/tarefas', (req, res) => {
  console.log(req.body);
  req.body.id = crypto.randomUUID();
  console.log(req.body);
  tasks.push(req.body);

  res.status(201).json(req.body);
});

// Listar todoas as tarefas
app.get('/tarefas', (req, res) => {
  res.status(200).json(tasks);
});

// Iniciar o servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));