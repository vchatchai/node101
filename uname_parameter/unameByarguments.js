function pick(object) {
    let result = Object.create(null)
    //start  at the second parameter
    for(let i = 1, len = arguments.length; i < len; i++) {
        console.log(arguments[i],object[arguments[i]])
        result[arguments[i]] = object[arguments[i]]
    }

    return result
}

let book = {
    title: "Understanding ECMAScript 6",
    author: "nicholas C. Zakas", 
    year: 2015
};

let bookData = pick(book, "author", "year");


console.log(book)
console.log(bookData)
