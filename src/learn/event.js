
const EventEmitter = require('events');

const emitter = new EventEmitter();

//Register a Listener
emitter.on('messageLogged', function(){
    console.log('Listener Called')
})

//Raise an event
emitter.emit('messageLogged')



//Register a Listener whit Arguments
emitter.on('messageLoggedArg', function(eventArg){
    console.log('Listener Called', eventArg)
})

//Raise an event with arguments
emitter.emit('messageLoggedArg', {id:1,url:'url'})





//Register a Listener whit Arguments with arrow function
emitter.on('messageLoggedArgArrow', (eventArg) => {
    console.log('Listener Called', eventArg)
})

//Raise an event with arguments
emitter.emit('messageLoggedArgArrow', {id:1,url:'url'})