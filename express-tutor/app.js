const express =require('express');
const app = express();
const chalk = require('chalk');
const people = require('./router/people')
const auth = require('./router/auth')

// static assets
app.use(express.static('./method-public'))
// parse from input html to body
// built in middleware from express
app.use(express.urlencoded({ extended:false}))
// parse json
app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)




app.listen(5000, ()=>{
    console.log(chalk.blue(`server is listening on port 5000`))
    })