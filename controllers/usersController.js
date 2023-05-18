const User = require('../models/users')

const asyncHandler = require('express-async-handler')


// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
    // Get all users from MongoDB
    const users = await User.find().select('-password').lean()

    // If no users 
    if (!users?.length) {
        return res.status(400).json({ message: 'No users found' })
    }

    res.json(users)
})
const createNewUser = async (req, res) => {
    const { email} = req.body

    // Confirm data
    //if (!email) {
       // return res.status(400).json({ message: 'All fields are required' })
  //  }

    // Check for duplicate username
    const duplicate = await User.findOne({ email }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate user' })
    }

   

    const userObject ={email}

    // Create and store new user 
    const user = await User.create(userObject)

    if (user) { //created 
        res.status(201).json({ message: `New user with email ${email} created` })
    } else {
        res.status(400).json({ message: 'Invalid user data received' })
    }
}
module.exports = {
    getAllUsers,
    createNewUser
    //updateUser,
    //deleteUser
}