const Users = require('../schema/Users');
const jwt = require('jsonwebtoken');
const axios = require('axios');

const SignUp = (req, res) => {
    const signIn = new Users({
        mail: req.body.mail,
        password: req.body.password
    })
    signIn.save().then(response =>{
        console.log('New User Add')
        res.json(response).status(200)
    }).catch(err=>{
        console.log(err)
        res.send(err).status(500)
    })
};

const LogIn = async (req, res) => {
    const data = { mail: req.body.mail, password: req.body.password };
    
    await Users.findOne({mail: req.body.mail}, (err, response) => {
        if(err){
            res.status(401).send({
                ok: false,
                data: "Error Connection"
            })
        }
        if(!response){
            res.status(500).send({
                ok: false,
                data: "Wrong Email or Password"
            })
        }
        const tokenData = jwt.sign(data, 'ATOKEN', { expiresIn: '7d' });
        console.log(`${req.body.mail} is log in`)
        res.status(200).send({
            ok: true,
            data:{
                user: response.mail,
                token: tokenData
            }
        })
    }).clone().catch((err) => { console.log(err)})
};

const ListUsers = (req, res) => {
    const token = req.body.token;
    jwt.verify(token, 'ATOKEN', (err, verify)=>{
        if(verify){
            const url="http://127.0.0.2:3001/listUsers";
            axios(url, { headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }}, ).then(response => res.send({
                ok: true,
                users: response.data.data
            })).catch(err => {
                res.send({
                    ok: false,
                    data: `Error: ${err}`
                })
            })
        }
    })
}


module.exports = {SignUp, LogIn, ListUsers}