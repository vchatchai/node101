let proxy = new  Proxy({}, { 
    defineProperty(trapTarget, key, descriptor){ 
        console.log(descriptor)

        return Reflect.defineProperty(trapTarget, key, descriptor)
    }
    
})

Object.defineProperty(proxy, "name", {
    value: "proxy", 
    name: "custom"
})

console.log(proxy.name)
console.log(proxy.custom)

