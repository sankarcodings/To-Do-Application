const dbModel = require('./DbModel');

async function findUserModel(id) {
    try {
        const query = 'SELECT * FROM userTable WHERE userId = $1';
        const result = await dbModel.query(query, [id]);
        return result || null;
    } catch (err) {
        console.error("DB Error - findUserById:", err);
        throw err; 
    }
}
module.exports = findUserModel;