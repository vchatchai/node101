var text = "𠮷";

// var normalized = values.map(function(text) {
//     return text.normalize();
// });

// normalized.sort(function(first, second) {
//     if (first < second) {
//         return -1;
//     } else if (first === second) {
//         return 0;
//     } else {
//         return 1;
//     }
// }); 

// normalized(text)


console.log("NFC",text.normalize("NFC"))
console.log("NFD",text.normalize("NFD"))
console.log("NFKC",text.normalize("NFKC"))
console.log("NFKD",text.normalize("NFKD"))