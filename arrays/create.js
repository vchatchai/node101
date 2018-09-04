let items = new Array(2);
console.log(items.length);
console.log(items[0]);
console.log(items[1]);

items = new Array("2");
console.log(items.length);
console.log(items[0]);


items = new Array(1,2);
console.log(items.length);
console.log(items[0]);
console.log(items[1]);

items = new  Array(1,"2");
console.log(items.length);
console.log(items[0])
console.log(items[1])

console.log(items)


items = Array.of(1,2);
console.log("Array.of(1,2)", items);
items = Array.of(1);
console.log("Array.of(1)", items)