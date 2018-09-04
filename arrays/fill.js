let numbers = [1,2,3,4];
numbers.fill(1);


console.log(numbers.toString());

numbers.fill('x');
console.log(numbers);

numbers.fill(1,2);
console.log(numbers);

numbers.fill(0,-1);
console.log(numbers);


numbers.fill(2,1,2);
console.log(numbers);