const {readFileSync, writeFileSync} = require('fs')

// ngereturn hasil dari isi file
const first = readFileSync('./content/firsFs.txt','utf-8')

console.log(first)

// membuat file 
writeFileSync('./content/createFile.txt', `ini hasilnya ${first}`)