const EventEmitter = require('events')
class Job extends EventEmitter {}
job = new Job()
job.on('done',function(timeDone){
    console.log("Job was pronounced was done at", timeDone)
})

job.emit('done', new Date())
job.removeAllListeners()