import express from "express";
import morgan from "morgan";
import cors from "cors";
import db from "./config/database";
import routesAuth from "./routes/auth";
import routesAdmin from "./routes/roles";
import bodyParser from 'body-parser'

const app = express();

//cors
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//Settings Port
app.set("port", process.env.PORT || 3000);

//Database
db.connection().authenticate()
.then(() => {
  console.log("Connection Established...");
})
.catch(error => {
  console.log(error);
});


// db.authenticate()
  // .then(() => {
  //   console.log("Connection Established...");
  // })
  // .catch(error => {
  //   console.log(error);
  // });

//Middlewares

app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use(routesAuth);
app.use(routesAdmin);

//Static Files

//Listening server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
