const logger=(req,res,next)=>{
    const methods=req.method
    const url=req.url
    const time=new Date().getFullYear()
    console.log(methods,url,time)
    next()
}
module.exports=logger

