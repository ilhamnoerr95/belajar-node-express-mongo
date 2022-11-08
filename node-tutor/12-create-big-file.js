const {writeFileSync} = require('fs')

for(let i = 0; i<= 200;i++){
    writeFileSync("./content/bigData.txt", `data nomor: ${i}\n`, {flag:'a'} )
}