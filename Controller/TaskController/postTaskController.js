
const postTaskInDb = require('../../Model/TaskModel/postTaskModel');
const jwt = require('jsonwebtoken')

async function postTaskController(req,res,next){

    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken){
        res.status(403).json({
            message : "Refresh Token Missing ---"
        })
    }

    const decodedRefreshToken = jwt.decode(refreshToken);

    if(!decodedRefreshToken)
        res.status(403).json({
            message : "Refresh Token Missing --"
    })
    const postTask = await postTaskInDb(decodedRefreshToken,req.body);

    if(!postTask){
        res.status(500).json({
            message : "Internal Server Error"
        })
    }
    next();
        
}

module.exports = postTaskController