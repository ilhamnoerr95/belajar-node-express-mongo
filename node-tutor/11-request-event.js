const eventEmitter = require('events');

const customEmmit = new eventEmitter();

// .on listen for an event 
// emit - emit an event
customEmmit.on('response', (data, angka)=> {
    console.log(`received the data ${data}:${angka}`)
})
customEmmit.on('response', ()=> {
    console.log('bisa panggil name event sebanyak yg dimau')
})

// MANGGIL NAME EVENT, param pertama nama event
customEmmit.emit('response', 'param2', 31)