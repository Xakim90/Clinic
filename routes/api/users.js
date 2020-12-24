const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Users = mongoose.model('Users');
const authMiddleWare = require('../../middleware/auth.middleware');


router.get("/", (req, res) => {
  Users.find({})
    .then(user => {
      res.send(user);
    });
});
//POST new user route (optional, everyone has access)
router.post('/', auth.optional, (req, res, next) => {
  const { body: { user } } = req;

  if(!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  if(!user.username) {
    return res.status(422).json({
      errors: {
        username: 'is required',
      },
    });
  }
  if(!user.role) {
    return res.status(422).json({
      errors: {
        role: 'is required',
      },
    });
  }

  const finalUser = new Users(user);

  finalUser.setPassword(user.password);

  return finalUser.save()
    .then(() => res.json({ user: finalUser.toAuthJSON() }));
});

router.get('/auth', authMiddleWare,
  async (req, res) => {
    try {
      const user = await Users.findOne({ id: req.user.id })
      const token = jwt.sign({ id: user.id}, config.get('secretKey'), { expiresIn: "1h" })
      return res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
          // username: user.username,
          // role: user.role
        }
      })
    } catch (e) {
      console.log(e)
      res.send({ message: "Server error" })
    }
  }
)

//POST login route (optional, everyone has access)
router.post('/login', auth.optional, (req, res, next) => {
  const { body: { user } } = req;

  if(!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
    if(err) {
      return next(err);
    }

    if(passportUser) {
      const user = passportUser;
      user.token = passportUser.generateJWT();

      return res.json({ user: user.toAuthJSON() });
    }

    return status(400).info;
  })(req, res, next);
});

//GET current route (required, only authenticated users have access)
router.get('/current', auth.required, (req, res, next) => {
  const { payload: { id } } = req;
  return Users.findById(id)
    .then((user) => {
      if(!user) {
        return res.sendStatus(400);
        
      }

      return res.json({ user: user.toAuthJSON() });
    });
});

module.exports = router;