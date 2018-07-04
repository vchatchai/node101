let mesg = "Hello world!"

console.log('startsWith :',mesg.startsWith("Hello"))
console.log('endsWith :',mesg.endsWith("!"))
console.log('includes :',mesg.includes("o"))

console.log('startsWith :',mesg.startsWith("o"))
console.log('endsWith :',mesg.endsWith("world!"))
console.log('includes :',mesg.includes("x"))

console.log('startsWith :',mesg.startsWith("o",4))
console.log('endsWith :',mesg.endsWith("o",8))
console.log('includes :',mesg.includes('o',8))

console.log("repeat :", "x".repeat(3))
console.log("repeat :", "hello".repeat(2))
console.log("repeat :", "abc".repeat(4))

var text = "hello1 hello2 hello3", 
    pattern = /hello\d\s?/,
    result = pattern.exec(text),
    globalPattern = /hello\d\s?/g,
    globalResult = globalPattern.exec(text),
    stickyPattern = /hello\d\s?/y,
    stickyResult = stickyPattern.exec(text);
console.log('text :',text)
console.log(`${pattern} :`,result)
console.log(`${globalPattern}:`, globalResult)
console.log(`${stickyPattern}:`, stickyResult)

console.log(pattern.lastIndex);         // 0
console.log(globalPattern.lastIndex);   // 14
console.log(stickyPattern.lastIndex);   // 14

// pattern.lastIndex = 1
// globalPattern.lastIndex = 1
// stickyPattern.lastIndex = 1


result = pattern.exec(text)
globalResult = globalPattern.exec(text)
stickyResult = stickyPattern.exec(text)
console.log("after set lastIndex")
console.log('text :',text)
console.log(`${pattern} :`,result)
console.log(`${globalPattern}:`, globalResult)
console.log(`${stickyPattern}:`, stickyResult)

console.log(pattern.lastIndex);         // 0
console.log(globalPattern.lastIndex);   // 14
console.log(stickyPattern.lastIndex);   // 14


console.log(`pattern.sticky`, pattern.sticky)