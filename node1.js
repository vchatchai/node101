console.log("Ttests")
console.log(process.cwd())
console.log(__dirname)
console.log(process.env.NODE_ENV)

const fs = require('fs')

const sum = require('./utility.js')


let checkingAccountBalance = 200
let savingsAccountBalance = 1000
let retirementAccountBalance = 20000

let totalBalance=sum([checkingAccountBalance, savingsAccountBalance, retirementAccountBalance] )
console.log(totalBalance)