const express = require('express');
const router = express.Router();

const Facturas = require("../models/model-facturas");

router.get("/", async (req, res) => {
    const facturas = await Facturas.find()
    res.json(facturas);
  });

router.post("/addmany", async (req, res, next)=>{
    Facturas.insertMany([
        {
            "id" : 1,
            "vehiculo" : [ 
                {
                    "marca" : "Chevrolet",
                    "modelo" : "Camaro",
                    "placa" : "MIQ-123",
                    "kilometraje" : "2700",
                    "anio" : "2015",
                    "color" : "Gris"
                }
            ],
            "propietario" : [ 
                {
                    "id" : 1,
                    "nombre" : "Diana Carolina",
                    "apellidos" : "Lopez Bermont",
                    "cedula" : "1090848821",
                    "email" : "dianacarolinalblob@gmail.com",
                    "numeroCelular" : "3112199220"
                }
            ],
            "tipo" : "Mantenimiento",
            "parte" : "Chasis",
            "descripcion" : "Cambio de Aceite",
            "precioManoObra" : 43000,
            "fecha" : "07/04/2019",
            "hora" : "17:45",
            "productosAsociados" : [ 
                {
                    "id" : 7,
                    "nombre" : "Aceite de motor 5W-30",
                    "marca" : "SHELL",
                    "unidadDeMedida" : "1 Litro",
                    "precioVenta" : 18800,
                    "cantidad" : 1
                }
            ],
            "precioTotal" : 68100,
            "iva" : 19,
            "totalAPagar" : 81039
        }
    ])
    res.json({archived:true})
})

module.exports = router