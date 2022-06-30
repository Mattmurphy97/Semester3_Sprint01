const crc32 = require("crc/crc32");
const fs = require("fs");
//load logEvents module
const logEvents = require("./logEvents");
logEvents.logData = ""

// Template for help info for token
const initTemp = `

sprint01-Full-Stack 

init <command>

Usage: 

sprint01-Full-Stack init --all RECOMMENDED FOR INITIAL SETUP
------------------------------------------------------------
sprint01-Full-Stack token <username>-->  Generates Token for associated "username" using crc module.

`;

// Function which allows us to add days to our current date by passing required info through function.
// returning the result
function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

const argOptions = process.argv;

// Function takes an argument for username. newToken creates the template in JSON format.
function newToken(username) {
    
  let newToken = JSON.parse(`{
        "created": "1969-01-31 12:30:00",
        "username": "username",
        "email": "user@example.com",
        "phone": "5556597890",
        "token": "token",
        "expires": "1969-02-03 12:30:00",
        "confirmed": "tbd"
    }`);
  
  // Creates variables for specifing certain time.
  let now = new Date();
  let expires = addDays(now, 3);
  
  // newToken variable changes the key value with now(created above/current date). Username
  // updated with argument inputted. (changed email as well)
  // crc module creates a unique number with username and creates 
  // 16 char string token. Expiry date is our addDays function (3 days added)
  newToken.created = now;
  newToken.username = username;
  newToken.email = `${username.toLowerCase()}@example.com`;
  newToken.token = crc32(username).toString(16);
  newToken.expires = expires;
  
  // Read tokens.json and store info in data, token variable is our Parsed JSON data/
  // we push data from tokens, to newToken variable / turn JSON data back to string.
  // Then write the new data to our JSON and inform user.
  fs.readFile(__dirname + "/json/tokens.json", "utf-8", (error, data) => {
    if (error) throw error;
    let tokens = JSON.parse(data);

    tokens.push(newToken);
    userTokens = JSON.stringify(tokens);

    fs.writeFile(__dirname + "/json/tokens.json", userTokens, (err) => {
      if (err) console.log(err);
      else {
        console.log(`New token ${newToken.token} was created for ${username}.`);
      }
    });
  });
  return newToken.token;
}

// Exports to allow functions/variables to be used in other js files which include
// require("./token")
module.exports = {
  newToken,
};
