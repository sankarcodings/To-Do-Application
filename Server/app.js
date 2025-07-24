
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
 
module.exports = app;

