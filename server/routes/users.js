const express = require("express");
const { write } = require("node:fs");
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

router.post("/newprofile/:id", (req, res) => {
  const {
    profileBanner,
    profilePicture,
    profileName,
    profileJobTitle,
    profileLinkedin,
    profileGithub,
    profileInstagram,
    profileCompany,
    profileLocation,
    profileBio,
    projectName,
    projectGithubLink,
    projectLiveLink,
    projectPicture,
    profileResume,
    profileResumeUrl,
    selectedSkills,
    color,
  } = req.body;

  const newUser = {
    profileBanner,
    profilePicture,
    profileName,
    profileJobTitle,
    profileLinkedin,
    profileGithub,
    profileInstagram,
    profileCompany,
    profileLocation,
    profileBio,
    projectName,
    projectGithubLink,
    projectLiveLink,
    projectPicture,
    profileResume,
    profileResumeUrl,
    selectedSkills,
    color,
  };

  const updatedUserData = userData.map((user) => {
    return user.uniqueId == req.params.id ? { ...user, ...newUser } : user;
  });

  writeJSONFile(userDataJSONFile, updatedUserData);
  res.status(200).json(updatedUserData);
});

module.exports = router;
