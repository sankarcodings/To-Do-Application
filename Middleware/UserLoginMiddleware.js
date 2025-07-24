
const loginUser_Model = require('../Model/loginUserModel');

// Authentication
async function authenticateUser(req,res,next){
      try {
        const user = await loginUser_Model(req.body);
        if (!user) {
            return res.status(403).json({ message: "User Not Existed \n please Sign-Up" });
        }
        next(); 
    } catch (err) {
        console.error("Auth Error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = authenticateUser;