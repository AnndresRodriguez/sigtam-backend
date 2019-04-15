const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const chasis = new Schema({
    id: Number,
    nombre: String,
    datos: Array
})

module.exports = mongoose.model('Chasis', chasis)