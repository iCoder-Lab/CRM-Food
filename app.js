var express = require('express')
var app = express()

var waiterGetRequests = require('./controllers/waiterGetRequests')
var waiterPostRequests = require('./controllers/waiterPostRequests')

var adminGetRequests = require('./controllers/adminGetRequests')
var adminPostRequests = require('./controllers/adminPostRequests')

waiterGetRequests(app)
waiterPostRequests(app)
adminGetRequests(app)
adminPostRequests(app)

app.listen(3000, '')
console.log('Listening to CRM-Food -> 3000')
