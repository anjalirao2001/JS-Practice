const accountId = 144553
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;


// accountId = 2   #Constant cant be changed (Not allowed)
console.log(accountId)

// this will print all the variable in table
console.table([accountId, accountEmail, accountPassword, accountCity])


/*
Multi-Line comment

prefer not to use Var because of issue in block scope and functional scope
*/

// this will print undefined
console.log(accountState)