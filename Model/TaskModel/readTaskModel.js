
const db = require('../../Model/Database/DbModel')
const decodeRefreshToken = require('./DecodeRefreshToken')

async function readTaskModelFun(decodedRefreshToken){
    const userId = await decodeRefreshToken(decodedRefreshToken);
    const readQuery = `Select * from taskTable where userId = $1 ORDER BY created_at DESC`;

    const allTask = await db.query(readQuery , [userId]); 
    //console.log(allTask)

    return !allTask ? null : allTask.rows;
}

module.exports = readTaskModelFun;