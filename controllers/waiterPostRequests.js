const Promise = require('bluebird')
const pool = require('../connection/pool')
const bP = require('body-parser').json()

// module.exports = function(app) {
//   app.post('/addMealsToOrder', bP, function(request, response) {
//     var file = request.body
//     var orderid = file.orderid
//     var meals = file.meals
//     for(var i = 0; i < meals.length; i++) {
//       const addToOrder = 'insert into mealfororder(orderid, mealid) values(' + orderid + ', ' + meals[i] + ');'
//       pool.query(addToOrder, function(error, result) {
//         if(error) {
//           response.status(500).send({error: 'query failed: ' + error})
//           return
//         }
//       })
//     }
//     response.json({error: ''})
//   })
// }
