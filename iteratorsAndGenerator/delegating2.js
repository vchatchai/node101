function *createNumberIterator() {
    yield 1;
   let count = yield 2;
    return count;
}

function *createRepeatingIterator(count) {
    for(let i=0; i< count; i++){
        yield "repeat";
    }
}

function *createCombinedIteration() {
    let result = yield *createNumberIterator();
    yield *createRepeatingIterator(result);
}

var iterator = createCombinedIteration();

console.log(iterator.next());
console.log(iterator.next(2));
console.log(iterator.next(2));
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());