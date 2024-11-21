# Sistema de Tarefas

Este é um projeto de gerenciamento de tarefas, desenvolvido com HTML, CSS, JavaScript, Node.js, Prisma ORM e MongoDB, que permite aos usuários adicionar, listar, editar e excluir tarefas, com integração a um banco de dados.

# Funcionalidades

- Adicionar tarefas com nome, custo e data limite.
- Listar tarefas em uma tabela organizada.
- Editar informações das tarefas existentes.
- Excluir tarefas após confirmação.
- Destaque visual para tarefas com custo acima de R$ 1000.
- Persistência de dados utilizando MongoDB como banco de dados principal.

# Tecnologias Utilizadas

- Frontend
HTML5 e CSS3: Estrutura e estilos da interface.
Bootstrap 5.3: Design responsivo.
JavaScript: Lógica para manipulação de DOM e comunicação com o backend.

- Backend
Node.js: Plataforma de execução do backend.
Express: Framework para gerenciamento de rotas e APIs.
Prisma ORM: Ferramenta de abstração para o banco de dados.
MongoDB: Banco de dados NoSQL para persistência de informações.

# Instalação e Uso

- Pré-requisitos
Node.js
MongoDB

# Passo a passo

- Clone o repositório:

git clone https://github.com/seu-usuario/sistema-de-tarefas.git
cd sistema-de-tarefas

- Configure o banco de dados MongoDB:

Certifique-se de que o MongoDB está em execução na sua máquina.
Altere a string de conexão no arquivo de configuração, se necessário.

- Execute o servidor:

npm start

# Acesse o sistema:

Abra um navegador e vá para: http://localhost:5000

# Estrutura do Projeto

-sistema-de-tarefas/
-├── html/
-│   ├── index.html
-│   ├── style.css
-│   └── script.js
-├── server.js
-├── package.json
-├── prisma/
-│   └── schema.prisma
-└── README.md
