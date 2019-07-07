const http = require('src/learn/http')

const server = http.createServer();

server.on('connection', (socket) =>{
    console.log('new Connection');
})

server.listen(3000)

console.log('Listening on port 3000');