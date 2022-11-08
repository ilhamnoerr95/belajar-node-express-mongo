const express =require('express');
const app = express();
const path = require('path');
const chalk = require('chalk');

// set up static & middlewaare
// take care of a rest of all style etc
app.use(express.static('./public'))

app.get('/', (req,res) => {
    // res.headersSent()
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})


app.all("*", (req,res) => {
    res.status(404).send("Resource not found")
})


app.listen(5000, ()=>{
console.log(chalk.blue(`server is listening on port 5000`))
})