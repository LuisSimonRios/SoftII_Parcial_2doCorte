const express = require('express');
const employee_info_router = require('./employee_info.router')

function routerApi(my_app){
  const router = express.Router();
  /* Endpoint estatico: http://localhost:5000/api/v1 */
  router.use('', employee_info_router)
  my_app.use('/api/v1', router);
}

module.exports = routerApi