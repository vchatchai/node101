var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
  ];
  
  var admin = users.find(function(user){
      return user.admin
  })

  console.log(admin)

  var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
  ];
  
  var account = accounts.find(function(account){
      return account.balance === 12
  })

  console.log(account)

  var ladders = [
      {id: 1, height: 20},
      {id: 3, height: 25}
  ];

  let result = findWhere(ladders, {height: 25   });

 function findWhere(array, criteria) {
    return array.find(function(item){
        let keies = Object.keys(criteria)
        let result = keies.find(function(key){
            return item[key] !== criteria[key]
        }); 
        return !result ;
    });
}

console.log(result)
