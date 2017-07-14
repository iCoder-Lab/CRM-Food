const pool = require('../connection/pool')

module.exports = function(app) {
  app.get('/getNewOrders', function(request, response) {
    const _query = 'select id, userid, tableid, DATE_FORMAT(CONVERT_TZ(date, \'+00:00\',\'+0:00\'), \'%e-%M %Y %H:%i:%s\') as date from orders where status = -1'
    pool.query(_query, function(err, res) {
      if(err) {
        response.status(500).send({error: err})
      }

      else if(res.length > 0) {
        response.json(res)
      }

      else {
        response.status(404).send({error: 'no new orders found'})
      }
    })
  })

  app.get('/getInProgressOrders', function(request, response) {
    const _query = 'select id, userid, tableid, DATE_FORMAT(CONVERT_TZ(date, \'+00:00\',\'+0:00\'), \'%e-%M %Y %H:%i:%s\') as date from orders where status = 0'
    pool.query(_query, function(err, res) {
      if(err) {
        response.status(500).send({error: err})
      }

      else if(res.length > 0) {
        response.json(res)
      }

      else {
        response.status(404).send({error: 'no in progress orders found'})
      }
    })
  })

  app.get('/getDoneOrders', function(request, response) {
    const _query = 'select id, userid, tableid, DATE_FORMAT(CONVERT_TZ(date, \'+00:00\',\'+0:00\'), \'%e-%M %Y %H:%i:%s\') as date from orders where status = 1'
    pool.query(_query, function(err, res) {
      if(err) {
        response.status(500).send({error: err})
      }

      else if(res.length > 0) {
        response.json(res)
      }

      else {
        response.status(404).send({error: 'no done orders found'})
      }
    })
  })
}
