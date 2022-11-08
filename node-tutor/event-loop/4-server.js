const http = require('http')
const chalk = require('chalk')

const server = http.createServer((req,res)=>{
  console.log("req event")
  res.end("ayam goreng")
})

server.listen(5000,()=>{
    console.log(chalk.green(`listen the server 5000!`))
})