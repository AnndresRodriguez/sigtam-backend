const express = require('express');
const router = express.Router();
const Vehiculos = require("../models/model-vehiculos");

router.get("/", async (req, res) => {
    const vehiculos = await Vehiculos.find()
    res.json(vehiculos);
  });

router.get('/:id', async (req, res) => {
  const vehiculo = await Vehiculos.find({idUser: `${req.params.id}`})
  res.json(vehiculo)
});

router.put("/:id", async (req, res) => {
 // await Vehiculos.findByIdAndUpdate({idUser: `${req.params.id}`}, req.body);
  await Vehiculos.updateOne({idUser: `${req.params.id}`}, req.body);
  res.json({
    updated:true
  });
});

router.post("/resetid", async (req, res) => {

 res.json({
  resetid: true, 
 })
   
});

router.post("/", async (req, res) => {

const vehiculo = new Vehiculos(req.body);
await vehiculo.save();
 
 res.json({
  archived: true,
 })
   
});
  
  // router.post("/addmany", async (req, res, next)=>{
  //   Vehiculos.insertMany([
  //       { 
  //           "id" : 1,
  //           "idUser" : 1,
  //           "marca" : "Chevrolet",
  //           "modelo" : "Camaro",
  //           "placa" : "MIQ-123",
  //           "kilometraje" : "2700",
  //           "anio" : "2015",
  //           "color" : "Gris",
  //           "motor" : "Gasolina",
  //           "marcallantas" : "Bridgestone",
  //           "llantaRepuesto" : true
  //       },

  //       {
            
  //           "id" : 2,
  //           "idUser" : 2,
  //           "marca" : "Fiat",
  //           "modelo" : "124",
  //           "placa" : "HYA-123",
  //           "kilometraje" : "11300",
  //           "anio" : "2015",
  //           "color" : "Gris",
  //           "motor" : "Gasolina",
  //           "marcallantas" : "Pirelli",
  //           "llantaRepuesto" : true
  //       },

  //       {
  //           "id" : 3,
  //           "idUser" : 3,
  //           "marca" : "Nissan",
  //           "modelo" : "Micra",
  //           "placa" : "API-456",
  //           "kilometraje" : "8300",
  //           "anio" : "2018",
  //           "color" : "Verde",
  //           "motor" : "Gasolina",
  //           "marcallantas" : "Bridgestone",
  //           "llantaRepuesto" : false
  //       }

           
        
  //   ])
  //   res.json({archived:true})
  // })

module.exports = router