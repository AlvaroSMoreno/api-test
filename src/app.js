var express = require('express')
var db = require('../things/db')
var app = express()

var userController = require('../things/control')
app.use('/api/users', userController)

module.exports = app
