let person  = {
    getGreeting() {
        return "Hello"
    }
}

let friend = {
    getGreeting() {
        return super.getGreeting() + ", hi!"
    }
}

Object.setPrototypeOf(friend, person)

let relative = Object.create(friend)
console.log(person.getGreeting())
console.log(friend.getGreeting())
console.log(relative.getGreeting())