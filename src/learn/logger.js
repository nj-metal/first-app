const eventManager = require('./EventManager')

var  url = 'http://mylogger.io/log'


function log(message){
    // send an HTTP request
    console.log(message)

    //Emit and event
    eventManager.emit('logEvent',{message: message});

}

module.exports = log;

