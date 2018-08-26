function createObject(classDef){
    return new classDef();
}


let obj= createObject(class{
    sayHi(){ 
        console.log("Hi!");
    }
});

obj.sayHi();

let person = new class { 
    constructor(name) {
        this.name =name;
    }
    sayName() {
        console.log(this.name);
    }
}("Nicholas");

person.sayName()
