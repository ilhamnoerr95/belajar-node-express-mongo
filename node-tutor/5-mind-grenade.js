const number = 5;
const number2 = 10;

function addValues(){
    console.log(`my number is ${number + number2}`)
}

// throw the function without exports to tge app.js
// karena function ini tereksekusi maka ketika kita call in the other file
// fungis ini akan jalan tanpa menggunaknan expors, ini hanya menjalankan fungsi
// yg sudah di execute
addValues()