const {people} = require('./data')

const authorize = (req,res,next)=>{
    // apabila user tidak ada/da
    // MIDDLEWARE UNTUK YG LOGIN ATAU BELUM LOGIN
    const {user} = req.query
    // people.forEach(data =>{
    //     if(user === data.name) {
    //         req.user = {name:data.name, id: data.id}
    //         next()
    //     }
    //     else {
    //         return res.status(401).json({error: 'unauthorzied'})
    //     }
    // })
    if(user === "ayam") {
        req.user = {name:"ayam", id: 1}
        next()
    }
    else {
        return res.status(401).json({error: 'unauthorzied'})
    }
   
    
}

module.exports = authorize