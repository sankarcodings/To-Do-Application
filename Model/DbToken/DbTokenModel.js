
const db = require('../Database/DbModel')

async function insertModelTokensInDb(tokenObj){
    const {userId,accessToken,accessTokenDate,refreshToken,refreshTokenDate} = tokenObj;
    const insertQuery = 
    `
        INSERT INTO authTokens (userId, accessTokenHash , accessTokenExpiresAt ,refreshTokenHash ,refreshTokenExpiresAt)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `
    ;
    const data = [userId,accessToken,accessTokenDate,refreshToken,refreshTokenDate]

    const result = await db.query(insertQuery, data);

   return result;
}

module.exports = insertModelTokensInDb;