const express=require("express")
const router=express.Router()


router.post("/",(req,res)=>{
    const {name}=req.body
    if(name){
        res.status(200).send("post successful")
    }
    res.status(401).send("Please provide credentials")
})

module.exports=router