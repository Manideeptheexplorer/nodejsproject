const express=require('express')
const app=express()
const {products}=require('./data')
app.get('/',(req,res)=>{
    res.send('<h1>home page</h1><a href="/api/products">products</a>')
})
app.get('/api/products',(req,res)=>{
    let requestedproducts=products.map((product)=>{
        const {id,name,image}=product
        return {id,name,image}
    })
    res.send(requestedproducts)
})

app.get('/api/products/:prodId',(req,res)=>{
   let sortedProducts=[...products]
   const {prodId}=req.params
//    console.log(prodId)
   sortedProducts=sortedProducts.find((product)=>product.id===Number(prodId))
   if(!sortedProducts){
    return res.send('products doesnt found')
   }
   return res.send(sortedProducts)
})
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('hello world')
})
app.get('/api/v1/query',(req,res)=>{
    const {search,limit}=req.query
    let sortedProducts=[...products]
    if(search){
        sortedProducts=sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts=sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length<1){
        return res.status(200).json({sucess:'true',Data:'[]'})
    }
    res.status(200).json(sortedProducts)
})


app.listen(5000,()=>{
    console.log('server listenting to 5000');
})