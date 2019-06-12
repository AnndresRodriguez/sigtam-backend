const express = require('express');
const router = express.Router();
const Chasis = require("../models/model-chasis");
router.get("/", async (req, res) => {
    const chasis = await Chasis.find();
    res.json(chasis);
});

router.post("/insertMany", async (req, res) => {
	Chasis.insertMany([

	{
		
    "id" : 1.0,
    "nombre" : "Sistema de Motor",
    "datos" : [ 
         
        {
            "sistemas" : [ 
                {
                    "id" : 1.0,
                    "nombre" : "Sistema de Alimentacion",
                    "componentes" : [ 
                        "Tanque de Gasolina", 
                        "Conductos", 
                        "Bomba de Gasolina", 
                        "Carburador", 
                        "Filtro de Aire"
                    ]
                }, 
                {
                    "id" : 2.0,
                    "nombre" : "Sistema de Encendido",
                    "componentes" : [ 
                        "Batería", 
                        "Bobina", 
                        "Bujias", 
                        "Carburador", 
                        "Distribuidor"
                    ]
                }, 
                {
                    "id" : 3.0,
                    "nombre" : "Sistema de Refrigeración",
                    "componentes" : [ 
                        "Radiador", 
                        "Ventilador", 
                        "Bomba de Agua", 
                        "Termostato", 
                        "Deposito de Expansion", 
                        "Mangueras"
                    ]
                }, 
                {
                    "id" : 4.0,
                    "nombre" : "Sistema de Lubricación",
                    "componentes" : [ 
                        "Carter", 
                        "Bomba de Aceite", 
                        "Filtro", 
                        "Varilla medidora de Aceite", 
                        "Filtro de Aire"
                    ]
                },
                {
                	"id": 5.0,
                	"nombre": "componentes",
                	"componentes" : [ 
                		"Bloque de Cilindros", 
                		"Carter de Aceite", 
                		"Culata", 
                		"Pistón", 
               		    "Biela", 
               		    "Ciguenial"
            		]
                }
            ]
        }
    ]

	},

	{
    
    "id" : 2.0,
    "nombre" : "Sistema de Transmisión",
    "datos": [

    	{
    		"sistemas": [{

    			"id": 1.0,
    			"nombre": "Partes",
    			"componentes" : [ 
		        "Clutch", 
		        "Volante", 
		        "Prensa", 
		        "Disco de Clutch", 
		        "Balinera", 
		        "Horquilla", 
		        "Caja de Cambios", 
		        "Cardán", 
		        "Diferencial", 
		        "Semiejes"
    			]

    		}]
    	}

    ]
},

{
    
    "id" : 3.0,
    "nombre" : "Sistema de Frenos",
    "datos" : [  
        {
            "sistemas" : [ 
                {
                    "id" : 1.0,
                    "nombre" : "Sistema de Tambor",
                    "componentes" : [ 
                        "Campana", 
                        "Cilindro de Rueda", 
                        "Resorte de Recuperacion", 
                        "Forros", 
                        "Bandas"
                    ]
                }, 
                {
                    "id" : 2.0,
                    "nombre" : "Sistema de Disco",
                    "componentes" : [ 
                        "Disco de freno", 
                        "Cilindro", 
                        "Mordaza", 
                        "Pastilla"
                    ]
                },
                {
                	"id": 3.0,
                	"nombre": "Partes",
                	 "componentes" : [ 
                        "Disco de freno", 
                        "Cilindro", 
                        "Mordaza", 
                        "Pastilla"
                    ]

                }
            ]
        }
    ]
},

{
   
    "id" : 4.0,
    "nombre" : "Sistema Electrico",
    "datos" : [ 
        {
            "sistemas" : [ 
                {
                    "id" : 1.0,
                    "nombre" : "Sistema de Carga",
                    "componentes" : [ 
                        "Alternador", 
                        "Regulador", 
                        "Indicador", 
                        "Correa"
                    ]
                }, 
                {
                    "id" : 2.0,
                    "nombre" : "Sistema de Arranque"
                }, 
                {
                    "id" : 3.0,
                    "nombre" : "Sistema de Luces",
                    "componentes" : [ 
                        "Faros Delanteros", 
                        "Luces Direccionales", 
                        "Luces de Parqueo", 
                        "Otras Luces"
                    ]
                }, 
                {
                    "id" : 4.0,
                    "nombre" : "Sistema de Accesorios",
                    "componentes" : [ 
                        "Limpia Brisas", 
                        "Desempañador de Vidrio Trasero", 
                        "Alarma", 
                        "Radio Pasacintas", 
                        "Luces Exploradoras"
                    ]
                },
                {
                	"id": 5.0,
                	"nombre": "Partes",
                	"componentes" : [ 
                        "Limpia Brisas", 
                        "Desempañador de Vidrio Trasero", 
                        "Alarma", 
                        "Radio Pasacintas", 
                        "Luces Exploradoras"
                    ]

                }
            ]
        }
    ]
},
{
    "id" : 5.0,
    "nombre" : "Sistema de Dirección",
    "datos": [{
    	"sistemas": [{
    		"id": 1.0,
    		"nombre": "Partes",
    		"componentes" : [ 
		        "Volante", 
		        "Seguro", 
		        "Columna de Dirección", 
		        "Cruceta", 
		        "Rotula", 
		        "Cremallera", 
		        "Guardapolvo"
   			 ]

    	}]
    }]
    
},
{
    "id" : 6.0,
    "nombre" : "Sistema de Suspensión",
    "datos" : [ 
        {
        	"sistemas": [{
        		"id": 1.0,
        		"nombre": "Partes",
        		"componentes" : [ 
			        "Resortes", 
			        "Ballestas", 
			        "Barras de Torsión", 
			        "Barras estabilizadoras", 
			        "Amortiguadores"
			    ]
        	}]
        }
    ]
}








	])

  res.json({
  	archived: true
  })
})


module.exports = router