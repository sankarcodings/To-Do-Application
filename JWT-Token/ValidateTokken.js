
const {accessToken_generated} = require('../JWT-Token/GenerateTokenFile');
const jwt = require('jsonwebtoken')


// Validate the token --
function validateAccessToken(req , res) {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken)
        return res.status(401).json({message : "Refresh Token Missing"});

    jwt.verify(refreshToken , process.env.ACCESS_TOKEN , (err,result) => {
        
        if(err)
            return res.status(403).json({message : "Invalid refresh token"});

        const payload = req.body;

        const newAccessToken = accessToken_generated(payload);

        res.cookie('accessToken' , newAccessToken , {
            httpOnly : true,
            secure : false,
            maxAge : 15 * 60 * 1000
        })

        return res.json({accessToken : newAccessToken})
    })

    
    
}

module.exports = validateAccessToken;