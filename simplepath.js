const path = require('path')
const fs = require('fs')


fs.readFile(path.join(__dirname, 'data', 'customers.csv'), {encoding: 'utf-8'} , function(err, data){
    if(err){
        console.error(err)
    }
    console.log(data)
})

const server = require(path.join(__dirname,'data', 'customers.csv'))