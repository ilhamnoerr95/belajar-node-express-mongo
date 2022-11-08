const path = require('path')

console.log(path.sep)

const filePath = path.join('/content','subfolder', 'test.text')
console.log(filePath)

// akses the file with basename
const base = path.basename(filePath)
console.log(base)


// how to execute absolute path 
const absolute = path.resolve(__dirname, "content", 'subfolder', 'test.text')
console.log(absolute)