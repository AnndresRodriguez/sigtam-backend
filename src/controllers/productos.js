const express = require('express');
const router = express.Router();
const Productos = require("../models/model-productos");

router.get("/", async (req, res) => {
    const productos = await Productos.find()
    res.json(productos);
  });

router.post("/all", async (req, res) => {
    const marcas = await Productos.find({}, {nombre: true, id:true, _id:false})
    res.json(marcas);
 });

router.post("/all/:id", async (req, res) => {
   
    const marcas = await Productos.find({ id: `${req.params.id}` }, { productos:true, nombre:true, _id:false});
    res.json({
        allproductos: marcas[0].productos.reverse(),
        nombreCategoria: marcas[0].nombre
    });
 });

router.post("/products/:id", async (req, res) => {
    const marcas = await Productos.find({ id: `${req.params.id}` }, { productos:true, _id:false});
    res.json(marcas[0].productos.length);
 });

router.post("/add", async (req, res) => {

  const typeProduct = await Productos.findOne({id: req.body.id})
  typeProduct.productos.push(req.body.product[0])
  typeProduct.save()
    res.json({
   archived: true
    })
 });

//Editar Producto
 router.put("/:id", async (req, res) => {
 
  console.log(req.body)
  let category = parseInt(req.params.id)
  let idProduct = parseInt(req.body.id) 

  Productos.updateOne({id: req.params.id, "productos.id": req.body.id }, {

        $set: {
                "productos.$.nombre": req.body.nombre,
                "productos.$.marca": req.body.marca,
                "productos.$.unidadDeMedida": req.body.unidadDeMedida,
                "productos.$.cantidadEnStock": req.body.cantidadEnStock,
                "productos.$.precioCompra": req.body.precioCompra,
                "productos.$.precioVenta": req.body.precioVenta, 
         }

   })
  
 
  res.json({
    updated: true
  });
});



//Eliminar Producto
router.delete("/:id", async (req, res) => {
 
let category = parseInt(req.params.id) 
let idProduct = parseInt(req.query.idProductToDelete) 

console.log(category)
console.log(idProduct)


Productos.update({ id: category }, { $pull: { productos: { id: idProduct } }}, { safe: true, multi:true });
  res.json({
    deleted: true
  });

});

// router.post("/addmany", async (req, res, next)=>{
//     Productos.insertMany([

