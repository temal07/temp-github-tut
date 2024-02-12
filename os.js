// OS in JS

const os = require("os");

// Get information about current user
const user = os.userInfo();

console.log(`The system uptime is ${os.uptime} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}

console.log(currentOS);
