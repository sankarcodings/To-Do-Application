
const {getUserBy_Id , getAllUser} = require('../Controller/UserController/getUserController')

const express = require('express');
const router = express.Router();

// get User By Id
router.get('/getUser/:id' , getUserBy_Id );

// get All User
router.get('/getAllUsers' , getAllUser)


module.exports = router;