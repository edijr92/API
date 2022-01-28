const express = require('express');
const router = express.Router();
const { SignUp, LogIn, ListUsers } = require('../services/login')


router.get('/', (req, res) => {
    res.send("homepage")
});

router.post('/signIn', SignUp)
router.post('/logIn', LogIn)
router.post('/usersAll', ListUsers)

module.exports = router;