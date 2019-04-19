const express = require('express');
const router = express.Router();
const Mecanicos = require("../models/model-mecanicos");

//Obtener todos los mecanicos
router.get("/", async (req, res) => {
    const mecanicos = await Mecanicos.find()
    res.json(mecanicos);
  });

//Obtener Mecanico por id
router.get('/:id', async (req, res) => {
  const mecanico = await Mecanicos.findById(req.params.id)
  res.json(mecanico)
});

//Almacenar Mecanico

router.post("/", async (req, res) => {

const mecanico = new Mecanicos(req.body);
await mecanico.save();  
 res.json({
  updated: true
 })
   
});

router.post("/upload", async (req, res) => {
   console.log(req.file)
   res.json({
    archivedHojaVida: true
   })
   
});

//Editar Mecanico
router.put("/:id", async (req, res) => {
 await Mecanicos.findByIdAndUpdate(req.params.id, req.body);
 // await Mecanicos.findOneAndUpdate(req.params.id, req.body);
  res.json({
    updated:true
  });
});

//Eliminar Mecanico
router.delete("/:id", async (req, res) => {
  await Mecanicos.findByIdAndRemove(req.params.id);
  res.json({
    removed:true
  });
});


module.exports = router