const express = require('express');
const router = express.Router();

const Clientes = require("../models/model-clientes");

router.get("/", async (req, res) => {
    const clientes = await Clientes.find()
    res.json(clientes);
  });

router.post("/addmany", async (req, res, next)=>{
    Clientes.insertMany([
        {

            "id" : 1,
            "nombre" : "Diana Carolina",
            "apellidos" : "Lopez Bermont",
            "cedula" : "1090848821",
            "email" : "dianacarolinalblob@gmail.com",
            "numeroCelular" : "3112199220"
        },

        {
            "id" : 2,
            "nombre" : "Karen Dayanna",
            "apellidos" : "Cuevas Garces",
            "cedula" : "109084456",
            "email" : "karito.cada@gmail.com",
            "numeroCelular" : "3214568765"
        },

        {
            "id" : 3,
            "nombre" : "Luisa Fernanda",
            "apellidos" : "Valenzuela Ramirez",
            "cedula" : "1090756342",
            "email" : "lufervara@gmail.com",
            "numeroCelular" : "3112568765"
        },
        {
            "id" : 4,
            "nombre" : "Joel Andres",
            "apellidos" : "Rodriguez Carrillo",
            "cedula" : "1090845679",
            "email" : "andresjoe25@gmail.com",
            "numeroCelular" : "3102584187"
        }



    ])
    res.json({archived:true})
})

module.exports = router