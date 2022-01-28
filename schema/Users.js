const mongoose = require('mongoose')

const Users = mongoose.Schema({
    mail: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Users', Users);