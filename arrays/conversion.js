function translate(){
    console.log(arguments)
    return Array.from(arguments,(value)=>value + 1);
}

let number = translate(1,2,3)

console.log(number)

let helper = { 
    diff: 1,
    add(value) {
        return value +this.diff
    }
};

function translate2(){
    return Array.from(arguments, helper.add, helper)
}


let number2 = translate2(1,2,3)

console.log(number2)