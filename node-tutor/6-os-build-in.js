const os = require("os")

// info about current user
const user = os.userInfo()
console.log(user)
// method return the systme uptime in seconds
console.log(`the System uptime is ${os.uptime()} seconds`)


const currentOs = {
    name: os.type(),
    relesase: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs)