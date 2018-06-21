const EventEmitter = require('events')

class Emitter extends EventEmitter {

}

var emitter = new Emitter()

emitter.once("knock", function(){
    console.log("Who \'s three ?")
})

emitter.on("knock", function(){
    console.log("Go Away!")
})

console.log("count listener:", emitter.listenerCount("knock") )

emitter.emit("knock")
emitter.emit('knock')
emitter.removeAllListeners("knock")
emitter.emit('knock')