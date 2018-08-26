let uid = Symbol.for("uid");
let object =  {
    [uid] : "12346"
};

let symbols = Object.getOwnPropertySymbols(object);

console.log(symbols.length);
console.log(symbols[0]);
console.log(object[symbols[0]]);
console.log(symbols)
console.log(Object.getOwnPropertyNames(object))