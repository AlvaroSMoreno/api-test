var mongoose = require('mongoose')
var userSchema = new mongoose.Schema({
  name: String,
  id: String,
  age: String,
  credit: String
})
mongoose.model('user', userSchema)

module.exports = mongoose.model('user')
