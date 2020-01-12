const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const cliente= new Schema({
    id: Number,
    nombre: String,
    apellidos: String,
    cedula: String,
    email: { type: String, default: 'No registrado'},
    numeroCelular: String
})


module.exports = mongoose.model('Cliente', cliente)