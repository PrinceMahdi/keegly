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

module.exports = router;
