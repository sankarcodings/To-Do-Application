
const dbTokenPost = require('./DbTokenModel')
const db = require('../Database/DbModel');
const now = new Date();
async function postAuthToken(userEmail,accessToken,refreshToken){

    const aTDate = new Date(now.getTime() + 15 * 60 * 1000) || null;
    const rTDate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)

    let getId;
    try{
        const query = `select * from userTable where userEmail = $1`
        const user = await db.query(query , [userEmail]);
        getId = user.rows[0].userid;
    }
    catch(err){
        console.log(err);
    }

    const tokenObj = {
        userId : getId,
        accessToken : accessToken,
        accessTokenDate : aTDate,
        refreshToken : refreshToken,
        refreshTokenDate : rTDate
    } 

    return dbTokenPost(tokenObj)
}

module.exports = postAuthToken;