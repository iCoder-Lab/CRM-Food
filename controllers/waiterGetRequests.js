const Promise = require('bluebird')
const pool = require('../connection/pool')
const Errors = require('./errors')
module.exports = function(app)
{
  app.get('/getMealCategories', function(request, response)
  {
      const _query = 'select id as id, name as name from categories'
      pool.query(_query, function(err, res)
      {
        if(err)
        {
          response.status(500).send({error: 'query failed ' + err})
        }
        else if(res.length > 0)
        {
          response.json(res)
        }

        else
        {
          response.status(404).send({error: 'no category found'})
        }
      })
  })

  app.get('/getAllMeals', function(request, response)
  {
    const _query = 'select id, name, price from meals'
    pool.query(_query, function(err, res)
    {
      if(err)
      {
        response.status(500).send({error: 'query failed ' + err})
      }

      else if(res.length > 0)
      {
        response.json(res)
      }

      else
      {
        response.status(404).send({error: 'no meal found'})
      }
    })
  })

  app.get('/getMealsByCategory/:categoryid', function(request, response)
  {
    var inp = request.params.categoryid
    if(Number.isInteger(parseInt(inp)) && inp > 0)
    {
      const categoryid = parseInt(inp)
      const _query = 'select m.id as id, m.name as name, m.price as price from meals m inner join categories c ' +
      'on c.id = m.categoryid where c.id = ' + pool.escape(categoryid)
      pool.query(_query, function(err, res)
      {
        if(err)
        {
          response.status(500).send({error: 'query failed ' + err})
        }

        else if(res.length > 0)
        {
          response.json(res)
        }

        else
        {
          response.status(404).send({error: 'no meal found'})
        }
      })
    }

    else
    {
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

  app.get('/getAllRoles', function(request, response)
  {
    const _query = 'select id, name from roles'
    pool.query(_query, function(err, res)
    {
      if(err)
      {
        response.status(500).send({error: 'query failed ' + err})
      }

      else if(res.length > 0)
      {
        response.json(res)
      }

      else
      {
        response.status(404).send({error: 'no role found'})
      }
    })
  })

  app.get('/getMyOrders/:userid', function(request, response)
  {
    var inp = request.params.userid
    if(Number.isInteger(parseInt(inp)))
    {
      const userid = parseInt(inp)

      const _query = 'select o.id as id, o.userid as waiterid, o.tableid as tableid, ' +
      'm.id as mealid, m.name as mealname, m.price as mealprice from orders o inner join ' +
      'mealfororders mfo on o.id = mfo.orderid inner join meals m on m.id = mfo.mealid ' +
      'where o.userid = ' + pool.escape(userid)
      pool.query(_query, function(err, res)
      {
        if(err)
        {
          response.status(500).send({error: 'query failed ' + err})
        }

        else if(res.length > 0)
        {
          response.json(res)
        }

        else
        {
          response.status(404).send({error: 'no any order for current userid found.'})
        }
      })
    }

    else
    {
      response.send({result: "Incorrect Integer value " + inp})
    }

  })

  app.get('/getCheck/:orderid', function(request, response)
  {
    var inp = request.params.orderid
    if(Number.isInteger(parseInt(inp)))
    {
      const orderid = parseInt(inp)
      const _query = 'select o.id as orderId, sum(m.price) as orderSum, ' +
      'round(sum(m.price) * 0.15) as serviceFee, (sum(m.price) + round(sum(m.price) * 0.15)) as totalSum ' +
      'from meals m inner join mealfororders mfo on mfo.mealid = m.id inner join orders o on o.id = mfo.orderid ' +
      'where o.id = ' + pool.escape(orderid)

      pool.query(_query, function(err, res)
      {
        if(err)
        {
          response.status(500).send({error: 'query failed ' + err})
        }

        else if(res.length > 0)
        {
          response.json(res)
        }

        else
        {
          response.status(404).send({error: 'could not get check for order number ' + orderid})
        }
      })
    }

    else
    {
      response.send({result: "Incorrect Integer value " + inp})
    }
  })
}
