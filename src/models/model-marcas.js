const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const marca = new Schema({
    id: Number,
    nombre: String,    
    modelos: Array
})

module.exports = mongoose.model('Marca', marca)