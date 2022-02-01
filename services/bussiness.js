const Users = require('../schema/Users');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const AuthMiddleware = require('../middlewares/AuthMiddleware')
// const dotenv = require('dotenv')
// const path = require('path')

// Servicio Bussiness, devuelve busqueda de usuarios paginada y permite la busqueda no sensitiva por mail

require('dotenv/config')
app.use(bodyParser.json());
app.use(AuthMiddleware)

const uri = process.env.DB_CONECCTION
console.log(uri)
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
    err ? console.log('Auth Failure') : console.log('connected to mongodb')
})

app.post('/listUsers', async (req, res ) => {
    const mail = req.body.mailSearch
    const limitSearch= req.body.limit || 5;
    const skipValue = 0;
       const userMap = await Users.find(mail).limit(limitSearch).skip(skipValue)
       .clone().catch((err) => { 
        console.log(err)
    })
    if(userMap.length >= 1){
        res.status(200).send({
            ok: true,
            data: userMap
    })
    } else {
        res.send({
            ok: false,
            data: "Not user found!"
        })
    }
})


app.listen(3001, '127.0.0.2', () =>{
    console.log('business on port 3001')
})