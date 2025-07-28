const dbModel = require('../Database/DbModel');

async function findUserBy_Id(id) {
    try {
        const query = 'SELECT * FROM userTable WHERE userId = $1';
        const result = await dbModel.query(query, [id]);
        return result || null;
    } catch (err) {
        console.error("DB Error - findUserById:", err);
        throw err; 
    }
}

async function getAll_User() {
    try {
        const query = 'SELECT * FROM userTable';
        const result = await dbModel.query(query);
        console.log(result.rows)
        return result || 0;
    } catch (err) {
        throw err; 
    }
}
module.exports = {
    findUserBy_Id,
    getAll_User
}