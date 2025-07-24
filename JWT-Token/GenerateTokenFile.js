
const jwt = require('jsonwebtoken');
require('dotenv').config();

function accessToken_generated(user){
    return jwt.sign(user , process.env.ACCESS_TOKEN , {expiresIn : '15m'});
}

function refreshToken_generated(user){
    return jwt.sign(user , process.env.REFRESH_TOKEN , {expiresIn : '7d'});
}

module.exports = {
    accessToken_generated,
    refreshToken_generated
}