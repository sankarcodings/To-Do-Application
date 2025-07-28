const {getAll_User} = require('../../Model/UserModel/FindUserModel');
const {findUserBy_Id} = require('../../Model/UserModel/FindUserModel')

async function getAllUser(req, res) {
  try{
    const result = await getAll_User();
    if(result.rowCount>0){
            res.status(200).json({
            message : "Data Fetched in Db",
            data : result.rows
        })
    }
    else{
        res.status(404).json({
            message : "No Data Found --"
        })
    }
  }catch (err) {
        console.error("Auth Error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

async function getUserBy_Id(req,res){
  try{
    const id = req.params.id;
    // console.log(id)
    const result = await findUserBy_Id(id);
    // console.log(result)
    if(result.rowCount>0){
            res.status(200).json({
            message : "Data Fetched in Db",
            data : result.rows[0]
        })
    }
    else{
        res.status(404).json({
            message : "No Data Found --"
        })
    }
  }catch (err) {
        console.error("Auth Error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }

}


module.exports = {
    getAllUser,
    getUserBy_Id
};