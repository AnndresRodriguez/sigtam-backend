const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const _ = require('lodash');
const cors = require("cors");

module.exports = () => {

    let server = express();
    let create = (config, db) => {

        app.use(cors());

        let routes = require('./routes');
        // Server settings
        server.set("port", process.env.PORT || 3000);
        // Returns middleware that parses json
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: false }));
        server.use(cookieParser());
        server.use(logger('dev'));
        app.use(express.json());
        server.use(passport.initialize());
        mongoose.connect(db.database, {useNewUrlParser: true});
        require('../configs/passport')(passport);
        // Set up routes
        routes.init(server);

    };
    
    let start = () => {
        server.listen(server.get("port"), () => {
            console.log("Server on port", server.get("port"));
        });
    }

    return { create, start }

}