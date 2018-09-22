function sum(...values){
    this.values = values;
    return this.values.reduce((previous, current) => previous+ current, 0  );
}

let sumProxy = new Proxy(sum, {
    apply:function(trapTarget,thisArg, argmentList){
        argmentList.forEach(element => {
            if(typeof element !== "number"){
                throw new TypeError("All arguments must be number");
            }
            
        });
        return Reflect.apply(trapTarget, thisArg, argmentList);
    },
     construct: function(trapTarget, argmentList){

        argmentList.forEach(
            element => { 
                if (typeof element !== "number"){
                    throw new TypeError("All arugments must be Number.");
                }
            }
        )
       return Reflect.construct(trapTarget, argmentList);
    }
});

console.log(sumProxy(1,2,3,4));

// console.log(sumProxy(1,2,"3",4));
// console.log(new sumProxy())
let instance = new sumProxy(1,2,3,4);
console.log(instance.values);

sumProxy(1,2,3,4);