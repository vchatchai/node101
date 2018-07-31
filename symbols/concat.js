let color1 = ["red","green"],
    color2 = color1.concat(["blue", "black"],"brown");

console.log(color2.length)
console.log(color2)


let collection = {
    0: "hello",
    1: "world",
    length: 2, 
    [Symbol.isConcatSpreadable]: true
};
let messages = ["Hi"].concat(collection);

console.log(messages.length);
console.log(messages);