const express = require("express");
const morgan = require("morgan");
const app = express();
const adminController = require("./controllers/admin");
const carroceriaController = require("./controllers/carroceria");
const chasisController = require("./controllers/chasis");
const citasController = require("./controllers/citas");
const clientesController = require("./controllers/clientes");
const facturasController = require("./controllers/facturas");
const marcasController = require("./controllers/marcas");
const mecanicosController = require("./controllers/mecanicos");
const productosController = require("./controllers/productos");
const proveedoresController = require("./controllers/proveedores");
const serviciosController = require("./controllers/servicios");
const vehiculosController = require("./controllers/vehiculos");




const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");




//cors
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//Settings Port
app.set("port", process.env.PORT || 3000);

//Database

mongoose.connect("mongodb://localhost/mecanicapp")
// mongoose.connect('mongodb://AndresRodriguez:root@localhost/mecanicapp' , {useNewUrlParser: true})
.then(db => console.log('Connection established'))
.catch(err => console.log(err))

app.use(morgan("dev"));
app.use(express.json());

//Routes
// app.use(routesAuth);
app.use('/admin', adminController);
app.use('/carroceria', carroceriaController);
app.use('/chasis', chasisController);
app.use('/citas', citasController);
app.use('/clientes', clientesController);
app.use('/facturas', facturasController);
app.use('/marcas', marcasController);
app.use('/mecanicos', mecanicosController);
app.use('/productos', productosController);
app.use('/proveedores', proveedoresController);
app.use('/servicios', serviciosController);
app.use('/vehiculos', vehiculosController);

// app.use('/usuarios', routesUsers);
//Static Files

//Listening server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
