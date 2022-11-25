const express = require('express')
const productRoutes = require('./Routes/productRoutes')
 const app = express()
require('dotenv').config()
 app.use(express.json())

 app.use("/products",productRoutes )
 app.get('/', (req,res)=>{
    res.send('runnning')
 })

 app.listen(process.env.PORT ||5000, ()=>{console.log('running')})