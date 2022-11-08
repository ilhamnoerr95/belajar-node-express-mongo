let {people} = require('../data');


const getPerson = (req,res)=>{
    res.status(200).json({success: true, data: people});
}

const addPerson = (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(201).json({success: false, msg:'pls provide name value'})
    }
    res.status(201).json({success: true,name:name})
}

const editPerson = (req,res)=>{
    let {id} = req.params;
    let {name}= req.body;
    const person = people.find((person)=> person.id === Number(id))
    if(!person){
        return res.status(404).json({success: false, msg:'idnya ga ada'})
    }
    
    const newPeople = people.map((orang)=>{
        if(orang.id === Number(id)) {
            orang.name = name
        }
        return orang
    })
    res.status(200).json({sukses:true, data:newPeople})
}

const deletePerson =  (req,res)=>{
    let {id} = req.params;

    const person = people.find((person)=> person.id === Number(id))
    if(!person){
        return res.status(404).json({success: false, msg:`idnya ga ada ${id}`})
    }
    // filter data yg tidak match dengan params
    const deletePerson = people.filter((data)=> data.id !== Number(id))   

    return res.status(200).json({sukses:true, data: deletePerson})

}

module.exports = {getPerson,addPerson,deletePerson,editPerson}