class Rectangle { 
    constructor(length, width) {
        this.length = length
        this.width = width
    }

    getArea() { 
        return this.length * this.width
    }

    static create(length, width) { 
         return new Rectangle(length, width)
    }
}

class Square extends Rectangle { 
    constructor(length) {
        super(length, length);
    }

    //override and shadow
    getArea() { 
        return super.getArea()
    }
}

var square = new Square(3);



console.log(square.getArea());
console.log(square instanceof Square);
console.log(square instanceof Rectangle);

var rect = Square.create(3,4);
console.log(rect instanceof Rectangle);
console.log(rect.getArea());
console.log(rect instanceof Square);