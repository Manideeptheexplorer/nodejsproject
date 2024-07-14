const express=require("express")
// const { people } = require("./data")
const app=express()
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
const people=require('./routes/people')
app.use("/api/people",people)
const auth=require('./routes/auth')
app.use('/login',auth)
// app.post("/login",(req,res)=>{
//     const {name}=req.body
//     if(name){
//         res.status(200).send("post successful")
//     }
//     res.status(401).send("Please provide credentials")
// })

// app.get("/api/people",(req,res)=>{
//     res.status(200).json({success:true,data:people})
// })
// app.post("/api/people",(req,res)=>{
//     const{name}=req.body
//     if(!name){
//         res.status(400).json({"success":false,msg:"please provide value"})
//     }

//     res.status(201).json({"success":true,person:name})
// })
// app.post("/api/people/postman",(req,res)=>{
//     const {name}=req.body
//     if(!name){
//         return res.status(400).json({success:false,msg:"please provide some value"})
//     }
    
//     res.status(201).json({success:true,data:[...people,name]
//     })
// })

// app.put("/api/people/id",(req,res)=>{
//     const {id}=req.params
//     const{name}=req.body
//     const person = people.find((person) => person.id === Number(id))

//     if (!person) {
//         return res
//         .status(404)
//         .json({ success: false, msg: `no person with id ${id}` })
//     }
//     const newPeople = people.map((person) => {
//         if (person.id === Number(id)) {
//         person.name = name
//         }
//         return person
//     })
//     res.status(201).json({ success: true, data: newPeople })
// })
// app.delete('/api/people/:id', (req, res) => {
//     const person = people.find((person) => person.id === Number(req.params.id))
//     if (!person) {
//       return res
//         .status(404)
//         .json({ success: false, msg: `no person with id ${req.params.id} so we can't delete the data specified to that id` })
//     }
//     const newPeople = people.filter(
//       (person) => person.id !== Number(req.params.id)
//     )
//     return res.status(200).json({ success: true, data: newPeople })
//   })
app.listen(5000,()=>{
    console.log("server listening on the port...5000");
})