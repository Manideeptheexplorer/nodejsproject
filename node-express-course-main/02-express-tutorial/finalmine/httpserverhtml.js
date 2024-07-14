const http=require('http')
const {readFileSync}=require('fs')

const homepage=readFileSync('./navbar-app/index.html')
const homeStyles=readFileSync('./navbar-app/styles.css')
const homeLogic=readFileSync('./navbar-app/browser-app.js')
const homelogo=readFileSync('./navbar-app/logo.svg')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homepage)
        res.end()
    }
    else if(req.url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>about page</h1>')
        res.end()
    }
    else if(req.url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }
    else if(req.url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    else if(req.url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homelogo)
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>page not found</h1>')
        res.end()
    }
   
})

server.listen(5000,()=>{
    console.log("hits the server");
})
