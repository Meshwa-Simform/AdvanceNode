const express = require("express");
const products = require("./products");

const app = express();
const PORT = 8000;

app.get('/', (req,res)=>{
    res.send("Server is working.");
})

app.get('/products', (req,res)=>{
    res.status(200).json(products);
})

app.get('/products/:id', (req,res)=>{
    const {id} = req.params;
    const product = products.find((product) => product.id === Number(id));

    if (!product) {
        return res.status(404).json({error: "Product not found"});
    }
    res.status(200).json(product);
})

app.listen(PORT , ()=>{
    console.log(`port os running on port ${PORT}`)
})