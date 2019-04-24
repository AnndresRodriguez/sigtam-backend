const mongoose = require("mongoose");
const Schema  = mongoose.Schema;
import {MongooseAutoIncrementID} from 'mongoose-auto-increment-reworked';

const options = {
  field: 'id', 
  incrementBy: 1, 
  startAt: 5,
  reset: 'resetCount'  
};

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


const plugin = new MongooseAutoIncrementID(vehiculo, 'Vehiculo', options);
plugin.applyPlugin()

module.exports = mongoose.model('Vehiculo', vehiculo)