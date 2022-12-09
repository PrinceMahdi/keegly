const { v4: uuidv4 } = require("uuid");
const fs = require("node:fs");
const axios = require("axios");

/**
 *
 * @returns a unique ID from the uuid module
 */
const newId = () => {
  return uuidv4();
};

/**
 * A function that allows you to write to a file
 * in a human readable format
 */
const writeJSONFile = (filename, content) => {
  fs.writeFileSync(filename, JSON.stringify(content), "utf-8", (error) => {
    if (error) console.log(error);
    console.log(`Changes saves to: ${filename}.`);
  });
};

// <-------------------- EXPORTING FUNCTIONS -------------------->
module.exports = {
  newId,
  writeJSONFile,
};
