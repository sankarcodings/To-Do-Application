
const db = require('../Database/DbModel')

async function decodeRefreshToken(decodedRefreshToken){

    // find Id using refresh-token
    const email = decodedRefreshToken.userEmail;
    const getUser = `Select * from userTable where userEmail = $1`;
    const resultUser = await db.query(getUser , [email]);

    return !resultUser ? 0 : resultUser.rows[0].userid;
}

module.exports = decodeRefreshToken;