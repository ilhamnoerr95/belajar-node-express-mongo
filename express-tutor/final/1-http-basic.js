const http = require('http');
const chalk = require('chalk');
const {readFileSync} = require('fs')

// get all pages in the
const homePage = readFileSync("./navbar-app/index.html")
const styleCss = readFileSync("./navbar-app/styles.css")
const browserApp = readFileSync("./navbar-app/browser-app.js")
const logoSvg = readFileSync("./navbar-app/logo.svg")


const server = http.createServer((req, res)=>{
    console.log(req.url)
    const url = req.url
    if(url === '/'){
        res.writeHead(200, {
            'content-type': 'text/html'
        })
       
        res.write(homePage)
        res.end()
    }
    else if (url === '/styles.css'){
        res.writeHead(200, {
            'content-type': 'text/css'
        })
        res.write(styleCss)
        res.end()
    }
    else if (url === '/logo.svg'){
        res.writeHead(200, {
            'content-type': 'image/svg+xml'
        })
        res.write(logoSvg)
        res.end()
    }
    else if (url === '/browser-app.js'){
        res.writeHead(200, {
            'content-type': 'text/javascript'
        })
        res.write(browserApp)
        res.end()
    }
    // else if ()
    else if (url === '/about'){
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.write("<h1>about</h1>")
        res.end()
    }
    // not page 
    else {
        res.writeHead(404, {
            'content-type': 'text/html'
        })
        res.write("<h1>page not found</h1>")
        res.end()
    }
})

server.listen(5000, ()=>{
    console.log(chalk.green(`Listen to the Port 5000`))
})