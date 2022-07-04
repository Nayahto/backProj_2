const modelmong = require('../models/Paleta');

/*lado service que vai lidar com a requisição de todas as paletas ou o mesmo que getAll*/
const servAll = async () => {
    const paletas1 = await modelmong.find();
    return paletas1;
};
/*lado service que vai lidar com a requisição de todas as paletas por Id ou o mesmo que getById*/
const servById = async id => {
    const paletas2 = await modelmong.findById(id);
    return paletas2;
};
/*lado service responsavel pela criação das novas paletas ou new index*/
const servNew = async paleta => {
    const newpale = await modelmong.create(paleta);
    return paleta;
};
/*lado service responsavel pela requisicao do  Id para atualização do index requisitado ou gete by id and update*/
const servUp = async (id, param) => {
    const paleindex = await modelmong.findByIdAndUpdate(id, param);
    return paleindex;
};
/*lado service responsavel pela deleção dos index ou get by id and delete*/
const servDel = async id => {
    const delId = await modelmong.findByIdAndDelete(id);
    return delId;
};

module.exports = {
    servAll,
    servById,
    servNew,
    servUp,
    servDel,
};
