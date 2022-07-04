const Controller = require('../Controllers/ElControllers');
const db = require('../dataBase/paleDb');
const routes = require('express').Router();

/*função do banco de dados respnsavel pelo connect   */
db();
/*rotas para acesso ao conteudo do controller */
routes.get('/', Controller.padrao);
routes.get('/paletas', Controller.getAll);
routes.get('/paletas/:id', Controller.getById);
routes.post('/create', Controller.create);
routes.put('/update/:id', Controller.update);
routes.delete('/delete/:id', Controller.apagar);

module.exports = routes;
