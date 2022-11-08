const express =require('express');
const app = express();
const chalk = require('chalk');
const logger = require('./logger');
const authorize = require('./autherize');
const morgan = require('morgan');
// req => middleware => response 

// * use vs route 
// * options - our own / experss /third party

// app.use(path, middleware) path berfungsi dikhususkan untuk url yg depanya menggunakan url tersebut
// app.use  tanpa menggunakan path maka semua fungsi yg ada akan di applied menggunakan middleware 
// app.use([logger,authorize])
app.use(morgan("tiny"))
app.get('/', (req,res)=>{
    res.status(200).send("home")
})
// app.get('/:id/query', (req,res)=>{
//     let {ayam }= req.query
//     req.ayam = {a:"ayamgoreng"}
//     console.log(req.query)
//     res.status(200).send("home")
// })

app.get('/about', (req,res)=>{
    console.log(req.user)
    res.status(200).send("about")
})

app.get('/api/products',[logger,authorize], (req,res)=>{
    res.status(200).send("products")
})


app.listen(5000, ()=>{
    console.log(chalk.blue(`server is listening on port 5000`))
    })