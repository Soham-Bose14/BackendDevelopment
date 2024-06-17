const jwt = require('jsonwebtoken');

const newToken = (payload) => {
    const passKey = 'Flash@123';
    const token = jwt.sign(payload, secretKey, 'expiresIn: 2h');
    return token;
};

module.exports = newToken;