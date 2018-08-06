let map = new Map()

map.set("name", "Nicholas");
map.set("age", 25)

console.log("map.get('Name)",map.get("Name"))
console.log('map.size',map.size);
console.log('map.has("name")',map.has("name"));
console.log('map.get("name")',map.get("name"));

console.log('map.has("age")',map.has("age"));
console.log('map.get("name")',map.get("name"));

console.log("map.entries")
for  (v of map.entries()) {
    console.log('k,v',v)
}

for (k of map.keys()) { 
    console.log(("key", k))
}

for (v of map.values()) {
    console.log("value", v)
}

map.delete("name");
console.log('map.delete("name")');
console.log('map.has("name")',map.has("name"));
console.log('map.get("name")',map.get("name"));
console.log('map.size',map.size);

map.clear();
console.log('map.clear()');
console.log('map.has("name")',map.has("name"));
console.log('map.get("name")', map.get("name"));
console.log("map.has('age')",map.has('age'));
console.log('map.get("age")',map.get("age"));
console.log("map.size",map.size)

 