const Promise = require('bluebird')
const pool = require('../connection/pool')
const Errors = require('./errors')

module.exports = function(app) {
 /*
  *
  *
  *   GET CATEGORIES
  *
  */
  app.get('/getMealCategories', function(request, response) {
      const _query = 'select id as id, name as name from categories'
      pool.query(_query, function(err, res) {
        if(err) {
          response.status(500).send({error: 'query failed ' + err})
        }
        else if(res.length > 0) {
          response.json({res})
        }

        else {
          response.status(404).send({error: 'no category found'})
        }
      })
  })

  /*
  *
  *
  *   GET MEALS
  *
  */

  app.get('/getAllMeals', function(request, response) {
    const _query = 'select id, name, price from meals'
    pool.query(_query, function(err, res) {
      if(err) {
        response.status(500).send({error: 'query failed ' + err})
      }

      else if(res.length > 0) {
        response.json({res})
      }
      else {
        response.status(404).send({error: 'no meal found'})
      }
    })
  })

  app.get('/getMealsBy/:categoryid', function(request, response) {
    var inp = request.params.categoryid
    if(Number.isInteger(parseInt(inp)) && inp > 0) {
      const categoryid = parseInt(inp)
      const _query = 'select m.id as id, m.name as name, m.price as price from meals m inner join categories c ' +
      'on c.id = m.categoryid where c.id = ' + pool.escape(categoryid)
      pool.query(_query, function(err, res) {
        if(err) {
          response.status(500).send({error: 'query failed ' + err})
        }

        else if(res.length > 0) {
          response.json({res})
        }

        else {
          response.status(404).send({error: 'no meal found'})
        }
      })
    }

    else {
      response.send('Category id should be a positive integer value')
    }
  })

  app.get('/getMealById/:mealid', function(request, response)
  {
    var inp = request.params.mealid
    if(Number.isInteger(parseInt(inp)) && inp > 0)
    {
      const mealid = parseInt(inp)
      const _query = 'select id, name, price from meals where id = ' + pool.escape(mealid)
      pool.query(_query, function(err, res)
      {
        if(err)
        {
          response.status(500).send({error: 'query failed ' + err})
        }

        else if(res.length > 0)
        {
          response.json(res[0])
        }

        else
        {
          response.status(404).send({error: 'no meal with id ' + mealid + ' found'})
        }
      })
    }

    else
    {
      response.send('Category id should be a positive integer value')
    }

  })

  /*
  *
  *
  *   GET ROLES
  *
  */

////------------------------------------------------------------------------////


  app.get('/getAllRoles', function(request, response) {
    const _query = 'select id, name from roles'
    pool.query(_query, function(err, res) {
      if(err) {
        response.status(500).send({error: 'query failed ' + err})
      }

      else if(res.length > 0) {
        response.json({res})
      }

      else {
        response.status(404).send({error: 'no role found'})
      }
    })
  })

  app.get('/getMyOrders', function(request, response) {
    const _query = 'select name as role from roles'
    pool.query(_query, function(err, res) {
      if(err) {
        response.status(500).send({error: 'query failed ' + err})
      }

      else if(res.length > 0) {
        response.json({res})
      }

      else {
        response.status(404).send({error: 'no role found'})
      }
    })
  })
}
