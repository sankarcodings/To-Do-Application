
const bcrypt = require('bcrypt');

async function bcryptPassWord(userPwd){
    const hashPwd = await bcrypt.hash(userPwd , 10);
    return hashPwd;
}

async function verifyBcryptPassWord(userPwd , bcryptPwd){
    const result = await bcrypt.compare(userPwd , bcryptPwd);
    return result;
}

module.exports = {
    bcryptPassWord,
    verifyBcryptPassWord
}
