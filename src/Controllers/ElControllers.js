const Elserv = require('../Services/ElServices');
const mongoose = require('mongoose');

const padrao = (req, res) => {
    res.send('hello world');
};

/*pegartodos/getall*/
const getAll = async (req, res) => {
    const rotaPadrao = await Elserv.servAll();
    res.send(rotaPadrao);
};

/* pegarPorId/getById*/
const getById = async (req, res) => {
    const id1 = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id1)) {
        return res.status(400).send({ message: 'ID inválido!' });
    } else {
        const idServ = await Elserv.servById(id1);
        if (!idServ) {
            res.status(400).send({ message: 'item exlcuido' });
        } else {
            res.send(idServ);
        }
    }
};

/*create/criar*/
const create = (req, res) => {
    const palebody = req.body;
    if (
        !palebody ||
        !palebody.sabor ||
        !palebody.valor ||
        !palebody.descricao
    ) {
        return res.send({
            message:
                'estão faltando dados no seu formulario, por favor preencha-os!',
        });
    } else {
        const newPale = Elserv.servNew(palebody);
        res.send({ message: 'item adicionado com sucesso' });
    }
};

/*atualizar/update*/
const update = (req, res) => {
    const id2 = req.params.id;
    const param = req.body;
    const updatePale = Elserv.servUp(id2, param);
    res.send({ messge: 'paleta atualizada!' });
};

/*apagar/delete*/
const apagar = (req, res) => {
    const id3 = req.params.id;
    if (!id3) {
        return res.status(400).send({
            message: 'nao foi posivel deletar essa paleta',
        });
    } else {
        const tes = Elserv.servDel(id3);
        res.send({ message: 'paleta deletada com sucesso' });
    }
};

module.exports = {
    getById,
    getAll,
    padrao,
    create,
    update,
    apagar,
};
/*testes */
