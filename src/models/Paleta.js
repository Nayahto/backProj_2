const mongoose = require('mongoose');
const paletaSchema = new mongoose.Schema({
    sabor: { type: String, required: true },
    valor: { type: String, required: true },
    descricao: { type: String, required: true },
});
const Paleta = mongoose.model('Paletas', paletaSchema);

module.exports = Paleta;
