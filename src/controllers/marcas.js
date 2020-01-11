const express = require('express');
const router = express.Router();
const Marcas = require("../models/model-marcas");

router.get("/", async (req, res) => {
    const marcas = await Marcas.find()
    res.json(marcas);
  });


router.get("/all", async (req, res) => {
    const marcas = await Marcas.find({}, {nombre: true, _id:false})
    const nombresMarcas = []
    marcas.map(marca => nombresMarcas.push(marca.nombre));
    res.json(nombresMarcas);
  });

router.get("/modelos/:id", async (req, res) => {
    const marcas = await Marcas.find({id: `${req.params.id}`});
    res.json(marcas[0].modelos);
  });


module.exports = router