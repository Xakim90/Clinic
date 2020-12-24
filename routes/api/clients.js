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
  const finalclient = new Clients(client);

  return finalclient
    .save()
    .then(() => res.json({ client: finalclient.toAuthJSON() }));
});

// import User from "./user.model";
// export async function signUp(req, res) {
//   try {
//     const user = await User.create(req.body);
//     return res.status(201).json(user);
//   } catch (e) {
//     return res.status(500).json(e);
//   }
// }

module.exports = router;
