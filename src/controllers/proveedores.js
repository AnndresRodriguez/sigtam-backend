const express = require('express');
const router = express.Router();
const Proveedores = require("../models/model-proveedores");

router.get("/", async (req, res) => {
    const proveedores = await Proveedores.find()
    res.json(proveedores);
  });

router.post("/addmany", async (req, res, next)=>{
    Proveedores.insertMany([

        {
            "id" : 1,
            "nit" : "112233441",
            "nombre" : "Proveedor Aceites",
            "representanteLegal" : "Andres Carrillo",
            "telefonoFijo" : "5829500",
            "telefonoMovil" : "3112255637",
            "paginaweb" : "www.proveedortaller.com",
            "direccion" : "Calle 13 av 12 Barrio Gaitán",
            "ciudad" : "Cúcuta",
            "Municipio" : "Norte de Santander",
            "Pais" : "Colombia",
            "producto" : "Aceites"
        },

        {
            "id" : 2,
            "nit" : "112233442",
            "nombre" : "Proveedor Bujias",
            "representanteLegal" : "Joel Rodriguez",
            "telefonoFijo" : "5829501",
            "telefonoMovil" : "31045569876",
            "paginaweb" : "www.proveedortaller.com",
            "direccion" : "Calle 13 av 12 Barrio Gaitán",
            "ciudad" : "Cúcuta",
            "Municipio" : "Norte de Santander",
            "Pais" : "Colombia",
            "producto" : "Aceites"
        },

{
    
    "id" : 3,
    "nit" : "114563443",
    "nombre" : "Proveedor Llantas",
    "representanteLegal" : "Karen Cuevas",
    "telefonoFijo" : "5829456",
    "telefonoMovil" : "3104446976",
    "paginaweb" : "www.proveedorllantas.com",
    "direccion" : "Calle 1 av 1 Barrio Latino",
    "ciudad" : "Cúcuta",
    "Municipio" : "Norte de Santander",
    "Pais" : "Colombia",
    "producto" : "Aceites"
}
        
        
    ])
    res.json({archived:true})
})

module.exports = router