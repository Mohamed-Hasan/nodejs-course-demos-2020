const fs = require('fs');


const exists = fs.existsSync('./aefqe.qefqef')

// console.log(exists)

const fileContents = fs.readFileSync('./hello-world.js', 'utf8')
// console.log(fileContents)

fs.writeFileSync('./hello.txt', "hello")