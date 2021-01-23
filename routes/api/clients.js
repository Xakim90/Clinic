const mongoose = require("mongoose");
const passport = require("passport");
const router = require("express").Router();
const auth = require("../auth");
const Clients = mongoose.model("Clients");

router.get("/", (req, res) => {
  Clients.find({}).then((client) => {
    res.send(client);
  });
});
//POST new client route (optional, everyone has access)
router.post("/", (req, res, next) => {
  const {
    body: { client },
  } = req;

  // if (!client.name) {
  //   return res.status(422).json({
  //     errors: {
  //       name: 'is required',
  //     },
  //   });
  // }
  // if (!client.surname) {
  //   return res.status(422).json({
  //     errors: {
  //       role: 'is required',
  //     },
  //   });
  // }
  
  const finalClient = new Clients(client);
  return finalClient.save()
    .then(() => res.json({ client: finalClient.toAuthJSON() }));
});

router.delete("/", (req, res, next) => {
  Clients.findByIdAndRemove(req.body.id, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Removed User : ', docs);
    }
  }).then((client) => {
    res.send("client");
    console.log('REMOVE SUCCESS');
  }); 
})
//Model.findByIdAndUpdate(id, { name: 'jason bourne' }, options, callback)

router.put("/", (req, res, next) => {
  console.log(req.body._id);
  Clients.findByIdAndUpdate(req.body._id, req.body, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      // console.log('Updated User : ', docs);
    }
  }).then((client) => {
    res.send(client);
    console.log("UPDATE SUCCESS" + client)
  });
});

// var query = { username: req.user.username };
// req.newData.username = req.user.username;

// MyModel.findOneAndUpdate(
//   query,
//   req.newData,
//   { upsert: true },
//   function (err, doc) {
//     if (err) return res.send(500, { error: err });
//     return res.send('Succesfully saved.');
//   }
// );

module.exports = router;
