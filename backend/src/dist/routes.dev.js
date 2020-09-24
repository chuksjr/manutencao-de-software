"use strict";

var express = require('express'); // const productController = require('./controllers/productController')


var userController = require('./controllers/userController'); // const distributorController = require('./controllers/distributorController')


var clientController = require('./controllers/clientController');

var routes = express.Router(); // user routes--

routes.post('/user/singup', userController.singup);
routes.post('/user/singin', userController.singin); // --user routes
// client routes--

routes.get('/client/test', clientController.test); // --client routes

module.exports = routes;