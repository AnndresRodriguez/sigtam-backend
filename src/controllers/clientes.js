const express = require('express');
const router = express.Router();

const Clientes = require("../models/model-clientes");


//Obtener todos los Clientes
router.get("/", async (req, res) => {
    const clientes = await Clientes.find()
    res.json(clientes);
  });


//Obtener Cliente por id
router.get('/:id', async (req, res) => {
  const cliente = await Clientes.findById(req.params.id)
  res.json(cliente)
});

//Almacenar Cliente

router.post("/", async (req, res) => {

const cliente = new Clientes(req.body);
await cliente.save();
console.log(cliente); 
 res.json({
  archived: true,
  clientArchived: cliente.id 
 })
   
});


router.post("/resetid", async (req, res) => {

 res.json({
  resetid: true, 
 })
   
});


//Editar Cliente
router.put("/:id", async (req, res) => {
 await Clientes.findByIdAndUpdate(req.params.id, req.body);
 // await Clientes.findOneAndUpdate(req.params.id, req.body);
  res.json({
    updated:true
  });
});

//Eliminar Cliente
router.delete("/:id", async (req, res) => {
  await Clientes.findByIdAndRemove(req.params.id);
  res.json({
    removed:true
  });
});

// router.post("/addmany", async (req, res, next)=>{
//     Clientes.insertMany([
//         {

//             "id" : 1,
//             "nombre" : "Diana Carolina",
//             "apellidos" : "Lopez Bermont",
//             "cedula" : "1090848821",
//             "email" : "dianacarolinalblob@gmail.com",
//             "numeroCelular" : "3112199220"
//         },

//         {
//             "id" : 2,
//             "nombre" : "Karen Dayanna",
//             "apellidos" : "Cuevas Garces",
//             "cedula" : "109084456",
//             "email" : "karito.cada@gmail.com",
//             "numeroCelular" : "3214568765"
//         },

//         {
//             "id" : 3,
//             "nombre" : "Luisa Fernanda",
//             "apellidos" : "Valenzuela Ramirez",
//             "cedula" : "1090756342",
//             "email" : "lufervara@gmail.com",
//             "numeroCelular" : "3112568765"
//         },
//         {
//             "id" : 4,
//             "nombre" : "Joel Andres",
//             "apellidos" : "Rodriguez Carrillo",
//             "cedula" : "1090845679",
//             "email" : "andresjoe25@gmail.com",
//             "numeroCelular" : "3102584187"
//         }



//     ])
//     res.json({archived:true})
// })

module.exports = router