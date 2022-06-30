// Set Up Requires
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
//load logEvents module
const logEvents = require("./logEvents");
logEvents.logData = ""

// Template for helpFile.txt, also the default cases.
const initTemp = `

sprint01-Full-Stack 

Usage: 

("npm install" installs dependencies )
("node app init --all" initializes project)
("node app" for full help text)
----------------------------------------------------------------------------------------------------
sprint01-Full-Stack init --all      --> (Initialize Project) Creates Folder Structure & Config Files.

sprint01-Full-Stack config --view   -->  View Contents of ./json/config.json.

sprint01-Full-Stack config --reset  -->  Restore ./json/config.json To Default Values.

sprint01-Full-Stack config --update -->  View Contents of ./json/config.json
          ***Example: "node app config --update name <newName>" ***

sprint01-Full-Stack token <username>-->  Generates Token for associated "username" using crc module.

sprint01-Full-Stack server          -->  Creates Web Server on Port: 4000 (Unless Specified Otherwise)

`;
// Template for config.json.
const configFile = {
  name: "SprintConfigForCLI",
  version: "1.0.0",
  description: "The Command Line Interface for Sprint#1",
  main: "app.js",
  superuser: "m@++",
};

// Empty array for generated token file
const tokenFile = [];

// to be written to logFile
const logFile = ""

// Template for created index.html. 
const indexHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Client Window</title>
</head>
<body>
    <h1>This is the Index Page</h1>
    <button>Create Token</button>
    <button>View All Tokens</button>
</body>
</html>

`;

// Function to check if util folder exists, if util folder does NOT exist, create
// and display info to user. If folder exists, display msg to to user.
function checkUtilFolder() {
  if (fs.existsSync(path.join(__dirname, "util")) === !true) {
    fsPromises.mkdir(path.join(__dirname, "util"));
    console.log("util folder Created");
    // ----------------
    // uncomment for logger, once working
    // logEvents.logger.info("util folder Created")
    // ----------------
  } else {
    console.log("util folder already exists");
    // ----------------
    // uncomment for logger, once working
    // logEvents.logger.info("util folder already exists")
    // ----------------
  }
}

// Function to see if logFile.txt exists, if it does, inform user.
// if it does not, create logfile within util folder with data in
// logFile variable
function writeLogFile() {
  if (fs.existsSync(path.join(`${__dirname}/util/logFile.txt`))) {
    console.log("logFile.txt already exists in util folder");
    // ----------------
    // uncomment for logger, once working
    // logEvents.logger.info("logFile.txt already exists in util folder")
    // ----------------
    
  } else {
    fs.writeFile("./util/logFile.txt", logFile, (err) => {
      console.log("logFile.txt created in util folder");
      // ----------------
      // uncomment for logger, once working
      // logEvents.logger.info("logFile.txt created in util folder")
      // ----------------
    });
  }
}

// Function to see if json folder exists. If NOT true, create json folder at root
// if folder exists, inform user.
function checkJsonFolder() {
  if (fs.existsSync(path.join(__dirname, "json")) === !true) {
    fsPromises.mkdir(path.join(__dirname, "json"));
    console.log("json folder Created");
    // ----------------
    // uncomment for logger, once working
    // logEvents.logger.info("json folder Created")
    // ----------------
  } else {
    console.log("json folder already exists");
    // ----------------
    // uncomment for logger, once working
    // logEvents.logger.info("json folder already exists")
    // ----------------
  }
}

// Function to write helpFile.txt. If file exists inform user. If it does not exist
// create helpFile.txt.
function writeHelpfiles() {
  if (fs.existsSync(path.join(`${__dirname}/util/helpFile.txt`))) {
    console.log("helpFile.txt already exists in util folder");
    // ----------------
    // uncomment for logger, once working
    // logEvents.logger.info("helpFile.txt already exists in util folder")
    // ----------------
  } else {
    fs.writeFile("./util/helpFile.txt", initTemp, (err) => {
      console.log("helpFile.txt created in util folder");
      // ----------------
      // uncomment for logger, once working
      // logEvents.logger.info("helpFile.txt created in util folder")
      // ----------------
    });
  }
}

// Function to create default config.json. If file exists inform user.
// If file does NOT exist, create json file with info from configData.
function createConfigJson() {
  let configData = JSON.stringify(configFile, null, 2);
  if (fs.existsSync(path.join(__dirname, "./json/config.json"))) {
    console.log("config.json already exists in this directory");
    // ----------------
    // uncomment for logger, once working
    // logEvents.logger.info("config.json already exists in this directory")
    // ----------------
  } else {
    fs.writeFile("./json/config.json", configData, (err) => {
      console.log("configData written to config.json");
      // ----------------
      // uncomment for logger, once working
      // logEvents.logger.info("configData written to config.json")
      // ----------------
    });
  }
}

// Function to create tokens.json. If it exists inform user. If file does
// NOT exist, create json with information from tokenData.
function createTokenJson() {
  let tokenData = JSON.stringify(tokenFile, null, 2);
  if (fs.existsSync(path.join(__dirname, "./json/tokens.json"))) {
    console.log("token.json already exists in this directory");
    // ----------------
    // uncomment for logger, once working
    // logEvents.logger.info("token.json already exists in this directory")
    // ----------------
  } else {
    fs.writeFile("./json/tokens.json", tokenData, (err) => {
      console.log("tokenData written to token.json");
      // ----------------
      // uncomment for logger, once working
      // logEvents.logger.info("tokenData written to token.json")
      // ----------------
    });
  }
}

// Function to create views folder. If existence is NOT true, create views
// folder. If true, inform user folder already exists.
function createViews() {
  if (fs.existsSync(`${__dirname}/views`) == !true) {
    fsPromises.mkdir(`${__dirname}/views`);
    console.log("views folder Created");
    // ----------------
    // uncomment for logger, once working
    // logEvents.logger.info("views folder Created")
    // ----------------
  } else {
    console.log("views folder already exists");
    // ----------------
    // uncomment for logger, once working
    // logEvents.logger.info("views folder already exists")
    // ----------------
  }
}

// Function to create our simple HTML page with information from indexHtml
function createHtmls() {
  if (fs.existsSync(path.join(`${__dirname}/views/index.html`))) {
    console.log("index.html already exists in views folder");
    // ----------------
    // uncomment for logger, once working
    // logEvents.logger.info("index.html already exists in views folder")
    // ----------------
  } else {
    fs.writeFile("./views/index.html", indexHtml, (err) => {
      console.log("index.html created in views folder");
      // ----------------
      // uncomment for logger, once working
      // logEvents.logger.info("index.html created in views folder")
      // ----------------
    });
  }
}

// Function to execute when initialization occures. This executes the above 
// functions related to file/directory creation.
function runInit() {
  const argOptions = process.argv;
  switch (argOptions[3]) {
    case "--all":
      checkUtilFolder();
      checkJsonFolder();
      writeHelpfiles();
      writeLogFile();
      createConfigJson();
      createTokenJson();
      createViews();
      createHtmls();
      break;
    case "help":
    default:
      console.log(initTemp);
  }
}

// Exports to allow functions/variables to be used in other js files which include
// require("./init")
module.exports = {
  runInit,
  checkUtilFolder,
  checkJsonFolder,
  writeHelpfiles,
  createConfigJson,
  initTemp,
  createTokenJson,
};

