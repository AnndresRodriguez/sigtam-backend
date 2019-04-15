const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const mecanico = new Schema({
    id: Number,
    nombre: String,
    apellidos: String,
    cedula: String,
    edad: Number,
    email: String,
    numeroCelular: String,
    anioNacimiento: String,
    aniosExperiencia: String,    
    empresasAnteriores: Array,
    salario: Number
})

module.exports = mongoose.model('Mecanico', mecanico)