let node = {
    type: "Identifier",
    name: "Foo",
    loc: {
        start: {
            line: 1,
            column: 1
        },
        end:{
            line: 1,
            column: 4
        }
    }
}

let {loc: {start, end}} = node;


console.log(loc)
console.log(start)
console.log(end)