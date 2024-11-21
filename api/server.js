import express from 'express'
import path from 'path'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const PORT = 5000;

const __dirname = path.resolve();
const app = express();
app.use(express.json());

// Roteamento de arquivos estáticos
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/style.css", (req, res) => {
  res.sendFile(__dirname + "/html/style.css");
});

app.get("/script.js", (req, res) => {
  res.sendFile(__dirname + "/html/script.js");
});

// Cadastrar uma nova tarefa
app.post('/tarefas', async (req, res) => {
  try {
    // Criando a tarefa no banco de dados usando o Prisma
    const tarefaCriada = await prisma.task.create({
      data: {
        nome: req.body.nome,
        custo: parseFloat(req.body.custo),  // Certifique-se de que o custo seja convertido para float
        dataLimite: new Date(req.body.dataLimite)
      }
    });

    // Retornando a tarefa criada com o ID gerado pelo banco de dados
    res.status(201).json(tarefaCriada);

  } catch (error) {
    console.error('Erro ao criar tarefa:', error);
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
});

// Listar todas as tarefas
app.get('/tarefas', async (req, res) => {
  try {
    // Usando o Prisma para buscar todas as tarefas no banco de dados
    const tarefas = await prisma.task.findMany();
    res.status(200).json(tarefas);
  } catch (error) {
    console.error('Erro ao listar tarefas:', error);
    res.status(500).json({ error: 'Erro ao listar tarefas' });
  }
});

// Iniciar o servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
