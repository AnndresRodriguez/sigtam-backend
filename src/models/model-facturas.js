const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const factura = new Schema({
    id: Number,
    idMecanico: Number,
    idPropietario: Number,
    idVehiculo: Number,
    tipo: String,
    parte: String,
    descripcion: String,
    precioManoObra: Number,
    fecha: String,
    hora: String,
    productosAsociados: Array,
    precioTotal: Number,
    iva: Number,
    totalAPagar: Number
    
})

module.exports = mongoose.model('Factura', factura)