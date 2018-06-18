const fs = require('fs')

fs.writeFile('message.txt', 'Hello World', function(error){
    if(error) return console.error(err)
    console.log('Write is done.')
})