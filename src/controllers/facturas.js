const express = require('express');
const router = express.Router();

const Facturas = require("../models/model-facturas");

router.get("/", async (req, res) => {
    // const facturas = await Facturas.find()
    const facturas = await Facturas.aggregate([

   { $lookup: { from: "mecanicos", localField: "idMecanico", foreignField: "id", as: "factura_mecanico"} },
   
   { $unwind:"$factura_mecanico" },
   
   { $lookup: { from: "vehiculos", localField: "idVehiculo", foreignField: "id", as: "factura_vehiculo"} },
   
   { $unwind:"$factura_vehiculo" },
   
   { $lookup: { from: "clientes", localField: "idPropietario", foreignField: "id", as: "factura_cliente"} },
   
   { $unwind:"$factura_cliente" },
   
   {   
      $project:{
            tipo: 1,
            parte: 1,
            descripcion: 1,
            precioManoObra: 1,
            fecha: 1,
            hora: 1,
            precioTotal: 1,
            productosAsociados: 1,
            responsableNombre : "$factura_mecanico.nombre",
            responsableApellidos: "$factura_mecanico.apellidos",
            nombreCliente: "$factura_cliente.nombre",
            apellidosCliente: "$factura_cliente.apellidos", 
            vehiculoMarca: "$factura_vehiculo.marca",
            vehiculoModelo: "$factura_vehiculo.modelo",
            vehiculoPlaca: "$factura_vehiculo.placa",
        } 
    }])


    res.json(facturas);
  });



router.post("/addmany", async (req, res, next)=>{
    Facturas.insertMany([
        {
            "id" : 1,
            "idMecanico": 1,
            "idVehiculo": 1,
            "idPropietario": 1,
            "tipo" : "Mantenimiento",
		    "parte" : "Chasis",
		    "descripcion" : "Cambio de Aceite",
		    "precioManoObra" : 43000.0,
		    "fecha" : "07/04/2019",
		    "hora" : "17:45",
		    "productosAsociados" : [ 
		        {
		            "id" : 7.0,
		            "nombre" : "Aceite de motor 5W-30",
		            "marca" : "SHELL",
		            "unidadDeMedida" : "1 Litro",
		            "precioVenta" : 18800.0,
		            "cantidad" : 1.0
		        }
		    ],
		    "precioTotal" : 68100.0,
		    "iva" : 19.0,
		    "totalAPagar" : 81039.0
		        }
    ])
    res.json({archived:true})
})

module.exports = router