let target = {}


let proxy = new Proxy(target, {
    isExtensible(trapTarget) {
        return Reflect.isExtensible(trapTarget);
    },
    preventExtensions(trapTarget){
        return Reflect.preventExtensions(trapTarget);
    }
})

console.log(Object.isExtensible(target));
console.log(Object.isExtensible(proxy));

console.log(Object.preventExtensions(proxy));


console.log(Object.isExtensible(target));
console.log(Object.isExtensible(proxy));

let target2 = {}

let proxy2 = new  Proxy(target2, {
    isExtensible(trapTarget){
        return Reflect.isExtensible(trapTarget);
    },
    preventExtensions(trapTarget) {
        return false;
    }
})

console.log(Object.isExtensible(target2));
console.log(Object.isExtensible(proxy2));

Object.preventExtensions(proxy2);
console.log(Object.isExtensible(target2));
console.log(Object.isExtensible(proxy2));