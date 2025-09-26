/** Command-line tool to generate Markov text. */
const fs = require("fs");
const axios = require("axios");
const { MarkovMachine } = require("./markov");

function generateText(text) {
  let mm = new MarkovMachine(text);
  console.log(mm.makeText());
}

// read file and generate text

function makeTextFromFile(path) {
    fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.error(`Error reading file: ${err}`);
      process.exit(1);
    } else {
      generateText(data);
    }
    });
  }

  // read URL and generate text
async function makeTextFromURL(url) {
    try {
      let resp = await axios.get(url);
      generateText(resp.data);
    } catch (err) {
      console.error(`Error fetching URL: ${err}`);
      process.exit(1);
    }
  }

  // interpret command-line arguments
let [method, path] = process.argv.slice(2);

if (method === "file") {
  makeTextFromFile(path);
} else if (method === "url") {
  makeTextFromURL(path);
} else {
  console.error('Usage: node makeText.js [file|url] <path>');
  process.exit(1);
}   


