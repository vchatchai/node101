var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(previous, trip){
    previous += trip.distance
    return previous;
},0)

console.log(totalDistance)


var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];
  
  var deskTypes = desks.reduce(function(previous,desk) {
      if('sitting' === desk.type){
        previous.sitting++
      }else if('standing' === desk.type){
        previous.standing++
      }
      return previous
  }, { sitting: 0, standing: 0 });

  console.log(deskTypes)


  var numbers = [1,1,,2,3,4,4]

    unique = numbers.reduce(function(previous, number){

        if(previous.length == 0){
            previous.push(number)
            return previous
        }


    var exist = previous.find(function(value){

        if(value === number){
            return true;
        }else{
            return false;
        }

    });

    if(!exist){
        previous.push(number)
    }

    return previous


  },[]);

  console.log(unique)