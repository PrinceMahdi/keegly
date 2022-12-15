const express = require("express");
const path = require("node:path");
const router = express.Router();
const { newId, writeJSONFile } = require("../helper/helper");
const userDataJSONFile = path.join(__dirname, "../data/users.json");
const userData = require(userDataJSONFile);

router.get("/", (req, res) => {
  try {
    res.status(200).json(userData);
  } catch (error) {
    console.log(`::: There was an error: ${error} :::`);
  }
});

// make a post request that adds information to the user that's logged in
router.post("/", (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = {
      id: newId(userData),
      name,
      email,
      password,
    };
    userData.push(newUser);
    writeJSONFile(userDataJSONFile, userData);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(`::: There was an error: ${error} :::`);
  }
});

module.exports = router;
