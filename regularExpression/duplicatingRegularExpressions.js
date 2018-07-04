var re1 = /ab/i
var re2 = RegExp(re1, 'g')


console.log(re1.toString())
console.log(re2.toString())

console.log(re1.test("ab"))
console.log(re2.test("ab"))

console.log(re1.test("AB"))
console.log(re2.test("AB"))
