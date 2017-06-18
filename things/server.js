var app = require('../src/app')
var port = process.env.PORT || 3000

var server = app.listen(port, function() {
  console.log('Servidor corriendo en: ' + port)
})
