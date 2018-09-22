let proxy = new Proxy({}, {
    ownKeys(trapTarget){
        return Reflect.ownKeys(trapTarget).filter(key => {
            return typeof key !== "string" || key[0] !== "_";
        });
    }
})

let nameSymbol = Symbol("name");

proxy.name = "proxy";
proxy._name =  "private";
proxy[nameSymbol] = "symbol";

let names = Object.getOwnPropertyNames(proxy);
let keys = Object.keys(proxy);
let symbols = Object.getOwnPropertySymbols(proxy);

console.log(names.length);
console.log(names[0]);
console.log(names);

console.log(keys.length)
console.log(keys[0])
console.log(keys)

console.log(symbols.length);
console.log(symbols[0])
console.log(symbols)


console.log("name" in keys)
console.log(`for-in`)
for (let v in keys) { 
    console.log(v)
}