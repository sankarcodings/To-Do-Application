
const express = require('express');
const router = express.Router();

const authenticateUserLogin = require('../Middleware/UserLoginMiddleware');
const authenticateuserPost = require('../Middleware/PostAuthenMiddleware')

// // define getUsersAll
// // define getUserByID
// const {getAll_User} = require('../Controller/getUserController')
const {getUserBy_Id} = require('../Controller/getUserController')
// // Get - Route
// router.get('/getUsers',getAll_User)
router.get('/getUser/:id', getUserBy_Id)


// Post-Route -> Add User(Signin)
const postUserController = require('../Controller/postUserController');
router.post('/addUser', authenticateuserPost , postUserController)

// Login User
const loginUser_Controller = require('../Controller/loginUserController')
// login - route
router.post('/loginUser' ,authenticateUserLogin, loginUser_Controller)




module.exports = router