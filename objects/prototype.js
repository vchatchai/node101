let person = {
    getGreeting(){
        return "Hello"
    }
}
let dog = {
        getGreeting(){
            return "Woof"
        }
    }
let friend = Object.create(person)



console.log(friend.getGreeting())
console.log(Object.getPrototypeOf(friend) === person)
console.log(friend)
Object.setPrototypeOf(friend, dog)
console.log(friend.getGreeting())
console.log(Object.getPrototypeOf(friend) === dog)
console.log(friend)

friend = {
    getGreeting() {
        return super.getGreeting() + ", hi!";
    }
}



//set prototype to person
Object.setPrototypeOf(friend, person)
console.log(friend.getGreeting())
console.log(Object.getPrototypeOf(friend) === person)

//set prototype to dog
Object.setPrototypeOf(friend, dog)
console.log(friend.getGreeting())
console.log(Object.getPrototypeOf(friend) === dog)