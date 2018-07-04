function codePointLength(text){
    var result = text.match(/[\s\S]/gu)
    console.log(`result ${result}`)
    return result ? result.length :0 ;
}


console.log(codePointLength("abc"))
console.log(codePointLength("𠮷bc"))