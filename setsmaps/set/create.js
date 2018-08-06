let  set = new Set()
set.add(5);
set.add("5");

console.log(set)
console.log(set.size)

let key1 = {}, key2= {};

set.add(key1);
set.add(key2);
set.add(5)
set.add(6)


console.log(set)
console.log(set.size)


let set2 = new Set([1,2,3,4,5,5,5,5,5,5])
console.log(set2)
console.log("has:",set2.has(4))
set2.delete(3)
console.log("delete",set2)

set.forEach( function(value,key, ownerSet,y){
    console.log(value,key, ownerSet,y)
})


let processor = {
    output(value){
        console.log("output",value)
    },
    process(dataSet) {
        dataSet.forEach(function(value){
            this.output(value)
        },this);
        dataSet.forEach((value) =>  this.output(value + 1))
    }
}

processor.process(set)