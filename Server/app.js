
const express = require('express');
const app = express();
const userRouter = require('../Route/userRouter')
const taskRouter = require('../Route/taskRouter');
const cookieParser = require('cookie-parser');


// Parse
app.use(express.json())
// cookie - parser
app.use(cookieParser())

// User - Route
app.use('/user' , userRouter);

// Handling the Invalid endpoint
app.use((req,res ) => {
    res.status(404).json({
        message : "Invalid Endpoint",
        // validEndpoints : ['/user/***' , '/task/***']
    })
})
 
module.exports = app;

