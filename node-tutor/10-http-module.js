const http = require('http')


const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('WELCOME HOME')
    }
    if(req.url === '/about'){
        res.end('ini about')
    } else {
        // apabila error
        res.end(
            `
            <h1>salah masuk</h1>
            <a href="/">back to home</a>
            `
        )
    }
    
})

server.listen(5000)