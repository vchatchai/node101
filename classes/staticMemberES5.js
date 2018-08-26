function PersonType(name) { 
    this.name = name;
}

PersonType.create= function(name) { 
    return new PersonType(name);
}


PersonType.prototype.sayName = function() { 
    console.log(this.name);
};

var person  = PersonType.create("Nicholas");

console.log(person)