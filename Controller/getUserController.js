
// const {getAllUser} = require('../Model/UserModel');
const getUserById = require('../Model/FindUserModel')

// function getAll_User(req, res) {
//   const users = getAllUser();
//   res.status(200).json(users);
// }

async function getUserBy_Id(req,res){
  try{
    const id = req.params.id;
    console.log(id)
    const result = await getUserById(id);
    
    if(result){
            res.status(200).json({
            message : "Data Fetched in Db",
            data : result.rows[0]
        })
    }
    else{
        res.status(500).json({
            message : "No Data Found --"
        })
    }
  }catch (err) {
        console.error("Auth Error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }

}


module.exports = {
    //getAll_User,
    getUserBy_Id
};