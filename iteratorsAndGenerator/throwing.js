function *createIterator(){
    let first = yield 1;
    let second = yield first + 2;
    yield second + 3;
}


let iterator = createIterator();
console.log(iterator.next());
console.log(iterator.next(4));
console.log(iterator.throw(new Error("Boom")));
console.log(iterator.next());