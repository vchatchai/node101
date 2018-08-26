function mixin(receiver, supplier) {
    Object.keys(supplier).forEach(function (key) {
        receiver[key] = supplier[key]
    })
    return receiver
}

function EventTarget() { /*.. */ }
EventTarget.prototype = {
    constructor: EventTarget,
    emit: function () {/****/ },
    on: function () {/*---*/ }
}

var myObject = {}
mixin(myObject, EventTarget.prototype)

myObject.emit("somethingChanged")

console.log(myObject)


var receiver = {}
Object.assign(receiver, 
{
    type:"js",
    name:"file.js"
},
{
    type:"css"
}
)
console.log(receiver.type)
console.log(receiver.name)