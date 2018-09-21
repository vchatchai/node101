let proxy = new Proxy({}, {
    defineProperty(trapTarget, key, descriptor) {
        console.log('descriptor.value',descriptor.value);
        console.log('descriptor.name',descriptor);

        return Reflect.defineProperty(trapTarget, key, descriptor);
    }
});


proxy.lastname = 'vichai'


Object.defineProperty(proxy, "name", {
    value: "proxy",
    name: "custom"
});

console.log(proxy);

for( let v of Object.getOwnPropertyNames(proxy)){

    console.log(v);
}

console.log(Object.getOwnPropertyNames(proxy))
console.log(proxy.lastname)