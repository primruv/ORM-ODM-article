const mongoose = require('mongoose')
const wardSchema = new mongoose.Schema({
  wardName: {
    type: String,
    trim: true,
    minlength: 3
  },
  numberOfBeds: {
    type: Number,
    trim: true,
    minlength: 3
  }
})

const hospitalWard = mongoose.model('hospitalWard', wardSchema)

module.exports = hospitalWard