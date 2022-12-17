const router = require("express").Router();
const passport = require("passport");
const path = require("node:path");
const { newId, writeJSONFile } = require("../helper/helper");
const userDataJSONFile = path.join(__dirname, "../data/users.json");
const userData = require(userDataJSONFile);

const CLIENT_URL = "http://localhost:3000/";

router.get("/login/success", (req, res) => {
  if (req.user) {
    const { id, displayName, photos } = req.user;
    res.status(200).json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies,
    });
    const newUser = {
      id,
      displayName,
      photo: photos[0].value,
      uniqueId: newId(),
    };

    const userExists = userData.find((user) => user.id === newUser.id);
    if (!userExists) {
      userData.push(newUser);
      writeJSONFile(userDataJSONFile, userData);
    }
  } else {
    res.status(401).json({
      success: false,
      message: "user failed to authenticate.",
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate.",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
