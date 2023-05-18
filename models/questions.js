const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    questions: [{
        type: Number,
    }]   
})

module.exports = mongoose.model('questions', userSchema)