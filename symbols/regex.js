let hasLengthOf10 = {
    [Symbol.match]: function(value){
        return value.length === 10?[value]:null;
    },
    [Symbol.replace]: function(value,replacement){
        return value.length === 10?replacement:value;
    },
    [Symbol.search]: function(value){
        return value.length === 10?0:-1;
    },
    [Symbol.split]: function(value){
        return value.length === 10? ["",""]:[value];
    }
};

let message1 = "Hello world",
    message2 = "Hello John";

let match1 = message1.match(hasLengthOf10);
    match2 = message2.match(hasLengthOf10);

console.log(match1);
console.log(match2);

let replace1 = message1.replace(hasLengthOf10,"Howdy!"),
    replace2 = message2.replace(hasLengthOf10, "Howdy!");

console.log(replace1);
console.log(replace2);

let search1 = message1.search(hasLengthOf10),
    search2 = message2.search(hasLengthOf10);

console.log(search1);
console.log(search2);

let split1 = message1.split(hasLengthOf10),
    split2 = message2.split(hasLengthOf10);

console.log(split1);
console.log(split2);
