let buffer = new ArrayBuffer(10);
let view1 = new DataView(buffer)
let view2 = new DataView(buffer,5,2);

console.log(view1.buffer === buffer);
console.log(view2.buffer === buffer);
console.log(view1.byteOffset);
console.log(view2.byteOffset);
console.log(view1.byteLength);
console.log(view2.byteLength);
console.log(view1);

for (let x in buffer) {
    console.log(x)
}


view1.setInt8(0,5)
view1.setInt8(1,-1)

console.log(view1.getInt8(0));
console.log(view1.getInt8(1));
console.log(view1)
console.log(buffer)
console.log(view1.getInt16(0));

console.log(UInt8Array.BYTES_PER_ELEMENT);
console.log(UInt16Array.BYTES_PER_ELEMENT); 
let ints = new Int8Array(5);
console.log(ints.BYTES_PER_ELEMENT);