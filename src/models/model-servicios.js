const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const servicio= new Schema({
    id: Number,
    nombre: String
})

module.exports = mongoose.model('Servicio', servicio)