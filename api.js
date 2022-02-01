const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes/index.js');
const mongoose = require('mongoose');
// const path = require('path');
// const dotenv = require('dotenv')

// Server en Express.js y conexion a la DB en MongoDB

require('dotenv').config({path: __dirname + '/.env'})
app.use(bodyParser.json());
app.use(router);

const uri = process.env.DB_CONECCTION

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err)=> {
    err ? console.log("Auth Failure") : console.log('connected to mongodb')  })
      
app.listen(3000, () =>{
    console.log('listening on port 3000')
})