let result1 = Object.isExtensible(2);


console.log(result1)

let target = {};
let result2 = Reflect.isExtensible(target);

console.log(result2)

let result3 = Reflect.preventExtensions(2)