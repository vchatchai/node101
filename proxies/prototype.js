let target = { };
let proxy = new Proxy(target, {
    getPrototypeOf(trapTarget)  {
        return null;

        // Reflect.getPrototypeOf
    },
    setPrototypeOf(trapTarget, proto) {
        return false;
    }
});

let targetProto = Object.getPrototypeOf(target);
let proxyProto = Object.getPrototypeOf(proxy);

console.log(target === Object.prototype);
console.log(proxyProto === Object.prototype);

//succeeds
Object.setPrototypeOf(target, {});

//throws error
Object.setPrototypeOf(proxy, {});