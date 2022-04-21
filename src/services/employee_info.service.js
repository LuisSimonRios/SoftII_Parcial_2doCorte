const employee_info_model = require('../models/employee_info.model');

class EmployeeInfoService{

  createEmployeeInfo(employee_info_body){
    return employee_info_body.save(employee_info_body);
  }

  findAllEmployeeInfo() {
    return employee_info_model.find();
  }

  findOneEmployeeInfo(id) {
    return employee_info_model.findById(id)
  }

  updateEmployeeInfo(id, employee_info_body) {
    return employee_info_model.findByIdAndUpdate(id, employee_info_body, {new: true})
  }

  deleteEmployeeInfo(id) {
    return employee_info_model.findByIdAndDelete(id)
  }
}

module.exports = EmployeeInfoService;