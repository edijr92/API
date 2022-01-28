const express = require('express');
const router = express.Router();
const { SignUp, LogIn, ListUsers } = require('../services/login')
//rutas principales definidas del servicio Log In

router.get('/', (req, res) => {
    res.send("homepage")
});

router.post('/signIn', SignUp)
router.post('/logIn', LogIn)
router.post('/usersAll/:limit?', ListUsers)

module.exports = router;