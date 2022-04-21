const mongoose = require('mongoose')

const employee_info_schema = mongoose.Schema({
  name: { type : String, require : true },
  lastname : { type : String, require : true },
  address : {
    type :  Object,
    require : true,
    geo: {
      type: Object,
      require: true,
      lat: { type: Number },
      lng: { type: Number }
    },
    city: { type: String, require: true },
    code_zip: { type: Number, require: true }
  },
  department : {
    type : Object,
    require : true,
    id_department: { type: Number },
    name_department: { type: String }
  },
});

module.exports = mongoose.model('employee_info_collection', employee_info_schema)