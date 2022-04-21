const express = require('express');
const employee_info_router = express.Router();
const employee_info_model = require('../models/employee_info.model');
const employee_info_service = require('../services/employee_info.service');
/* Crear una instancia de la clase superhero service */
const service = new employee_info_service();


/* http://localhost:5000/api/v1/employee_info */
employee_info_router.post('/employee_info', (req, res, next)=>{
  const employee_info_body = employee_info_model(req.body);
  service
    .createEmployeeInfo(employee_info_body)
    .then((data) => res.status(201).json({message: data}))
    .catch((err) => next(err));
});

/* http://localhost:5000/api/v1/employee_info */
employee_info_router.get('/employee_info', (req, res, next)=>{
  service
    .findAllEmployeeInfo()
    .then((employee_info_body) => res.status(200).json({ message: employee_info_body }))
    .catch((err) => next(err));
});

/* http://localhost:5000/api/v1/employee_info/1 */
employee_info_router.get('/employee_info/:id', (req,res, next)=>{
  const {id} = req.params;
  service
    .findOneEmployeeInfo(id)
    .then((employee_info_body) => res.status(200).json({ message: employee_info_body }))
    .catch((err) => next(err));
});

/* http://localhost:5000/api/v1/employee_info/1 */
employee_info_router.put('/employee_info/:id', (req,res, next) => {
  const {id} = req.params;
  const new_employee_info = req.body;
  service
    .updateEmployeeInfo(id, new_employee_info)
    .then((employee_info_body) => res.status(200).json({ message: employee_info_body }))
    .catch((err) => next(err));
});

/* http://localhost:5000/api/v1/employee_info/1 */
employee_info_router.delete('/employee_info/:id', (req, res, next)=>{
  const {id} = req.params;
  service.deleteEmployeeInfo(id)
  .then((employee_info_body) => res.status(200).json({ message: employee_info_body }))
  .catch((err) => next(err));
});

module.exports = employee_info_router;