let a = 1, 
    b = 2, 
    tmp;

tmp = a;
a = b;
b = tmp;

console.log(a);
console.log(b);

[a,b] = [null,undefined];


console.log(a);
console.log(b);