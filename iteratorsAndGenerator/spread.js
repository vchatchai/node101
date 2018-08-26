let set = new Set([1,2,3,3,3,4,5]);
let array = [...set];
console.log(array)

let map = new Map([["name","Nicholas"], ["age",25]]);

array = [...map];
console.log(array);

let  smallNumbers = [1,2,3];
let bigNumbers = [100,101,102];
let allNumbers = [0, ...smallNumbers, ...bigNumbers];
console.log(allNumbers.length)
console.log(allNumbers)