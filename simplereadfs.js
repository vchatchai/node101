const path = require('path')
const fs = require('fs') 


fs.readFile(path.join(__dirname,'/data/customers.csv'), {encoding: 'utf-8'}, function(error, data) {
    if(error){
        return console.error(error)
    }
    console.log(data)
})


