const jwt = require("jsonwebtoken");
const config = require('config');

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
       return next() 
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        //const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({message: 'Auth error'})
        }
        const decoded = jwt.decode(token, config.get('secretKey'))
        //const decoded = jwt.verify(token, secretKey.get('secretKey'))
        req.user = decoded
        return res.json({ user: req.user})
        //return res.status(401).json({ user: req.user})
    }
    catch (e) {
        return res.status(401).json({ message: 'Auth error catch' + " " + e }) 
    }
}