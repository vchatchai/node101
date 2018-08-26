let person = ((name) => {
    return {
        getName: function(){
            return name
        }
    }
})("Chatchai")

console.log(person.getName())