const {createReadStream} = require('fs')

const stream = createReadStream('./content/bigData.txt', {
    highWaterMark: 300,
    encoding: 'utf8'
})

// DEFAULT 64kb
//  last buffer : remainder buffer
// highWaterMark - control size
// encoding - 

stream.on('data', (result)=>{
    console.log(result)
})