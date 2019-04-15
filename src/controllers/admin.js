const express = require('express');
const router = express.Router();
const Admin = require("../models/model-admin");

router.get("/", async (req, res) => {
  const admin = await Admin.find()
  res.json(admin);
});

router.post("/addmany", async (req, res, next)=>{
  Admin.insertMany([

      {
            "id" : 1,
            "nombre" : "Karen Dayanna",
            "apellidos" : "Cuevas Garces",
            "cedula" : "1090371171",
            "edad" : 35,
            "email" : "andres@gmail.com",
            "numeroCelular" : "3101546734",
      }    
      
  ])
  res.json({archived:true})
})

module.exports = router
