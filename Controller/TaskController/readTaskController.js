
const readTaskModel = require('../../Model/TaskModel/readTaskModel')
const jwt = require('jsonwebtoken')

async function readTaskControllerFun(req,res){

    const refreshToken = req.cookies.refreshToken;

    if(!refreshToken)
        res.status(403).json({
            message : "Refresh Token Missing ---"
        })

    const decodedRefreshToken = jwt.decode(refreshToken);
    const tasks = await readTaskModel(decodedRefreshToken)

    if(tasks)
        res.status(200).json({
            task : tasks
    })
    else{
        res.status(500).json({
            message : "No task Found --"
        })
    }


}
module.exports = readTaskControllerFun;