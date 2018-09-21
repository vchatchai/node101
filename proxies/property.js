let proxy = new Proxy({},{
    defineProperty(trapTarget, key, descriptor) { 

        if(typeof key === 'symbol'){
            return false;
        }

        return Reflect.defineProperty(trapTarget, key, descriptor)
    } , 
    getOwnPropertyDescriptor(trapTarget, key){
        return Reflect.getOwnPropertyDescriptor(trapTarget, key)
    }
});


Object.defineProperty(proxy, "name", {
    value: "define proxy"
});

console.log(proxy)

console.log(proxy.name);

let descriptor = Object.getOwnPropertyDescriptor(proxy, "name");
console.log(descriptor.value)


let nameSymbol = Symbol("name1")
Object.defineProperty(proxy, nameSymbol, {
    value:"name1"
});

console.log(proxy.nameSymbol);
console.log(Object.getOwnPropertyDescriptor(proxy, nameSymbol));

let x = {};
x.sym = 'test';

let y = 'sym';

console.log(Object.getOwnPropertyDescriptor(x, y).value)