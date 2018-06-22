const EventEmitter = require('events')

class Job extends EventEmitter {
    constructor(ops){
        super(ops)
        
        this.on('start', ()=> {
            this.process()
        })
        
    }
    process(){
        setTimeout(() => {
            //emulate the delay of job - async!
            this.emit('done', {
                completedOn: new Date()
            })
        },700)
    }
}

module.exports = Job