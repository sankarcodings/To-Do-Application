
const postModel = require('../Model/PostModel')
async function postUser_Controller(req,res){
    const result = await postModel(req.body);
    if(result){
            res.status(200).json({
            message : "Successfully Inserted ---"
        })
    }
    else{
        res.status(500).json({
            message : "Internal Server Error"
        })
    }
}

module.exports = postUser_Controller;