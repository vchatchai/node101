let ints = new Int16Array([25,60]);
let intsArray = [...ints];

console.log(intsArray instanceof Array);
console.log(intsArray[0]);
console.log(intsArray[1]);




ints = Int16Array.of(25,50);
let floats = Float32Array.from([1.5,2.5]);


console.log(ints instanceof Int16Array);
console.log(floats instanceof Float32Array);

console.log(ints.length);
console.log(ints[0]);
console.log(ints[1]);


console.log(floats.length);
console.log(floats[1])