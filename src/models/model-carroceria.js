const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const carroceria = new Schema({
    id: Number,
    nombre: String,
    precio: Number
});

module.exports = mongoose.model('carrocerias', carroceria);