var app = require('express')()
var gets = require('./controllers/getRequests')
var posts = require('./connection/postRequests')

gets(app)
posts(app)

app.listen(3000)
console.log('Listening 3000')
