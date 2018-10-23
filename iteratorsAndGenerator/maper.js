
let number = [1,2,3]
let double = []

double= number.map( i => {return i *1})
console.log(double)


let cars  = [
    {model: 'Buick', price: 'CHEAP'},
    {model: 'Camaro', price:'expensive'}
];

var prices = cars.map(function(car){
    return car.price;
})

console.log(prices)

var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
  ];
  
  var heights = images.map(function(image){
      return image.height
  })

console.log(heights)


var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
  ];
  
  var speeds = trips.map(function(trip){
      return trip.distance/trip.time
  })

console.log(speeds)


var plants = [{color: 'red'}, {color:'blue'},{color:'yellow'}]
colors = pluck(plants,'color')
console.log(colors)

function pluck(array, property) {
    return array.map(function(object){
        return object[property]
    })
}