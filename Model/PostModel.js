const dbModel = require('./DbModel');
const {bcryptPassWord} = require('../Bcrypt-PWD/BcryptPassword')


async function createPost(data) {
    const insertQuery = `
    INSERT INTO userTable (userName, userEmail, userPwd)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

  const hashPwd = await bcryptPassWord(data.userPwd);
      console.log(hashPwd)
  const result = await dbModel.query(insertQuery, 
      [
        data.userName, 
        data.userEmail,
        hashPwd
      ]
  );
  return result.rows[0];
}

module.exports = createPost;