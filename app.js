var app = require('express')()
var getRequests = require('./controllers/getRequests')
var postRequests = require('./controllers/postRequests')

getRequests(app)
postRequests(app)
app.listen(3000, '')
console.log('Listening to CRM-Food -> 3000')
