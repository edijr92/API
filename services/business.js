const Users = require('../schema/Users');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const AuthMiddleware = require('../middlewares/AuthMiddleware')


app.use(bodyParser.json());
app.use(AuthMiddleware)

const uri = "mongodb+srv://edijr92:California1@cluster0.njmoq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, ()=> 
    console.log('connected to mongodb'))

app.get('/listUsers', (req, res ) => {
    // const bearerHeader = req.headers['authorization'].slice(7, req.headers['authorization'].length)
    // jwt.verify(bearerHeader, 'ATOKEN', (err, verify)=>{
    // if(verify){
        Users.find({}, (err, users) => {
            let userMap = [];
            users.map(function(user) {
            userMap.push(user)
        });
        res.status(200).send({
            ok: true,
            data: userMap
            });  
        }).clone().catch((err) => { 
            console.log(err)
        })
    // } else {
    //     res.send(
    //         `Error: ${err}`
    //     )
    // }
    // })
});


app.listen(3001, '127.0.0.2', () =>{
    console.log('business on port 3001')
})