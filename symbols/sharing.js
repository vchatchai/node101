let uid = Symbol.for("uid");
let object = {};

object[uid] = "12345";

console.log(object[uid]);
console.log(uid)


let uid2 = Symbol.for("uid");
console.log(uid === uid2)
console.log(object[uid2])
console.log(uid2)

let uid3 = Symbol("uid")

console.log(Symbol.keyFor(uid))
console.log(Symbol.keyFor(uid2))
console.log(Symbol.keyFor(uid3))
console.log(uid === uid3)