let set = Object.create(null)
set.foo = true;
//checking for existence
if(set.foo){
    //do something.
    console.log("set.foo")
}

let map = Object.create(null)
map.foo = "bar"
map[5] = "foo"
let key1= {},  key2={};

map[key1] = "foo2";



//retrieving a value 
let value = map.foo;

console.log(value);
console.log("map[\"5\"]",map["5"])
console.log("map[key2]",map[key2])