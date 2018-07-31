function Temperature(degrees){
    this.degrees = degrees
}

Temperature.prototype[Symbol.toPrimitive] = function(hint){
    console.log(hint);
    switch(hint){
        case "string":
            return this.degrees  +"\u00b0";//degrees symbol
        case "number":
            return this.degrees;
        case "default":
            return this.degrees + " degrees";
    }
};


let freezing = new Temperature(32)


console.log(freezing + "!");
console.log(freezing/2);
console.log(String(freezing));
console.log(freezing);