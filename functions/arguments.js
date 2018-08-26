function maxArgs(first, second = 'c'){
    console.log('arguments',arguments.length)
    console.log(first,arguments[0],first === arguments[0])
    console.log(second,arguments[1],second === arguments[1])
    first = "c"
    second = "d"
    console.log(first,arguments[0],first === arguments[0])
    console.log(second,arguments[1],second === arguments[1])

}

maxArgs('a',"b")


maxArgs('a')