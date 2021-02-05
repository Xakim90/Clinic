const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Clients = mongoose.model('Clients');

router.get('/', (req, res) => {
  Clients.find({}).then((client) => {
    res.send(client);
  });
});
//POST new client route (optional, everyone has access)
router.post('/', (req, res, next) => {
  const client = req.body.params;
  // const {
  //   body: { client },
  // } = req;

  const finalClient = new Clients(client);
  return finalClient
    .save()
    .then(() => res.json({ client: finalClient.toAuthJSON() }));
});

router.delete('/:id', (req, res, next) => {
  Clients.findByIdAndRemove(req.params.id, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Removed User : ', docs);
    }
  })
  .then(() => {
    res.send("REMOVE SUCCESS");
  });
});

router.put('/', (req, res, next) => {
  console.log(req)
  Clients.findByIdAndUpdate(
    req.body.params._id,
    req.body.params,
    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log('Updated User : ', docs);
      }
    }
  )
  .then((client) => {
    res.send(client);
    console.log('UPDATE SUCCESS' + client);
  });
});

module.exports = router;
