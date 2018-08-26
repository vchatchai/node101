function  *createIterator(){
    let first = yield 1;
    console.info('first',first);
    let second = yield first + 2;
    console.info('second',second);
    let x = yield second + 3
    console.info("x",x);
    yield x
    console.info("done");
}

let iterator = createIterator();

console.log(iterator.next());
console.log(iterator.next(4));
console.log(iterator.next(5));
console.log(iterator.next(1));
console.log(iterator.next());