let map = new Map();
map.set("tittle", "Understanding ES6")
map.set("year", 2016)

let key1 = {};
let key2 = {};
map.set(key1, 5)
map.set(key2, 42)


console.log(map.get("tittle"))
console.log(map.get("year"))
console.log(map.get(key1))
console.log(map.get(key2))
console.log(map)

