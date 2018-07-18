let colors = ['red', "green", `blue`]

let [firstColor, ...restColors] = colors

console.log(firstColor)
console.log(restColors.length)
console.log(restColors)

let [...restColors2] = [restColors[0],restColors[1],firstColor]

console.log(restColors2)

var clonedColors = colors.concat();


console.log(clonedColors)