// Ran into issues trying to generate/display token information in HTML page.
// Initially we planned to create a form and some buttons which would hopefully allow
// us to run our token functions to add to the json, and show us a list of tokens with data
// pulled from the tokens.json file but we were unable to get it to work properly.

// Require http/fs modules & identify port#
const http = require("http");
const port = 4000;
const fs = require("fs");
//load logEvents module
const logEvents = require("./logEvents");
logEvents.logData = ""

// Function to create a server (localhost:port). We respond to the server and write 
// the contents of our index.html (created during initialization). if error display 
// to user. finish communication with end()
function serverFunction() {
  const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content_Type":"text/html"});
    fs.readFile("./views/index.html", null, function (err, data){
      if(err) {
        res.writeHead(404);
        res.write("Somethings not right...")
      } else {
        res.write(data)
      }
      res.end();
    })
  });

  server.listen(port, () =>
    console.log(`Server Started on Port ${port}, ` + "Press CTRL+C to Terminate")
  );
}

// Exports to allow functions/variables to be used in other js files which include
// require("./server")
module.exports = {
  serverFunction,
};
