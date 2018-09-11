let ints = new Int16Array(4);

ints.set([25,50]);
ints.set([75,100],2);

console.log(ints.toString())

ints = new Int16Array([25,50,75,100])
let subints1 = ints.subarray();
let subints2 = ints.subarray(2);
let subints3 = ints.subarray(1,3);
console.log(subints1.toString());
console.log(subints2.toString());
console.log(subints3.toString());