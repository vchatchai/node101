class PersonClass  { 
    constructor(name) { 
        this.name = name
    }

    sayName() { 
        console.log(this.name);
    }

    static create(name) {
        return new PersonClass(name);
    }
}

let person = PersonClass.create("Nicholas");
person.sayName()