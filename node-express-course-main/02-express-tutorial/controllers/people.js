let {people}=require('../data')

const getPeople=(req,res)=>{
    res.status(200).json({success:true,data:people})
}

const createPerson=(req,res)=>{
    const{name}=req.body
    if(!name){
        res.status(400).json({"success":false,msg:"please provide value"})
    }

    res.status(201).json({"success":true,person:name})
}

const createPersonPostman=(req,res)=>{
    const {name}=req.body
    if(!name){
        return res.status(400).json({success:false,msg:"please provide some value"})
    }
    
    res.status(201).json({success:true,data:[...people,name]
    })
}

const updatePerson=(req,res)=>{
    const {id}=req.params
    const{name}=req.body
    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res
        .status(404)
        .json({ success: false, msg: `no person with id ${id}` })
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
        person.name = name
        }
        return person
    })
    res.status(201).json({ success: true, data: newPeople })
}

const deletePerson=(req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${req.params.id} so we can't delete the data specified to that id` })
    }
    const newPeople = people.filter(
      (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json({ success: true, data: newPeople })
  }

  module.exports={
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
  }