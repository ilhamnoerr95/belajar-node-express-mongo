const http = require('http')

// req what will coming in/ req yg datang 
// res represent what we sending out/ response yg akan kita kirim
const server = http.createServer((req,res)=>{
        if(req.url === '/'){
            res.end("HOME PAGE")
        } 
        if(req.url === '/about'){
            // blocking code 
            for(let i=0; i< 1000;i++){
                for(let j=0; j< 1000; j++){
                    console.log(`${i} ${j}`)
                }
            }
            res.end("about")
        } 
        // res.end("error")
})

// penggunaan asynchronous sangat berguna apabila ada blockin kode, saat 1 user dengan user lainnya sedang mencari data dengan bersamaan maka
// user tidak akan terblock dengan code yg dibuat, jadi kode menguataman yg jalan lebih cepat terlebih dahulu.

server.listen(5000,()=>{
    console.log('server listen on port 5000!')
})