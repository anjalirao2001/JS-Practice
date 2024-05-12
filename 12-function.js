/*
function add(num1,num2)
{
    console.log(num1+num2);
}

const result = add(3,6)
console.log("Result: ",result);

*/

function add(num1,num2)
{
   let result = num1+num2
   return result
}

const result = add(3,6)
console.log("Result: ",result);

function message(username)
{
    return  `${username} just loged in`
}

console.log(message("Anjali"))