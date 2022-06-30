const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
//load logEvents module
const logEvents = require("./logEvents");
logEvents.logData = ""

// Template for config.json created during initialization
const restoreTemp = {
  name: "AppConfigCLI",
  version: "1.0.0",
  description: "The Command Line Interface (CLI) for the App.",
  main: "app.js",
  superuser: "adm1n",
};

// Template for config help for switch
const configTemp = `
sprint01-Full-Stack

Usage: 

sprint01-Full-Stack config --view   -->  View Contents of ./json/config.json.

sprint01-Full-Stack config --reset  -->  Restore ./json/config.json To Default Values.

sprint01-Full-Stack config --update -->  View Contents of ./json/config.json
          ***Example: "node app config --update name <newName>***

`;

const argOptions = process.argv;
// Function to display information contained in "config.json"
// After initialization, we read the current config.json and display to user. 
function displayConfig() {
  fs.readFile(`${__dirname}/json/config.json`, (err, data) => {
    if (err) throw error;
    console.log(data.toString());
  });
}

// Function to reset the config.json file to default properties.
// We delete the current json file, and create the a new json file with info
// from our restoreConfig variable
function resetConfig() {
  const restoreConfig = JSON.stringify(restoreTemp, null, 2);
  fs.unlink("./json/config.json", function (err) {
    if (err) throw err;
    console.log("file deleted");
  });
  fs.writeFile(`${__dirname}/json/config.json`, restoreConfig, (err) => {
    console.log("Initial config.json has been restored w/ Default Values\n");
  });
}

// Function to update the current config.json file with new values.
// configJson contains our JSON data which will be converted later.
// the switch will take our 5th argument [4] and execute a switch, if
// there is no match (or help is the 5th arg), the help info for config.js
// will be displayed to the user. The 5th argument must match the key in
// the json file (name/version/etc..), once matched the value of the specified
// key will be changed to what was inputted as the 6th argument [5].
// If there is no case match, or help is entered, variable configTemp will be displayed.
// Note: Ran into an issues with the description case...
function updateConfig(){
  const configJson = require("./json/config.json")
  let configVar = configJson;
  switch(argOptions[4]){
    case "name":
      configVar.name = argOptions[5]
      fs.writeFile("./json/config.json", JSON.stringify(configVar), (err)=>{
        console.log(`config.json updated: ${argOptions[4]} to ${argOptions[5]}`)    
      })
      break;
    case "version":
      configVar.version = argOptions[5];
      fs.writeFile("./json/config.json", JSON.stringify(configVar), (err)=>{
        console.log(`config.json updated: ${argOptions[4]} to ${argOptions[5]}`)
        
      })
      break;
    case "description":
      configVar.version = argOptions[5];
      fs.writeFile("./json/config.json", JSON.stringify(configVar), (err)=>{
        console.log(`config.json updated: ${argOptions[4]} to ${argOptions[5]}`)    
      })
      break;
    case "main":
      configVar.main = argOptions[5];
      fs.writeFile("./json/config.json", JSON.stringify(configVar), (err)=>{
        console.log(`config.json updated: ${argOptions[4]} to ${argOptions[5]}`)
      })
      break;
    case "superuser":
      configVar.main = argOptions[5];
      fs.writeFile("./json/config.json", JSON.stringify(configVar), (err)=>{
        console.log(`config.json updated: ${argOptions[4]} to ${argOptions[5]}`)
      })
      break;
    case "help":
    default:
      console.log(configTemp)
  }
}

// Function containing a switch statement for the 4th argument [3]. This 
// will identify which config command the user wishes to execute. 
function runConfig() {
  const argOptions = process.argv;
  switch (argOptions[3]) {
    case "--view":
      // see displayConfig()
      displayConfig();
      // ----------------
      // uncomment for logger, once working
      // logEvents.logger.info("config.json viewed")
      // ----------------
      break;
    case "--reset":
      // see resetConfig()
      resetConfig();
      // ----------------
      // uncomment for logger, once working
      // logEvents.logger.info("config.json reset to default values")
      // ----------------
      break;
    case "--update":
      // see updateConfig()
      updateConfig();
      // ----------------
      // uncomment for logger, once working
      // logEvents.logger.info()
      // ----------------
      break;
    case "help":
    default:
      console.log(configTemp);
  }
}

// Exports to allow functions/variables to be used in other js files which include
// require("./config")
module.exports = {
  updateConfig,
  runConfig,
  displayConfig,
  resetConfig,
  restoreTemp,
};

// Was trying another method besides Switch but I was getting tangled up with reading/updating each key
// Spoke with KPM and was shown the above method instead.
// --------------------------
// function updateConfig() {
//   // come back to this, 56:00 on video 19
//   fs.readFile(`${__dirname}/json/config.json`, (error, data) => {
//     if (error) throw error;
//     let cfg = JSON.parse(data);
//     const keys = Object.keys(cfg);
//     // The 2 console.log's below were to check if they were matching
//     // console.log(keys[4])
//     // console.log(argOptions[4])

//     for (let i = 0; i < keys.length; i++) {
//       if (keys[i] !== argOptions[4]) {
//         // This msg was to make sure that everything was
//         // console.log("No match yet...")
//       } else {
//         console.log(`we have a match: ${argOptions[4]}`);
//         data = JSON.stringify(cfg, null, 2);
//         console.log(
//           "Loop Works /  NEED TO REPLACE KEY[i] value WITH argOptions[4] & WRITE TO /json/config.json "
//         );
//       }
//     }
//   });
// }



