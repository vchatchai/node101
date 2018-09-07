let buffer = new  ArrayBuffer(10);
let view1 = new Int8Array(buffer);
let view2 = new Int8Array(buffer, 5, 2);

console.log(view1.buffer === buffer); 
console.log(view2.buffer === buffer);
console.log(view1.byteOffset);
console.log(view2.byteOffset);
console.log(view1.byteLength);
console.log(view2.byteLength);


let ints = new  Int16Array(2);
let floats = new Float32Array(5);

console.log(ints.byteLength);
console.log(ints.length);

console.log(floats.byteLength);
console.log(floats.length);


let ints1 = new Int16Array([25,50]);
let ints2 = new Int32Array(ints1);


console.log(ints1.buffer === ints2.buffer);

console.log(ints1.byteLength);
console.log(ints1.length);
console.log(ints1[0]);
console.log(ints1[1]);

console.log(ints2.byteLength);
console.log(ints2.length);
console.log(ints2[0]);
console.log(ints2[1]);



for(let v of ints1) { 
    console.log(v)
}

ints = new Int16Array(["hi"])
console.log(ints)
console.log(ints[0])


ints = new Int16Array([25,50]);
mapped = ints.map(v => "hi");

console.log(mapped.length);
console.log(mapped[0]);
console.log(mapped[1]);

console.log(mapped instanceof Int16Array);
console.log(mapped instanceof Array)