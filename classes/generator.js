class MyClass  { 
    *createIterator() { 
        yield 1 ;
        yield 2 ;
        yield 3 ;
    }
}

let instance = new MyClass() ;
let iterator = instance.createIterator();


for (v of iterator) {
    console.log(v)
}

class Collection { 
    constructor() { 
        this.items = [];
    }

    *[Symbol.iterator]() { 
        for(let x of this.items) {
            yield x
        }
        // yield  *this.items;
    }
}

var collection = new Collection();
collection.items.push(1);
collection.items.push(2);
collection.items.push(3);

console.log(collection.items)
for ( let x of collection) { 
    console.log(x);
}