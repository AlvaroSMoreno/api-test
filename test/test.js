var request = require('request')

/*
request.post('http://localhost:3000/api/users', {form:{
  name: 'test_name',
  id: 'test_id',
  age: 'test_age',
  credit: 'test_credit'
}})
*/

//Acceder a ifttt event: mariana agregando una cancion a la cola...
request.post("https://maker.ifttt.com/trigger/mariana/with/key/ck83c9aVO7E-xVaHKF_4WZslMMEgi3PNaLu-PJLK62j", {form:{
  value1: 'Reggaeton lento',
  value2: 'cnco'
}})
