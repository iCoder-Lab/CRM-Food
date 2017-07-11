const Promise = require('bluebird')
const pool = require('../connection/pool')
const Errors = require('./errors')
const bP = require('body-parser').json()

module.exports = function(app) {
  app.post('/addOrder', bP, function(request, response) {
    var file = request.body
    var waiterid = file.waiterid
    var tableid = file.tableid
    const insertOrder = 'insert into orders(status, userid, tableid) values(-1, ' + waiterid + ', ' + tableid + ');'
    pool.query(insertOrder, function(error, result) {
      if(error) {
        response.status(500).send({error: 'query failed: ' + error})
      }
      else {
        response.send({message: 'order has been added.'})
      }
    })
  })

  app.post('/addMealsToOrder', bP, function(request, response) {
    var file = request.body
    var orderid = file.orderid
    var meals = file.meals
    // const insertOrder = 'insert into orders(status, userid, tableid) values(-1, ' + waiterid + ', ' + tableid + ');'
    // pool.query(insertOrder, function(error, result) {
    //   if(error) {
    //     response.status(500).send({error: 'query failed: ' + error})
    //   }
    //   else {
    //     response.send({message: 'order has been added.'})
    //   }
    // })
  })
}