const mongoose = require("mongoose");
const Schema  = mongoose.Schema;


const mecanico = new Schema({
    id: Number,
    nombre: String,
    apellidos: String,
    cedula: String,
    edad: Number,
    email: {type: String, default: 'No registrado'},
    numeroCelular: String,
    hojaVida: String
})

module.exports = mongoose.model('Mecanico', mecanico)