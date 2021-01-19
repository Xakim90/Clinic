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

module.exports = router;
