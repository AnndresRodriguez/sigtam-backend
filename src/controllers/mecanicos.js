const express = require('express');
const router = express.Router();
const Mecanicos = require("../models/model-mecanicos");

router.get("/", async (req, res) => {
    const mecanicos = await Mecanicos.find()
    res.json(mecanicos);
  });

router.post("/addmany", async (req, res, next)=>{
    Mecanicos.insertMany([

        {
            
            "id" : 1,
            "nombre" : "Andres Joel",
            "apellidos" : "Carrillo Rodriguez",
            "cedula" : "1090371171",
            "edad" : 35.0,
            "email" : "andres@gmail.com",
            "numeroCelular" : "3101546734",
            "anioNacimiento" : "11-05-1995",
            "aniosExperiencia" : "3",
            "empresasAnteriores" : [ 
                {
                    "nombre" : "General Motors",
                    "meses" : "12"
                }, 
                {
                    "nombre" : "Mecanica los Andes",
                    "meses" : "6"
                }, 
                {
                    "nombre" : "Mecanica Central",
                    "meses" : "18"
                }
            ],
            "salario" : 1228116.0
        },

        {
            "id" : 2,
            "nombre" : "Gerson Jair",
            "apellidos" : "Quintero Carvajal",
            "cedula" : "1045371171",
            "edad" : 35.0,
            "email" : "gerson@gmail.com",
            "numeroCelular" : "3107899893",
            "anioNacimiento" : "12-03-1996",
            "aniosExperiencia" : "2",
            "empresasAnteriores" : [ 
                {
                    "nombre" : "General Motors",
                    "meses" : "12"
                }, 
                {
                    "nombre" : "Mecanica los Andes",
                    "meses" : "12"
                }
            ],
            "salario" : 1228116.0
        },
        {
            "id" : 3.0,
            "nombre" : "Hector",
            "apellidos" : "Andrade Gelvis",
            "cedula" : "1034565789",
            "edad" : 34.0,
            "email" : "andres@gmail.com",
            "numeroCelular" : "3101219893",
            "anioNacimiento" : "12-03-1996",
            "aniosExperiencia" : "2",
            "empresasAnteriores" : [ 
                {
                    "nombre" : "General Motors",
                    "meses" : "12"
                }, 
                {
                    "nombre" : "Mecanica los Andes",
                    "meses" : "12"
                }
            ],
            "salario" : 828116.0
        }
        
    ])
    res.json({archived:true})
})

module.exports = router