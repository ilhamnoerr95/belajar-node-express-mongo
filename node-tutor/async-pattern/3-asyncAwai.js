const {readFile,writeFile} = require('fs').promises
// const util = require('util')
// const readFileSimple = util.promisify(readFile)

// PEMANGGILAN FUNGSI CALL BERISI PROMISE DAN MEMBUAT MENJADI READABLE
// const getText = (path) =>{
//     return new Promise((resolve, reject) =>{
//         readFile(path, 'utf-8',(err,data)=>{
//             if(err){
//                 reject(err)
//             } else {
//                 resolve(console.log(data))
//             }
//         })
//     })
// }

const tryCatch = async()=>{
    try {
        console.log(await readFile('./content/second.txt','utf-8'))
       await writeFile('./content/resultOfAsync.txt', `saya suka ngoding`, {flag: 'a'})
    } catch (error) {
        console.error(error)
    }
}

tryCatch()