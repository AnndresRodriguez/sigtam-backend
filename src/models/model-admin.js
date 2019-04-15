const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const admin= new Schema({
    id: Number,
    nombre: String,
    apellidos: String,
    cedula: String,
    edad: Number,
    email: String,
    numeroCelular: String
})

module.exports = mongoose.model('Admin', admin)