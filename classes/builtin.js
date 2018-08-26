
class MyArray extends Array { 

    reset(){ 
        this.length = 0
    }
}

var colors   = new MyArray();
colors[0] = 'red';
colors[1] = `green`;
colors[2] = "blue";
colors[3] = "black";
console.log(colors.length)
console.log(colors)

stickColors = colors.slice(1,3)
console.log(stickColors)

colors.reset()

console.log(colors.length)
console.log(colors)
console.log(stickColors instanceof MyArray)


