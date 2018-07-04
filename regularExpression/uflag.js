var text = "𠮷";

console.log(text.length)
console.log(/^.$/.test(text))
console.log(/^.$/u.test(text))
console.log(/./ .test(text))