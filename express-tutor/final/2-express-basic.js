const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    console.log("user req /")
    res.status(200).send('home page')
})
app.get('/about', (req,res)=>{
    console.log("user req /about")
    res.status(200).send('ABOUT YOU')
})

app.all('*', (req,res)=>{
    res.status(404).send('<h1>page not found</h1>')
})

app.listen(5000, ()=>{
    console.log('RUNNING SERVER LISTEN PORT 5000')
})
// app.listen(port);
// app.get
// app.post
// app.put
// app.delete
// app.use
// app.all