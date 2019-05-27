const express = require('express');
const router = express.Router();
const Servicio = require("../models/model-servicios");

router.get("/", async (req, res) => {
    const servicios = await Servicio.find({}, {id:true, nombre:true, _id:false})
    res.json(servicios);
  });


  
  // router.post("/addmany", async (req, res, next)=>{
  //   Servicio.insertMany([
  
  //       {
  //           "id": 1,
  //           "nombre": "Reparación"
  //         },
  //         {
  //           "id": 2,
  //           "nombre": "Mantenimiento"
  //         },
  //         {
  //           "id": 3,
  //           "nombre": "Revisión Preventiva"
  //         },
  //         {
  //           "id": 4,
  //           "nombre": "Revisión Tecnico Mecánica"
  //         },
  //         {
  //           "id": 5,
  //           "nombre": "Alineación y Balanceo"
  //         },
  //         {
  //           "id": 6,
  //           "nombre": "Cambio de Aceite"
  //         },
  //         {
  //           "id": 7,
  //           "nombre": "Servicio de Scanner"
  //         },
  //         {
  //           "id": 8,
  //           "nombre": "Sincronización Eléctrica"
  //         },
  //         {
  //           "id": 9,
  //           "nombre": "Sincronización Full Inyeccion"
  //         },
  //         {
  //           "id": 10,
  //           "nombre": "Caliración de Gases"
  //         },
  //         {
  //           "id": 11,
  //           "nombre": "Bajada de Caja"
  //         },
  //         {
  //           "id": 12,
  //           "nombre": "Bajada de Tanque"
  //         },
  //         {
  //           "id": 13,
  //           "nombre": "Cambio de Pastillas de Frenos"
  //         },
  //         {
  //           "id": 14,
  //           "nombre": "Codificación de llave"
  //         }    
        
  //   ])
  //   res.json({archived:true})
  // })

module.exports = router