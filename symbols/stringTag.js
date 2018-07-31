function Person(name){
    this.name = name;
}

Person.prototype[Symbol.toStringTag] = "Person"

let me = new Person("Nicholas")

console.log(me.toString())
console.log(Object.prototype.toString.call(me))