// Dependencies
const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const multer = require("multer");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const uuid = require("uuid/v4");

// Routes Controllers
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
require('dotenv').config();

//------------------------------Multer-----------------------------------------

const storage = multer.diskStorage({

    destination: path.join(__dirname, 'files/uploads/'),
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname).toLowerCase());
    }

});

const upload = app.use(multer({
    storage,
    dest: path.join(__dirname, 'files/uploads/'),
    limits: { filesize: 3000000 },
    fileFilter: (req, file, cb) => {
        const fileTypes = /pdf|doc|docx/;
        const mimetype = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));

        if (mimetype && extname) {
            return cb(null, true)
        }

        cb("Error: los archivos deben ser pdf, doc, docx")
    }
}).single('file'))

//--------------------------------------------------------------------------------


//cors
app.use(cors());

//Bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Settings Port
app.set("port", process.env.PORT || 3000);

//Database Local

// mongoose.connect("mongodb://localhost/sigtam", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
//     .then(db => console.log('Connection established'))
//     .catch(err => console.log(err));

//Database Production

mongoose.connect(`${ process.env.PASSWORD_DB }`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(db => console.log('Connection established'))
    .catch(err => console.log(err));


//Connection Private
// mongoose.connect('mongodb://AndresRodriguez:root@localhost/mecanicapp' , {useNewUrlParser: true})


// Morgan y JSON
app.use(morgan("dev"));
app.use(express.json());

// Routes Controllers

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


//Static Files



//Listening server
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
});