let firstName = Symbol("first name")
let person = {};

person[firstName] = "Chatchai"
console.log("first name" in person)
console.log( firstName in person)
console.log(person[firstName])
console.log(firstName, firstName.toString())
console.log(typeof(firstName))