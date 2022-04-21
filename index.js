const express = require('express')
const mongoose = require('mongoose');
const routerApi = require('./src/routes')
const {logErrors, errorHandler} = require('./src/middlewares/handlers/errors.handlers')
const my_app = express();

/* Accede al archivo .env */
require('dotenv').config();
const port = process.env.PORT || 5000;



my_app.listen(port, () => console.log('Port active', port));


mongoose
  .connect(process.env.MONGODB_STRING_CONNECTION)
  .then(() => console.log('Succes connection'))
  .catch((error) => console.error(error));

my_app.use(express.json());
routerApi(my_app)

my_app.use(logErrors)
my_app.use(errorHandler)