
const {accessToken_generated} = require('../JWT-Token/GenerateTokenFile');
const postAuthFun = require('../Model/DbToken/dbTokenPost')
const jwt = require('jsonwebtoken')

require('dotenv').config();

// Validate the token in this function--
function validateAccessToken(req , res) {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken)
        return res.status(401).json({message : "Refresh Token Missing"});

    jwt.verify(refreshToken , process.env.REFRESH_TOKEN , (err,result) => {
        
        if(err)
            return res.status(403).json({message : "Invalid refresh token"});

        const payload = req.body;

        const newAccessToken = accessToken_generated(payload);

        //post tokens in Db
        const postTokenInDb = postAuthFun(req.body.userEmail,newAccessToken,refreshToken)
        let tokenMessage = '';
        if(postTokenInDb)
            tokenMessage = "Both Access and Refresh Token Created";
        else
            tokenMessage = "Access and Refresh Token doesn't Created";

        res.cookie('accessToken' , newAccessToken , {
            httpOnly : true,
            secure : false,
            maxAge : 15 * 60 * 1000
        })

        return res.json({
            accessToken : newAccessToken,
            tokkenMessage : tokenMessage
        })
    })

    
    
}

module.exports = validateAccessToken;