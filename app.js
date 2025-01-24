const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const usersRoutes = require('./routes/users');

const app = express();

app.use(bodyParser.json());

app.use('/', usersRoutes);

sequelize.sync().then(() => {
    console.log('Banco de dados sincornizado');
}).catch(error => {
    console.error('Erro ao sincornizar banco de dados:', error);
});

app.listen(8080, () => console.log('API rodando na porta 8080'));