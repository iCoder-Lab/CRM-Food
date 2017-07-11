const Promise = require('bluebird')
const pool = require('../connection/pool')
const Errors = require('./errors')

module.exports = function(app)
{
  /*Get new orders**/

  app.get('/getNewOrders', function(request, response)
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
        response.json({res})
      }

      else
      {
        response.status(404).send({error: 'no role found'})
      }
    })
  })

  /*Get in progress orders*/

  app.get('/getInProgressOrders', function(request, response)
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
        response.json({res})
      }

      else
      {
        response.status(404).send({error: 'no role found'})
      }
    })
  })

  /*get new orders*/

  app.get('/getNewOrders', function(request, response)
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
        response.json({res})
      }

      else
      {
        response.status(404).send({error: 'no role found'})
      }
    })
  })
}
