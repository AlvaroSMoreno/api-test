var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: true }))
//router.use(bodyParser.json())

var user = require('./user')

//Para crear un nuevo usuario...
router.post('/', function(req, res) {
  user.create({
    name : req.body.name,
    id : req.body.id,
    age : req.body.age,
    credit : req.body.credit
  }, function(err, user) {
    if(err) return res.status(500).send('There was a problem adding the user!')
    res.status(200).send(user)
  })
})

//Para ver todos los usuarios
router.get('/', function(req, res) {
  user.find('{}', function(err, users) {
    if(err) return res.status(500).send('There was a problem finding the users!')
    res.status(200).send(users)
  })
})

//Ver un solo usuario
router.get('/:id', function(req, res) {
  user.findById(req.params.id, function(err, user) {
    if(err) return res.status(500).send('There was a problem finding the user!')
    res.status(200).send(user)
  })
})

//Borrar un usuario
router.delete('/:id', function(req, res) {
  user.findByIdAndRemove(req.params.id, function(err, user) {
    if(err) return res.status(500).send('There was a problem finding the user!')
    res.status(200).send('The user: ' + user.name + ' was deleted!')
  })
})

//Actualizar informacion de un usuario
router.put('/:id', function(req, res) {
  user.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, user) {
    if(err) return res.status(500).send('There was a problem updating the info of the user!')
    res.status(200).send(user)
  })
})

module.exports = router
