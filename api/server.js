import express from 'express'
import path from 'path'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const PORT = 5000;

const __dirname = path.resolve();
const app = express();
app.use(express.json());

//roteamento de arquivos estáticos
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/style.css", (req, res) => {
  res.sendFile(__dirname + "/html/style.css");
});

app.get("/script.js", (req, res) => {
  res.sendFile(__dirname + "/html/script.js");
});

//cadastrando uma nova tarefa
app.post('/tarefas', async (req, res) => {
  try {
    //criando a tarefa no banco de dados usando o Prisma
    const tarefaCriada = await prisma.task.create({
      data: {
        nome: req.body.nome,
        custo: parseFloat(req.body.custo), 
        dataLimite: new Date(req.body.dataLimite)
      }
    });
    
    res.status(201).json(tarefaCriada);

  } 
    catch(error){
      console.error('Erro ao criar tarefa:', error);
      res.status(500).json({ error: 'Erro ao criar tarefa' });
    }
  });

//listar as tarefas
app.get('/tarefas', async (req, res) => {
  try {
    const tarefas = await prisma.task.findMany();
    res.status(200).json(tarefas);
  } catch (error) {
    console.error('Erro ao listar tarefas:', error);
    res.status(500).json({ error: 'Erro ao listar tarefas' });
  }
});

app.patch('/tarefas/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const tarefaAtualizada = await prisma.task.update({
      where: { id: Number(id) },
      data: req.body,
    });
    res.status(200).json(tarefaAtualizada);
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error);
    res.status(500).json({ error: 'Erro ao atualizar tarefa' });
  }
});

app.delete('/tarefas/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.task.delete({ where: { id: Number(id) } });
    res.status(204).send(); // Resposta sem conteúdo
  } catch (error) {
    console.error('Erro ao excluir tarefa:', error);
    res.status(500).json({ error: 'Erro ao excluir tarefa' });
  }
});



// Iniciar o servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
