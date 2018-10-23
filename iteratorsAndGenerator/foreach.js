var sleep = require('thread-sleep');

let colors = ['red','blue','green'];



colors.forEach( function(color){
    console.log(color)
})


let numbers = [1,2,3,4,5]
let sum = 0  
numbers.forEach( number => {
    sum+=number
})
console.log(sum)

numbers.forEach( t => {
    
    sleep(1000 - (t * 100))
    console.log("foreach", t)
})




var posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
  ];

posts.forEach(function(post){
    console.log(post)
})

var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
  ];
  var areas = [];
  
  images.forEach(function(image){
     areas.push(image.height*image.width) 
  });
  console.log(areas)