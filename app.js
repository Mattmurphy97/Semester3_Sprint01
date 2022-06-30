/*
Description: Sprint01-pt3: CLI
Authors: Matt/Jen/Terrence/Brady
Due Date: June/29/2022
gitHub CLI: "gh repo clone Mattmurphy97/Semester3_Sprint01"
gitHub HTTPS: https://github.com/Mattmurphy97/Semester3_Sprint01.git
--------------------------------
Usage: 

("npm install" installs dependencies )
("node app init --all" initializes project)
("node app" for full help text)
*/

// Require necessary modules
const fs = require("fs");
const init = require("./init");
const config = require("./config");
const token = require("./token");
const server = require("./server");

//load logEvents module
const logEvents = require("./logEvents");
//logEvents.logData = ""

// "logEvents.logger.info("blahblah");"" <-- This gives a timestamp/level/message OR data.
// Can also use other levels instead of logger.info(), such as: .error("blahblah")/.fatal("blahblah")
// .debug("blahblah") with each level has a priority. (debug runs by default).
// Refer to logEvents.js for more info on what the plan was.


// the 3rd argument indicates which case to execute.
// If argument is not matched, or "help" is entered, the helpfile.txt info will be displayed
const argOptions = process.argv;
switch (argOptions[2]) {
  case "init": 
    // see runInit function in "init.js" file
    init.runInit();
    // ----------------
    // uncomment for logger, once working
    // logEvents.logger.info("App Initialized")
    // ----------------
    break;
  case "config":
    // see runInit function in "config.js" file
    config.runConfig();
    break;
  case "token":
    // this sets our next argument to be the username of the next created token
    const username = process.argv[3] || "username";
    // see newToken() function in "token.js" file
    token.newToken(username);
    // ----------------
    // uncomment for logger, once working
    // logEvents.logger.info()
    // ----------------
    break;
  case "server":
    // ----------------
    // uncomment for logger, once working
    // logEvents.logger.info()
    // ----------------
    // this starts our server, see serverFunction() in "server.js" file
    server.serverFunction();
    break;
  // if help, or an unmatched argument is entered, display the full help text
  case "help":
  default:
    console.log(init.initTemp);
}