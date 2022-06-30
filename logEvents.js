// Had some issues creating our own logging system. Check out a few npm logging modules
// This modules uses moment to give us a timestamp (specific timezones can be found on moment
// website). We were looking to append the logFile with the data given from the "logger.into()/
// logger.error()/logger.fatal/etc..." then use the date-fns to allow a new log for each new 
// day. Couldn't get it to work, so I added loggers to most functions so that we can log
// them to a file on disk later if we can figure it out.
const fs = require("fs");
const Logger = require("node-json-logger");
const logger = new Logger({timezone: "America/St_Johns", loggerName: "InitialTestLogger"})
 

// const logData = logger.info({ data: `${logMsg}`});
// // Tried to 
// function loggingToFile() {
//     fs.appendFile("./util/logFile.txt", logData, function (err) {
//         if (err) throw err;
//         console.log("Might have worked")

//     })
// }

// console.log(logMsg)


//loggingToFile();



    // if (fs.existsSync(path.join(`${__dirname}/util/logFile.txt`))) {
    //   console.log("logFile.txt already exists in util folder");
    // } else {
    //   fs.writeFile("./util/logFile.txt", logFile, (err) => {
    //     console.log("logFile.txt created in util folder");
    //   });
    // }


//// Exports to allow functions/variables to be used in other js files which include
//// require("./logEvents")
// module.exports = {
// logger,
// logData, 
// loggingToFile, 
//   };