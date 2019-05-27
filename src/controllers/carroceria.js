const express = require("express");
const router = express.Router();

const Carroceria = require("../models/model-carroceria");
// console.log(Carroceria)

//Obtener Carroceria
router.get("/", async (req, res) => {
  const carrocerias = await Carroceria.find();
  console.log(carrocerias)
  res.json(carrocerias);
});


//Obtener Carroceria por id
router.get('/:id', async (req, res) => {
  const carroceria = await Carroceria.findById(req.params.id)
  res.json(carroceria)
});

//Almacenar Carroceria
router.post("/", async (req, res) => {
  const carroceria = new Carroceria(req.body);
  // const carroceria  = new Carroceria({ "id" : 15.0, "nombre" : "Nuevo"})
  await carroceria.save();
  res.json({
    archived: true
  });
});


//Editar Carroceria
router.put("/:id", async (req, res) => {
  await Carroceria.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    updated:true
  });
});

//Eliminar Carroceria
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({
    removed:true
  });
});

module.exports = router