const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes/index.js');
const mongoose = require('mongoose');


// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(router);


const uri = "mongodb+srv://edijr92:California1@cluster0.njmoq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, ()=> 
    console.log('connected to mongodb'))
      
app.listen(3000, () =>{
    console.log('listening on port 3000')
})