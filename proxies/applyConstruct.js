let target = function(){ return 42};
proxy = new Proxy(target, {
    apply: function(trapTarget, thisArg, argumentList){
        console.log('apply',trapTarget,thisArg, argumentList);
        return Reflect.apply(trapTarget, thisArg, argumentList);
    },
    construct:function(trapTarget, argumentList){
        console.log('construct',trapTarget, argumentList);
        return Reflect.construct(trapTarget, argumentList)
    }
});


console.log(typeof proxy);

console.log(proxy())

var instance = new  proxy();

console.log(instance instanceof proxy)
console.log(instance instanceof target)