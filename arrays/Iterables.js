let numbers = {
    *[Symbol.iterator]() { 
        yield 1;
        yield 2;
        yield 3;
    }
};

let number2 = Array.from(numbers, (value)=> value + 1)
console.log(number2)