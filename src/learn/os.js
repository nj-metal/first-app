const os = require('src/learn/os')

var totalMemory = os.totalmem();

var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory)

console.log(`total memory: ${totalMemory}`)

console.log(`Free memory: ${freeMemory}`)