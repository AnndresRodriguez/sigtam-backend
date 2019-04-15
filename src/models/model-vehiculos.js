const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const vehiculo = new Schema({
    id: Number,
    idUser: Number,
    marca: String,
    modelo: String,
    placa: String,
    kilometraje: String,
    anio: String,
    color: String,
    motor: String,
    marcallantas: String,
    llantaRespuesto: Boolean
})

module.exports = mongoose.model('Vehiculo', vehiculo)