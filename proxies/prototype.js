let target = { };


let proxy2 = new Proxy(target, {
    getPrototypeOf(trapTarget){
        return Reflect.getPrototypeOf(trapTarget)
    },
    setPrototypeOf(trapTarget, proto){
        return Reflect.setPrototypeOf(trapTarget, proto)
    }

});

let targetProto = Object.getPrototypeOf(target);
let proxyProto = Object.getPrototypeOf(proxy2);


console.log(targetProto === Object.prototype);
console.log(proxyProto === Object.prototype);

Object.setPrototypeOf(target, {});
Object.setPrototypeOf(proxy2,{});


let proxy = new Proxy(target, {
    getPrototypeOf(trapTarget)  {
        return null;

        // Reflect.getPrototypeOf
    },
    setPrototypeOf(trapTarget, proto) {
        return false;
    }
});

targetProto = Object.getPrototypeOf(target);
proxyProto = Object.getPrototypeOf(proxy);

console.log(target === Object.prototype);
console.log(proxyProto === Object.prototype);

//succeeds
Object.setPrototypeOf(target, {});

//throws error
Object.setPrototypeOf(proxy, {});