let target = {}

let  result1 = Object.defineProperty(target, "name", {value: "target12"});

console.log(result1)
console.log(Object.getOwnPropertyDescriptor(target, "name"))
console.log(target === result1)

let result2 = Reflect.defineProperty(target, "name", {value: "reflect"});
console.log(result2)