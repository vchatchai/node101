function pick(object, ...keys){
    let result = Object.create(null)

    for(let i = 0, len = keys.length; i < len; i++){
        result[keys[i]] = object[keys[i]]
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
