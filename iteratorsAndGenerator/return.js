function *createIterator() {
    yield 1 ;
    return 0 ;
    yield 2 ;
    yield 3;

}


let iterator = createIterator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


let iterator2 = createIterator();
for (let i  of iterator2) {
    console.log(i)
}