
const express = require('express');
const app = express();
const userRouter = require('../Route/userRouter')
const taskRouter = require('../Route/taskRouter');
const adminRouter = require('../Route/adminRouter')
const cookieParser = require('cookie-parser');



// Parse
app.use(express.json())
// cookie - parser
app.use(cookieParser())

// Admin - Router
app.use('/admin' , adminRouter);

// User - Route
app.use('/user' , userRouter);

// Task - Route
app.use('/task',taskRouter);

// Handling the Invalid endpoint
app.use((req,res ) => {
    res.status(404).json({
        message : "Invalid Endpoint",
        // validEndpoints : ['/user/***' , '/task/***']
    })
})
 
module.exports = app;

