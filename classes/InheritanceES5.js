function Rectangle(length, width) { 
    this.length = length;
    this.width = width;   
}

Rectangle.prototype.getArea = function() { 
    return this.length * this.width;
}

function Square(length) { 
    Rectangle.call(this, length, length);
}

Square.prototype = Object.create(Rectangle.prototype, { 
    constructor: { 
        value:Square, 
        enumerable:true,
        writable: true,
        configurable: true
    }
});

var square = new Square(3);

console.log(square.getArea())
console.log(square instanceof Square);
console.log(square instanceof Rectangle);
console.log(Square.prototype)
console.log(Square.prototype)