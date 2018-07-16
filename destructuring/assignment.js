let node = {
    type: "Identifier",
    name: "foo"
}
// type = "Literial"
// name = "5"

let {type, name} = node
console.log(type);
console.log(name);

// ({type, name} = node)
({type,  name} = node)
console.log(type)
console.log(name)
// console.log(node)


