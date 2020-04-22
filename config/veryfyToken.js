const jwt = require('jsonwebtoken');
const secret = require('../config/secretKey');

const verifyToken = async (req, res, next) => {
    if(!req.headers.authorization) return res.status(401).send('Unauthorize Request');

    const token = req.headers.authorization.split(' ')[1];

    if(token === 'null') return res.status(401).send('Unauthorize Request');

    try{
        const payload = jwt.verify(token, secret.key)
        req.userId = payload._id;
        next();
    }catch(err){
        return res.status(401).send('Unauthorize Request');
    }

    
}

module.exports = verifyToken;