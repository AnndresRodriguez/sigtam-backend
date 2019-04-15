const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const citas = new Schema({
    id: Number,
    fecha: String,
    horaRealizacion: String,
    correo: String,
    numeroCelular: String,
    descripcion: String
})

module.exports = mongoose.model('Citas', citas)