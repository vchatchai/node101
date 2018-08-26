let values = [1,2,3];
let iterator = values[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


function isIterable(obj){ 
    return typeof obj[Symbol.iterator] === 'function';
}

console.log('isIterable([1,2,3])',isIterable([1,2,3]));
console.log('isIterable("Hello")',isIterable("Hello"));
console.log('isIterable(new Map())',isIterable(new Map()));
console.log('isIterable(new Set())',isIterable(new Set()));
console.log('isIterable(new WeakMap())',isIterable(new WeakMap()));
console.log('isIterable(new WeakSet())',isIterable(new WeakSet()));
