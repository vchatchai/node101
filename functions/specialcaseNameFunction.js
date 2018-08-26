var doSomething = function doSomethingElse(){

}

var person = {
    get firstName(){
        return "Nicholas"
    },

    sayName: function(){
        console.log(this.name)
    }
}

console.log(doSomething.bind().name)
console.log(person.sayName.name)

var descriptor = Object.getOwnPropertyDescriptor(person,"firstName")
console.log(descriptor.get.name)