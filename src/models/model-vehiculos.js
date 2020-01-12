const mongoose = require("mongoose");
const Schema  = mongoose.Schema;


const vehiculo = new Schema({
    id: Number,
    idUser: Number,
    marca: String,
    modelo: String,
    placa: String,
    kilometraje: {type: String, default: "No registrado"},
    anio: {type: String, default: "No registrado" },
    color: {type: String, default: "No registrado" },
    motor: {type: String, default: "No registrado" },
    marcallantas: {type: String, default: "No registrado" }
})



module.exports = mongoose.model('Vehiculo', vehiculo)