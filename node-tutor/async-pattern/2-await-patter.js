const {readFile} = require('fs')

const getText = (path) =>{
    return new Promise((resolve, reject) =>{
        readFile(path, 'utf-8',(err,data)=>{
            if(err){
                reject(err)
            } else {
                resolve(console.log(data))
            }
        })
    })
}

const tryCatch = async()=>{
    try {
        await getText('./content/second.txt')
    } catch (error) {
        console.error(error)
    }
}

tryCatch()