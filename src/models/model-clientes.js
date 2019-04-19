const mongoose = require("mongoose");
const Schema  = mongoose.Schema;
import {MongooseAutoIncrementID} from 'mongoose-auto-increment-reworked';

const options = {
  field: 'id', 
  incrementBy: 1, 
  startAt: 5,
  reset: 'resetCount' 
};

const cliente= new Schema({
    id: Number,
    nombre: String,
    apellidos: String,
    cedula: String,
    email: { type: String, default: 'No registrado'},
    numeroCelular: String
})

const plugin = new MongooseAutoIncrementID(cliente, 'Cliente', options);
plugin.applyPlugin()

module.exports = mongoose.model('Cliente', cliente)