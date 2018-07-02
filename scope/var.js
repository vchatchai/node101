
var global = 'begin'

let value2 =  "done."

const person = {
    name: "Nicholas"
}

console.log("person:", person)
console.log("getValue true:")
console.log(getValue(true))

console.log("getValue false:")
console.log(getValue(false))
console.log("global %s", global)
var global = "global"
function getValue(condition) {
    // value = "red"
    let values = 2
    var global2 = true
    console.log("inner function %s values: %s", value,values)
    if(condition){
        var value = "blue"
        values = 3 
        // return value
    }
    // else {
        // return null
        // }
        console.log("value2: %s", typeof value2)
        // console.log(value) 
        return value
}
    
    