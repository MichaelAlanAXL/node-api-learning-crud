const bcrypt = require('bcrypt');
// Importar dados do usuário no banco de dados
const User = require('../models/users');

module.exports = {

    // Função para pegar todos os usuário no banco
    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll(); // modelo para pegar os dados em sequelize/mysql
            res.json(users); // formato JSON
        } catch (error) {
            console.log('Error fetching users:', error);
            res.status(500).json({ message: 'Erro ao buscar usuários', error: error.message || error });
        }
    }, 

    // Função para pegar único ID
    getUserById: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await User.findByPk(id); // Buscando por ID no banco de dados
            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar usuário', error });
        }
    },

    // Função para criar novo usuário com senha criptografada
    createUser: async (req, res) => {
        const { name, email, password } = req.body;
        try {
            // Gerando hash
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const newUser = await User.create({ 
                name, 
                email, 
                password: hashedPassword 
            });

            res.status(201).json(newUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao criar usuário', error: error.message || error });
        }
    },

    // Função para atualizar dados usuário
    updateUser: async (req, res) => {
        const { id } = req.params;
        const { name, email, password } = req.body;
        try {
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ message: 'usuário não encontrado' });
            }
            user.name = name || user.name;
            user.email = email || user.email;
            if (password) {
                const saltRounds = 10;
                user.password = await bcrypt.hash(password, saltRounds);
            }

            await user.save(); // Atualizando dados no banco
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar usuário', error });
        }
    },

    // Função para apagar um usuário
    deleteUser: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado!' });
            }
            await user.destroy(); // Deletando usuário
            res.status(204).send();  // Resposta OK
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar usuário', error });
        }
    }

};