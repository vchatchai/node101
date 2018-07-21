let firstname = Symbol("first name")

//use a computed object literal property
let person = {
    [firstname]: "Nicholas"
}

//make the property read only
Object.defineProperty(person, firstname, {writable: false})

let lastName  = Symbol("last name");

Object.defineProperties(person, {
    [lastName]: {
        value: "Zakas",
        writable: false
    }
})

console.log(person[firstname])
console.log(person[lastName])