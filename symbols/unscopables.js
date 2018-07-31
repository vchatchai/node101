// built into ECMAScript 6 by default
Array.prototype[Symbol.unscopables] = Object.assign(Object.create(null), {
    copyWithin: true,
    entries: true,
    fill: true,
    find: true,
    findIndex: true,
    keys: true,
    values: true
});

let values = [1,2,3],
    colors = ["red","green","blue"],
    color = "black";

with(colors){
    push(color);
    push(...values);
}

console.log(colors);