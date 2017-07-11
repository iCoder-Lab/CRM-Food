var mysql = require('mysql')

var pool = mysql.createConnection
({
    host: 'localhost',
    user: 'root',
    password: 'defender1145',
    database: 'crm'
})

pool.connect(function(error)
{
  console.log('connected to db, CRM-Food');
  if (error) throw error;
})

module.exports = pool
