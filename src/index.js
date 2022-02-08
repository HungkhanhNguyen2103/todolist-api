const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express()

//route
const route = require('./routes')

//Connect to DB
db.connect();

//Cors API
app.use(cors())

//xu ly form, data
app.use(express.urlencoded({
    extended: true
  }))

//route
route(app) 

  app.use(express.json())  

  

// nghe tại cổng 8080
app.listen(process.env.PORT || 8080)  
