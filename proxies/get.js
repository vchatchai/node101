let target = {};

console.log(target.name);

let proxy = new Proxy(target, {
    get(trabTarget, key, receiver){
        if(!(key in receiver)){
            throw new TypeError("Property "+key+" doesn't exist.");
        }

        return Reflect.get(trabTarget, key, receiver);
    }
});

proxy.name = "proxy";
console.log(proxy.name);

console.log(proxy.nme);