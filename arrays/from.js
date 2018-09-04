
function makeArray(arrayLike){
    var result = []
    for(var i= 0, len = arrayLike.length;i < len; i++ ){
        result.push(arrayLike[i])

    } 

    return result;
}

function makeArray2( arrayLike) {
    return Array.prototype.slice.call(arrayLike);
}


let test = [1,2,4,5,6]

console.log(makeArray(test))
console.log(makeArray2(test))
console.log(Array.from(test))