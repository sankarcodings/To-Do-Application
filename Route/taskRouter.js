

const express = require('express');
const router = express.Router();
const postTaskController = require('../Controller/TaskController/postTaskController')
const readTaskController = require('../Controller/TaskController/readTaskController')
// router for add the task in db;
router.post('/addTask' , postTaskController , readTaskController);

module.exports = router;