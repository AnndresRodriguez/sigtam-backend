const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const producto = new Schema({
    id: Number,
    nombre: String,      
    productos: Array,
 
})

module.exports = mongoose.model('Producto', producto)