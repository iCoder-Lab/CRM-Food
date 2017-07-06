var mysql = require('mysql')

var connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'CRMFOOD'
  }
)

connection.connect(
  function(error) {
    if (error) throw error
  }
)

module.exports = connection