//         {
//             "id": 1,
//             "nombre": "Aceites",
//             "productos": [
//               {
//                 "id": 1,
//                 "nombre": "Aceite de motor 5W-30",
//                 "marca": "K2",
//                 "unidadDeMedida": "1 Litro",
//                 "cantidadEnStock": 7,
//                 "precioCompra": 16000,
//                 "precioVenta": 17800
//               },
//               {
//                 "id": 2,
//                 "nombre": "Aceite de motor 5W-40",
//                 "marca": "Vatoil",
//                 "unidadDeMedida": "1 Litro",
//                 "cantidadEnStock": 10,
//                 "precioCompra": 12000,
//                 "precioVenta": 14800
//               },
//               {
//                 "id": 3,
//                 "nombre": "Aceite de motor 5W-40",
//                 "marca": "Orlen",
//                 "unidadDeMedida": "1 Litro",
//                 "cantidadEnStock": 2,
//                 "precioCompra": 18000,
//                 "precioVenta": 21800
//               },
//               {
//                 "id": 4,
//                 "nombre": "Aceite de motor 5W-30",
//                 "marca": "K2",
//                 "unidadDeMedida": "1 Litro",
//                 "cantidadEnStock": 2,
//                 "precioCompra": 16000,
//                 "precioVenta": 18800
//               },
//               {
//                 "id": 1,
//                 "nombre": "Aceite de motor 5W-40",
//                 "marca": "COMMA",
//                 "unidadDeMedida": "1 Litro",
//                 "cantidadEnStock": 18,
//                 "precioCompra": 15000,
//                 "precioVenta": 17800
//               },
//               {
//                 "id": 1,
//                 "nombre": "Aceite de motor 5W-30",
//                 "marca": "ARAL",
//                 "unidadDeMedida": "1 Litro",
//                 "cantidadEnStock": 2,
//                 "precioCompra": 14000,
//                 "precioVenta": 16800
//               },
//               {
//                 "id": 1,
//                 "nombre": "Aceite de motor 5W-30",
//                 "marca": "SHELL",
//                 "unidadDeMedida": "1 Litro",
//                 "cantidadEnStock": 2,
//                 "precioCompra": 16000,
//                 "precioVenta": 18800
//               }
//             ]
//         },
//         {
//             "id": 2,
//             "nombre": "Filtros de Aire",
//             "productos": [
//               {
//                 "id": 1,
//                 "nombre": "Filtro de aire (RIDEX)",
//                 "marca": "RIDEX",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 10,
//                 "precioCompra": 21700,
//                 "precioVenta": 23700
//               },
//               {
//                 "id": 2,
//                 "nombre": "Filtro de aire (PROFIT)",
//                 "marca": "PROFIT",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 15,
//                 "precioCompra": 13400,
//                 "precioVenta": 16400
//               },
//               {
//                 "id": 3,
//                 "nombre": "Filtro de aire (HENGST FILTER)",
//                 "marca": "HENGST FILTER",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 19,
//                 "precioCompra": 13400,
//                 "precioVenta": 16400
//               },
//               {
//                 "id": 4,
//                 "nombre": "Filtro de aire (MEAT & DORIA)",
//                 "marca": "MEAT & DORIA",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 24,
//                 "precioCompra": 17500,
//                 "precioVenta": 19600
//               },
//               {
//                 "id": 5,
//                 "nombre": "Filtro de aire (DENCKERMANN)",
//                 "marca": "DENCKERMANN",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 24,
//                 "precioCompra": 19500,
//                 "precioVenta": 21600
//               },
//               {
//                 "id": 6,
//                 "nombre": "Filtro de aire (MAXGEAR)",
//                 "marca": "MAXGEAR",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 24,
//                 "precioCompra": 19500,
//                 "precioVenta": 21600
//               }
//             ]
//         },
//         {
//             "id": 3,
//             "nombre": "Filtros de Aceite",
//             "productos": [
//               {
//                 "id": 1,
//                 "nombre": "Filtro de aceite 76mm, Filtro enroscable",
//                 "marca": "MAPCO",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 24,
//                 "precioCompra": 19500,
//                 "precioVenta": 21600
//               },
//               {
//                 "id": 2,
//                 "nombre": "Filtro de aceite 65mm, Cartucho filtrante",
//                 "marca": "NIPPARTS",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 6,
//                 "precioCompra": 17500,
//                 "precioVenta": 15600
//               },
//               {
//                 "id": 3,
//                 "nombre": "Filtro de aceite 65mm",
//                 "marca": "MAXGEAR",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 5,
//                 "precioCompra": 19500,
//                 "precioVenta": 21600
//               },
//               {
//                 "id": 4,
//                 "nombre": "iltro de aceite 63mm, Cartucho filtrante",
//                 "marca": "ASHIKA",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 10,
//                 "precioCompra": 18500,
//                 "precioVenta": 20600
//               },
//               {
//                 "id": 5,
//                 "nombre": "Filtro de aceite 63mm, Cartucho filtrante",
//                 "marca": "AUTOMEGA",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 12,
//                 "precioCompra": 13700,
//                 "precioVenta": 15700
//               },
//               {
//                 "id": 6,
//                 "nombre": "Filtro de aceite 66mm MEAT & DORIA",
//                 "marca": "MEAT & DORIA",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 24,
//                 "precioCompra": 19500,
//                 "precioVenta": 21600
//               }
//             ]
//         },
//         {
//             "id": 4,
//             "nombre": "Filtros de Combustible",
//             "productos": [
//               {
//                 "id": 1,
//                 "nombre": "Filtro combustible (RIDEX)",
//                 "marca": "RIDEX",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 53,
//                 "precioCompra": 12500,
//                 "precioVenta": 14600
//               },
//               {
//                 "id": 2,
//                 "nombre": "Filtro combustible (MAHLE ORIGINAL)",
//                 "marca": "MAHLE ORIGINAL",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 26,
//                 "precioCompra": 21500,
//                 "precioVenta": 23600
//               },
//               {
//                 "id": 3,
//                 "nombre": "Filtro combustible (NIPPARTS)",
//                 "marca": "NIPPARTS",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 37,
//                 "precioCompra": 15500,
//                 "precioVenta": 17600
//               },
//               {
//                 "id": 4,
//                 "nombre": "Filtro combustible (DENCKERMANN)",
//                 "marca": "DENCKERMANN",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 40,
//                 "precioCompra": 18500,
//                 "precioVenta": 20600
//               },
//               {
//                 "id": 5,
//                 "nombre": "Filtro combustible (MAXGEAR)",
//                 "marca": "MAXGEAR",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 22,
//                 "precioCompra": 15700,
//                 "precioVenta": 17700
//               },
//               {
//                 "id": 6,
//                 "nombre": "Filtro combustible KAMOKA (KAMOKA)",
//                 "marca": "KAMOKA",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 24,
//                 "precioCompra": 18500,
//                 "precioVenta": 20600
//               }
//             ]
//         },
//           {
//             "id": 5,
//             "nombre": "Bujías",
//             "productos": [
//               {
//                 "id": 1,
//                 "nombre": "Bujía de precalentamiento (MAXGEAR)",
//                 "marca": "MAXGEAR",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 15,
//                 "precioCompra": 30500,
//                 "precioVenta": 32600
//               },
//               {
//                 "id": 2,
//                 "nombre": "Bujía de precalentamiento (MAGNETI MARELLI)",
//                 "marca": "MAGNETI MARELLI",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 25,
//                 "precioCompra": 31500,
//                 "precioVenta": 33600
//               },
//               {
//                 "id": 3,
//                 "nombre": "Bujía de precalentamiento (BLUE PRINT)",
//                 "marca": "BLUE PRINT",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 35,
//                 "precioCompra": 36300,
//                 "precioVenta": 38300
//               },
//               {
//                 "id": 4,
//                 "nombre": "Bujía de precalentamiento (NIPPARTS)",
//                 "marca": "NIPPARTS",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 35,
//                 "precioCompra": 39300,
//                 "precioVenta": 41300
//               }
//             ]
//           },
//           {
//             "id": 6,
//             "nombre": "Inyectores",
//             "productos": [
//               {
//                 "id": 1,
//                 "nombre": "Inyector ORIGINAL ERSATZTEIL (METZGER)",
//                 "marca": "METZGER",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 10,
//                 "precioCompra": 6613000,
//                 "precioVenta": 6813400,
//                 "precioMasIva": 0
//               },
//               {
//                 "id": 2,
//                 "nombre": "Inyector (BOSCH)",
//                 "marca": "BOSCH",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 20,
//                 "precioCompra": 7013000,
//                 "precioVenta": 7213400
//               },
//               {
//                 "id": 3,
//                 "nombre": "Inyector Q+ (ACKOJAP)",
//                 "marca": "ACKOJAP",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 5,
//                 "precioCompra": 1215000,
//                 "precioVenta": 1235000
//               }
//             ]
//           },
//           {
//             "id": 6,
//             "nombre": "Llantas",
//             "productos": [
//               {
//                 "id": 1,
//                 "nombre": "Llanta PIRELLI Cinturato P1 185/65R15",
//                 "marca": "PIRELLI",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 34,
//                 "precioCompra": 151000,
//                 "precioVenta": 181000,
//                 "precioMasIva": 0
//               },
//               {
//                 "id": 2,
//                 "nombre": "Llanta DUNLOP SP Sport LM704 185/60R14",
//                 "marca": "DUNLOP",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 30,
//                 "precioCompra": 199000,
//                 "precioVenta": 209000,
//                 "precioMasIva": 0
//               },
//               {
//                 "id": 3,
//                 "nombre": "Llanta TOYO NanoEnergy 3 165/65R13",
//                 "marca": "TOYO TIRES",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 29,
//                 "precioCompra": 149000,
//                 "precioVenta": 169000,
//                 "precioMasIva": 0
//               },
//               {
//                 "id": 4,
//                 "nombre": "Llanta DUNLOP SP Sport LM704 195/65R15",
//                 "marca": "DUNLOP",
//                 "unidadDeMedida": "unidad",
//                 "cantidadEnStock": 39,
//                 "precioCompra": 149000,
//                 "precioVenta": 169000,
//                 "precioMasIva": 0
//               }
//             ]
//           }

//     ])
//     res.json({archived:true})
// })

module.exports = router