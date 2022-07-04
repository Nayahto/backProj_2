const mongoose = require('mongoose');
const dataPale = () => {
    mongoose
        .connect('mongodb://localhost:27017/paleDb', {
            useUnifiedTopology: true,
        })
        .then(() => console.log('conectado ao mongoDb!'))

        .catch(err => {
            return console.log(`com o banco de dados falhou ${err}`);
        });
};

module.exports = dataPale;
