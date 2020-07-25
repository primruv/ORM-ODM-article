
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
//connecting to the database
mongoose.connect('mongodb://127.0.0.1:27017/hospital',
  { useNewUrlParser: true, useFindAndModify: false })
  .then(() => console.log("Hospital Database connected!"))
  .catch((error) => console.log(error))

module.exports = mongoose