# Sistema de Tarefas

Este é um projeto de gerenciamento de tarefas, desenvolvido com **HTML**, **CSS**, **JavaScript**, **Node.js**, **Prisma ORM** e **MongoDB**, que permite aos usuários adicionar, listar, editar e excluir tarefas, com integração a um banco de dados.

## Funcionalidades

- Adicionar tarefas com nome, custo e data limite.
- Listar tarefas em uma tabela organizada.
- Editar informações das tarefas existentes.
- Excluir tarefas após confirmação.
- Destaque visual para tarefas com custo acima de R$ 1000.
- Persistência de dados utilizando **MongoDB** como banco de dados principal.

## Tecnologias Utilizadas

### Frontend
- **HTML5** e **CSS3**: Estrutura e estilos da interface.
- **Bootstrap 5.3**: Design responsivo.
- **JavaScript**: Lógica para manipulação de DOM e comunicação com o backend.

### Backend
- **Node.js**: Plataforma de execução do backend.
- **Express**: Framework para gerenciamento de rotas e APIs.
- **Prisma ORM**: Ferramenta de abstração para o banco de dados.
- **MongoDB**: Banco de dados NoSQL para persistência de informações.

## Instalação e Uso

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Passo a passo

### Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/sistema-de-tarefas.git
   cd sistema-de-tarefas
   ```
### Instale as dependências:
  ```
  npm install
  ```
### Configure o banco de dados MongoDB:

Certifique-se de que o MongoDB está em execução na sua máquina.
Altere a string de conexão no arquivo de configuração, se necessário.

### Execute o servidor:
```
npm start
``` 
Ou
```
node --watch server.js
```
### Acesse o sistema:

Abra um navegador e vá para: http://localhost:5000

## Exemplo de Uso

### Adicionando uma Tarefa
- Preencha os campos "Tarefa", "Custo" e "Data Limite".
- Clique no botão "Adicionar".
- A tarefa será exibida na tabela.
### Editando uma Tarefa
- Clique no botão "Editar" ao lado da tarefa desejada.
- Modifique os campos diretamente na tabela.
- Clique em "Salvar" para confirmar.
### Excluindo uma Tarefa
- Clique no botão "Excluir" ao lado da tarefa desejada.
- Confirme a exclusão na janela de diálogo.

## Estrutura do Projeto

```
sistema-de-tarefas/
├── api/                    # Diretório para as rotas e lógica do backend
├── html/                   # Diretório contendo os arquivos do frontend
│   ├── index.html          # Página principal do frontend
│   ├── style.css           # Arquivo de estilo CSS
│   └── script.js           # Lógica de interação do cliente
├── node_modules/           # Dependências do projeto gerenciadas pelo Node.js
├── prisma/
│   └── schema.prisma       # Configuração do banco de dados MongoDB
├── .gitignore              # Arquivo para ignorar arquivos/diretórios no Git
├── package.json            # Arquivo de dependências do Node.js
├── package-lock.json       # Arquivo de bloqueio de dependências do Node.js
├── server.js               # Arquivo principal do backend
└── README.md               # Documentação do projeto
```
