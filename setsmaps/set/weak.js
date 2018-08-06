let set = new WeakSet(),
key = {};
key2 = {key: 0}

//add the object to the set
set.add(key);
console.log(set.has(key)) //true


set.delete(key);
console.log(set.has(key))

set.add(key2)
set.add({key:1})
set.add({key:2})



console.log(set.has(key2))
console.log(set)