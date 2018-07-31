let symbol = Symbol.for("obj")
let obj = [1,2,4,symbol]

console.log(obj instanceof Array)

console.log(Array[Symbol.hasInstance](symbol)) 

function MyObject(){}


Object.defineProperties(MyObject,Symbol.hasInstance, {
    value: function(v){
        return false;
    }
});

let myObject = new MyObject();
console.log(myObject instanceof MyObject)

// console.log(Symbol.hasInstance(myObject))

function SpecialNumber() {}

Object.defineProperty(SpecialNumber,Symbol.hasInstance, {
 value: function(v){
        return true //( v instanceof Number ) && (v >= 1 && v <= 100);
    }
});

let two = new Number(2),
    zero = new Number(0);

console.log(two instanceof SpecialNumber)
console.log(zero instanceof SpecialNumber)