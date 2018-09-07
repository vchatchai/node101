let buffer = new ArrayBuffer(10);

buffer[0] = 0;
buffer[1] = 1;
buffer[2] = 2;
buffer[3] = 3;
buffer[4] = 4;
buffer[5] = 5;
console.log(buffer.byteLength)
console.log(buffer)


let buffer2 = buffer.slice(4,6);
console.log(buffer2.byteLength) 
console.log(buffer2[0])
console.log(buffer)