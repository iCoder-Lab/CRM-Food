const pool = require('../connection/pool')
const bP = require('body-parser').json()

module.exports = function(app) {
  app.post('/addMealCategory', bP, function(request, response) {
    var file = request.body
    var name = file.name
    const _checkName = 'select name from categories where name = ' + pool.escape(name)

    pool.query(_checkName, function(err, res) {
      if(err) {
        response.status(500).send({error: err})
      }

      else if(res.length > 0) {
        response.status(400).send({error: name + ' category exists. Check for getAllCategories request to learn more.'})
      }

      else {
        const insertCategory = 'insert into categories(name) values(' + pool.escape(name) + ');'
        pool.query(insertCategory, function(error, result) {
          if(error) {
            response.status(500).send({error: 'query failed: ' + error})
          }

          else {
            response.send({error:''})
          }
        })
      }
    })
  })

  app.post('/addMeal', bP, function(request, response) {
    var file = request.body
    var name = file.name
    var categoryid = file.categoryid
    var price = file.price

    if(Number.isInteger(parseInt(categoryid)) && categoryid > 0) {
      if(Number.isInteger(parseInt(price)) && price >= 0) {
        const _checkName = 'select name from meals where name = ' + pool.escape(name)
        pool.query(_checkName, function(err, res) {
          if(err) {
            response.status(500).send({error: 'query failed' + err})
          }

          else if(res.length > 0) {
            response.status(400).send({error: name + ' meal exists. Check for getAllMeals request to learn more.'})
          }

          else {
            const catID = parseInt(categoryid)
            const p = parseInt(price)
            console.log("Inside query");
            const insertMeal = 'insert into meals(name, categoryid, price) values(' + pool.escape(name) + ', ' + pool.escape(catID) + ', ' + pool.escape(p) + ');'
            pool.query(insertMeal, function(error, result) {
              if(error) {
                response.status(500).send({error: 'query failed: ' + error})
              }

              else {
                response.send({error:''})
              }
            })
          }
        })
      }

      else {
        response.send({error:'Incorrect Price. Price should be a positive integer number.'})
      }
    }

    else {
      response.send({error:'Incorrect Category id. Category id should be a positive integer number.'})
    }

  })

  app.post('/addRole', bP, function(request, response) {
    var file = request.body
    var name = file.name
    const _checkName = 'select name from roles where name = ' + pool.escape(name)

    pool.query(_checkName, function(err, res) {
      if(err) {
        response.status(500).send({error: 'query failed'})
      }

      else if(res.length > 0) {
        response.status(400).send({error: name + ' role exists.'})
      }

      else {
        const insertRole = 'insert into roles(name) values(' + pool.escape(name) + ');'
        pool.query(insertRole, function(error, result) {
          if(error) {
            response.status(500).send({error: 'query failed: ' + error})
          }

          else {
            response.send({error:''})
          }
        })
      }
    })
  })

  app.post('/addTable', bP, function(request, response) {
    var file = request.body
    var name = file.name
    const _checkName = 'select name from tables where name = ' + pool.escape(name)

    pool.query(_checkName, function(err, res) {
      if(err) {
        response.status(500).send({error: 'query failed'})
      }

      else if(res.length > 0) {
        response.status(400).send({error: name + ' table exists.'})
      }

      else {
        const insertTable = 'insert into tables(name) values(' + pool.escape(name) + ');'
        pool.query(insertTable, function(error, result) {
          if(error) {
            response.status(500).send({error: 'query failed: ' + error})
          }

          else {
            response.send({error:''})
          }
        })
      }
    })
  })

  app.post('/addUser', bP, function(request, response) {
    var file = request.body
    var name = file.name
    var surname = file.surname
    var login = file.login
    var password = file.password
    var roleid = file.roleid

    if(Number.isInteger(parseInt(roleid))) {
      const role = parseInt(roleid)
      const insertUser = 'insert into users(name, roleid, surname, login, password) values' +
      '(' + pool.escape(name) + ', ' + pool.escape(role) + ', ' + pool.escape(surname) + ', ' + pool.escape(login) + ', ' + pool.escape(password) + ')'

      pool.query(insertWaiter, function(error, result) {
        if(error) {
          response.status(500).send({error: 'query failed: ' + error})
        }

        else {
          response.send({error:''})
        }
      })
    }

    else {
      response.send({error:"Incorrect roleid: " + roleid})
    }
  })
}
