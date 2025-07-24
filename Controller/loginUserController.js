
const {accessToken_generated , refreshToken_generated} = require('../JWT-Token/GenerateTokenFile')

function loginUser_Controller(req, res) {

    const accessToken = accessToken_generated(req.body);
    const refreshToken = refreshToken_generated(req.body);

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
    });
}

module.exports = loginUser_Controller;