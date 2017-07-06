var app = require('express')()
var connection = require('./connection/pool')

module.exports = function(app)
{
  var getAllCategories = 'select distinct name as category from categories'
  app.get('/getAllCategories', function(request, response)
  {
    connection.query()
  })

}
