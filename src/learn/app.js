//Module wrapper function

console.log(__dirname)
console.log(__filename)

//Event listener
const eventManager = require('./EventManager')
eventManager.on('logEvent', (arg) => {
    console.log("Log Event Capture with arguments: " + arg)
})




var sayHello = function (name) {
    global.console.log("Hello " + name)
}

//Simple Logger
const log = require('./logger')
console.log(log);
log("hola logger")

//Class Logger
const Logger = require('./LoggerEvent')
const logger = new Logger();

logger.on('messageLogged', (arg) =>  {
    console.log("LoggerEvent emit messageLogged with arg: " + arg)
})

logger.log("pishonshito")