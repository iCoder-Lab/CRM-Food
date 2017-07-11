const Promise = require('bluebird')
const pool = require('../connection/pool')
const Errors = require('./errors')
const bP = require('body-parser').json()

module.exports = function(app)
{
  app.post('/addOrder', bP, function(request, response)
  {
    var file = request.body
    var waiterId = file.waiterId
    var tableId
  }
}
