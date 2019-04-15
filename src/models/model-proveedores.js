const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const proveedor = new Schema({
    id: Number,
    nit: String,
    nombre: String,
    representanteLegal: String,
    telefonoFijo: String,
    telefonoMovil: String,
    paginaweb: String,
    direccion: String,
    ciudad: String,
    Municipio: String,    
    Pais: String
})

module.exports = mongoose.model('Proveedor', proveedor)