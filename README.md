# API de Usuários - Node.js (em desenvolvimento)

## 📚 Sobre

Esta é uma API simples de usuários sendo construída com Node.js e Sequelize para fins de aprendizagem. O objetivo deste projeto é fornecer uma base para quem está começando a aprender sobre criação de APIs RESTful utilizando Node.js, MySQL e Sequelize. Qualquer um pode utilizar e expandir essa API conforme necessário.

## 🚀 Funcionalidades

- **Criar Usuário**: Permite a criação de novos usuários com nome, email e senha. (pronto)
- **Listar Usuários**: Retorna todos os usuários cadastrados no banco de dados. (pronto)
- **Buscar Usuário por ID**: Permite buscar um usuário específico pelo ID. (em andamento)
- **Atualizar Usuário**: Atualiza os dados de um usuário existente. (em andamento)
- **Deletar Usuário**: Deleta um usuário com base no ID. (em andamento)

## 🛠 Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **Sequelize ORM**
- **MySQL**
- **Postman (para testes)**

## 📥 Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- [MySQL](https://www.mysql.com/) instalado e configurado.

### Passos

1. Clone o repositório:

    ```bash
    git clone https://github.com/SEU-USUARIO/REPOSITORIO.git
    cd REPOSITORIO
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure o banco de dados e as credenciais do MySQL no arquivo `config/database.js`.

4. Execute a aplicação:

    ```bash
    npm start
    ```

    Ou, se preferir rodar em modo de desenvolvimento:

    ```bash
    npm run dev
    ```

5. Acesse a API na URL: `http://localhost:8080`

### Testando a API

Você pode usar ferramentas como o [Postman](https://www.postman.com/) para testar os endpoints da API. Aqui estão os exemplos de como utilizá-los:

- **POST** `/` - Criar um novo usuário
- **GET** `/` - Listar todos os usuários
- **GET** `/:id` - Buscar um usuário pelo ID
- **PUT** `/:id` - Atualizar um usuário
- **DELETE** `/:id` - Deletar um usuário

## 📝 Contribuição

Se você tem alguma sugestão ou deseja melhorar a API, fique à vontade para fazer um fork deste repositório e enviar um pull request!

## 💬 Licença

Este projeto é de código aberto e distribuído sob a licença MIT. Sinta-se à vontade para usar e modificar este projeto conforme necessário para suas necessidades.
