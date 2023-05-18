const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    roles: {
        type: String,
        required: true
    },
    connected: [{
        type: String,
        default: false
    }],
    name:{
        type:String
    },
    size:{
        type:String
    }
})

module.exports = mongoose.model('users', userSchema)