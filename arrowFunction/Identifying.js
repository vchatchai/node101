var comparator = (a,b) => a -b;

console.log(typeof comparator)
console.log(comparator instanceof Function)


var sum = (num1, num2) => num1 + num2

console.log(sum.call(null, 1, 2))
console.log(sum.apply(null,[1,2]))

var boundSum = sum.bind(null, 1, 2)
console.log(boundSum())