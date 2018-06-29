var text = "𠮷";

console.log(text.length);
console.log(/^.$/.test(text))
console.log(text.charAt(0))
console.log(text.charAt(1))
console.log(text.charCodeAt(0))
console.log(text.charCodeAt(1))
console.log(text.codePointAt(0))
console.log(String.fromCodePoint(134071))
