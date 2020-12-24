const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Users = mongoose.model('Users');
const authMiddleWare = require('../../middleware/auth.middleware');



router.get('/auth', authMiddleWare,
    async (req, res) => {
        try {
            const user = await Users.findOne({ id: req.user.id })
            const token = jwt.sign({ id: user.id }, config.get('secretKey'), { expiresIn: "1h" })
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                }
            })
        } catch (e) {
            console.log(e)
            res.send({ message: "Server error" })
        }
    }
)