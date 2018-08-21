function Rectangle(length,width){
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function(){ 
    return this.length * this.width;
}

class Square extends Rectangle { 
    constructor(length) { 
        super(length, length)
    }
}

var x = new Square(3);
console.log(x.getArea());
console.log(x instanceof Rectangle)


function getBase() { 
    return Rectangle;
}

class Square2 extends getBase() {
    constructor(length) { 
        super(length, length)
    }
}

var x = new Square2(3);

console.log(x.getArea())
console.log(x instanceof Rectangle);


let SerializableMixin =  { 
    serialize() { 
        return JSON.stringify(this);
    }
};

let AreaMixin = { 
    getArea() { 
        return this.length * this.width;
    }
};

function mixin(... mixins) { 
    var base = function(){};
    Object.assign(base.prototype, ...mixins);

    return base;
}

class Square3 extends mixin(AreaMixin, SerializableMixin){
    constructor(length) {
        super();
        this.length = length;
        this.width = length;
    }
}

var x = new Square3(3);
console.log(x.getArea());
console.log(x.serialize());
