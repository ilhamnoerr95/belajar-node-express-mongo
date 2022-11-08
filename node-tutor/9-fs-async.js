const {readFile, writeFile} = require('fs')

/*
    pada pendekatan asynchronous, fungsi async akan berjalan di akhir barisan 
*/
console.log("start")
// PEMANGGILAN CALLBACKS
readFile("./content/firsFs.txt", 'utf-8', (err,result) =>{
    if (err){
        console.error(err)
        return;
    }
    // console.log(result)
    const file = result
    writeFile("./content/asyncResult.txt",`hasil async ${file}`, (err,result)=>{
        if(err){
            console.error(err)
            return;
        }
        console.log(result)
    })
})
console.log("next-start")