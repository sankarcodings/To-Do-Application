
const db = require('../Database/DbModel');
const decRefreshToken = require('./DecodeRefreshToken')

async function postTaskInDb(decodedRefreshToken,taskObj){

    // title,fromDate,toDate,isComp,compAt,userId

    try{

        const userId = await decRefreshToken(decodedRefreshToken)

        const {title,fromDate,toDate,isCompleted,completedAt} = taskObj;
        const insertQuery = 
        `Insert into taskTable(title,fromDate,toDate,isCompleted,completedAt,userId)
         values ($1,$2,$3,$4,$5,$6)
         RETURNING *
        ` ;

        const result = await db.query(insertQuery , [title,fromDate,toDate,isCompleted,completedAt,userId]);
        return result.rowCount;
    }
    catch(err){
        console.log(err);
    }

}

module.exports = postTaskInDb;