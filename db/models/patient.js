const mongoose = require('mongoose')
//creating the Schema that enforce constraints on our database
const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    minlength: 3
  },
  age: {
    type: Integer
  },

  _wardId: {
    type: mongoose.Types.ObjectId,
    required: true,
  }

})

const Patient = mongoose.model('Patient', patientSchema)

module.exports = Patient 
