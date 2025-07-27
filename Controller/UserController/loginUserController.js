
const {accessToken_generated , refreshToken_generated} = require('../../JWT-Token/GenerateTokenFile')
const postAuthTokenFun = require('../../Model/DbToken/dbTokenPost')


const now = new Date();

async function loginUser_Controller(req, res) {

    const accessToken = accessToken_generated(req.body);
    const refreshToken = refreshToken_generated(req.body);

    const postTokenInDb = postAuthTokenFun(req.body.userEmail,accessToken,refreshToken)
    
    let tokenMessage = '';
    if(postTokenInDb)
        tokenMessage = "Both Access and Refresh Token Created";
    else
        tokenMessage = "Access and Refresh Token doesn't Created";

    res.cookie('accessToken' , accessToken , {
        httpOnly : true,
        secure : false,
        maxAge : 15 * 60 * 1000 
    })

    res.cookie('refreshToken' , refreshToken , {
        httpOnly : true,
        secure : false,
        maxAge : 7 * 24 * 60 * 60 * 1000 
    })

    res.status(200).json({
        message: "Login successful",
        tokenMessage : tokenMessage
    });
}

module.exports = loginUser_Controller;