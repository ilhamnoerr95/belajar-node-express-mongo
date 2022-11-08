const express =require('express');
const app = express();
const path = require('path');
const chalk = require('chalk');
const {products} = require('./data')
app.get('/', (req,res)=>{
    res.send("<h1>home page</h1><br/> <a href='/api/products'>products</a>")
})

app.get('/api/products',(req,res)=>{
    const newProducts = products.map(data=>{
        const {id,name,image} = data;
        return {id,name,image}
    })
    res.json(newProducts)
})

// FIND PRODUCT BASED ON ID
app.get('/api/products/:productID',(req,res)=>{
    // console.log(req)
    // console.log(req.params)
    const {productID} = req.params
    const singleProduct = products.find(data => data.id === Number(productID))
    if(!singleProduct) {
        return res.status(404).send("<h1>no resource</h1>")
    }
    return res.json(singleProduct)
})

app.get('/api/v1/query', (req,res)=>{
    // console.log(req.query)
    const {search, limit} = req.query
    let sortedProduct = [...products]

    if(search){
        sortedProduct = sortedProduct.filter((product)=>{
            return product.name.startsWith(search)    
        })
    }

    if(limit){
        sortedProduct = sortedProduct.slice(0, Number(limit))
    }

    if(sortedProduct < 1) {
        return res.status(200).json({success: true, data:[]})
    }
    return res.status(200).json(sortedProduct)
})

app.listen(5000, ()=>{
console.log(chalk.blue(`server is listening on port 5000`))
})