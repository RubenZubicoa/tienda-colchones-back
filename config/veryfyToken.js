const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    if(!req.headers.authorization) return res.status(401).send('Unauthorize Request');

    const token = req.headers.authorization.split(' ')[1];

    if(token === 'null') return res.status(401).send('Unauthorize Request');

    try{
        const payload = jwt.verify(token, 'secretKey')
        req.userId = payload._id;
        next();
    }catch(err){
        return res.status(401).send('Unauthorize Request');
    }

    
}

module.exports = verifyToken;