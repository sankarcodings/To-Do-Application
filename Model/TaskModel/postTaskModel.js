
const db = require('../Database/DbModel');

async function postTaskInDb(taskObj){

    // title,fromDate,toDate,isComp,compAt,userId

    try{
        const {title,fromDate,toDate,isCompleted,completedAt} = taskObj;
        const insertQuery = 
        `Insert into taskTable(title,fromDate,toDate,isCompleted,completedAt)
         values ($1,$2,$3,$4,$5)
         RETURNING *
        ` ;

        const result = await db.query(insertQuery , [title,fromDate,toDate,isCompleted,completedAt]);
        return result.rows[0];
    }
    catch(err){
        console.log(err);
    }


}