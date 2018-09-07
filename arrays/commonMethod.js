let ints = new Int16Array([25,50]);
let mapped = ints.map(v => v * 2);
console.log(ints)
console.log(mapped)
console.log(mapped[0]);
console.log(mapped[1]);


console.log(mapped instanceof Int16Array)