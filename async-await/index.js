// const fs = require('fs')
// const path = require('path')
// const { promisify } = require('util')
// const basepath = './assets/'

// const readFileAsync = promisify(fs.readFile)

// function read(index) {
//     return readFileAsync(path.resolve(basepath, `s${index}.txt`), { encoding: 'utf-8' })
// }

const coinFlip = (n) => new Promise(
    (resolve, reject) => n > 0 ? resolve(true) : reject(false)
)

console.log('Begin')
const promiseArray = []
// for (let i = 1; i <= 4; i++) promiseArray[i - 1] = read(i)
for (let i = 0; i <= 3; i++) promiseArray[i] = coinFlip(Math.random())

// console.log(promiseArray)
Promise.all(promiseArray).then(console.log)
