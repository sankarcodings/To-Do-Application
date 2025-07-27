
const { verifyBcryptPassWord } = require('../../Bcrypt-PWD/BcryptPassword');
const dbModel = require('../Database/DbModel')

async function loginUser_Model(data){
    try{
        const findQuery = 'select * from userTable where userEmail = $1'
        const user = await dbModel.query(findQuery , [data.userEmail]);
        const verifyHashPwd = await verifyBcryptPassWord(data.userPwd , user.rows[0].userpwd);
        return verifyHashPwd ? user.rows[0] : null;
    }catch(err){
        throw err;
    }
        
}

module.exports = loginUser_Model;