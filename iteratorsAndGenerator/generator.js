//generator 
function *createIterator(){
    yield 1;
    yield 2;
    yield 3;
}


//generators are called like regular functions but return an iterator
let iterator =createIterator();


console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function *createIterator2(items){
    for(let i=0; i < items.length; i++) {
        yield items[i];
    }
}

 iterator = createIterator2([1,2,3]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log(iterator.next());
