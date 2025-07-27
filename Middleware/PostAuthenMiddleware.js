
const findUserModel = require('../Model/UserModel/FindUserModel')

async function authenticatePostUser(req,res,next){
      try {
        const {id} = req.body;
        const user = await findUserModel(id);
        if (user.rowCount > 0) {
            return res.status(401).json({ message: "User already Existed" });
        }
        next(); 
    } catch (err) {
        console.error("Auth Error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = authenticatePostUser;