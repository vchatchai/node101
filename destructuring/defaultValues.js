let node = {
    type: "Identifier",
    name: "foo"
};

let {type, name, value, isTrue = true} = node

console.log(type)
console.log(name)
console.log(value)
console.log(isTrue)
