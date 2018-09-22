class AbstractNumbers {
    constructor(...values){
        console.log(new.target);
        if (new.target === AbstractNumbers){
            throw new TypeError("This function must be inherited from.");
        }
        this.values = values;
    }
}

class Numbers extends AbstractNumbers {  }


let instance = new Numbers(1,2,3,4);
console.log(instance.values);

new AbstractNumbers(1,2)

