let PersonClass = class { 
     constructor(name) {
         this.name = name;
     }

     sayName() {
         console.log(this.name);
     }
};

let person = new PersonClass("Nicholas");
person.sayName();

console.log(person instanceof PersonClass);
console.log(person instanceof Object);

console.log(typeof PersonClass);
console.log(typeof PersonClass.prototype.sayName);

