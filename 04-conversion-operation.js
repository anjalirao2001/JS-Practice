let score = "33abc"

console.log(typeof score) //String
// console.log(typeof(score)) //String
let valueInNumber = Number(score)
console.log(typeof(valueInNumber)) //number
console.log(valueInNumber) //NaN


let a = null
console.log(typeof a) //object
let value = Number(a)
console.log(typeof(value)) //number
console.log(value) //0


let b = undefined
console.log(typeof b) //undefined
let value1 = Number(b)
console.log(typeof(value1)) //number

let c = true
console.log(typeof c) //undefined
let value2 = Number(c)
console.log(typeof(value2)) //number


/*
"33" => 33
"33abc" => NaN
true => 1 ; false => 0
*/

let isLogedIn = 1
let isBoolean = Boolean(isLogedIn)
console.log(typeof(isBoolean)) //boolean
console.log(isBoolean) //true



let user1 = " "
let isUser = Boolean(user1)
console.log(isUser) //true


let user2 = ""
let isUser1 = Boolean(user2)
console.log(isUser1) //false


let user3 = "Anjali"
let isUser2 = Boolean(user3)
console.log(isUser2) //true


/*
1 => true; 0 = false
" " => true; "" => false
"Anjali" => true
*/


let no = 33
let isUser3 = String(no)
console.log(isUser3) //true
console.log(typeof isUser3)


// *********** OPERATION ***********

let x = 3
let negValue = -x
console.log(negValue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2**2)
console.log(2%2)

let str1 = "Hello"
let str2 = " Anjali"
let str3 = str1 + str2
console.log(str3)


// *********** INCREMENT ***********

let i = 1
i++
console.log(i)

i--
console.log(i)

console.log("1" + 2)
console.log(1 + "2")

console.log(1 + 2 + "3")
console.log("1" + 2 + 3)

console.log(1 + 2 + "3" + 4)
console.log(1 + 2 + "3" + 4 + 5)

console.log(1 + 2 + "3" + 4 + 5 + 6)

console.log(+true) //1
console.log(+false) //0

console.log(+"") //0

console.log(+"123") //123
console.log(+"123abc") //NaN

 console.log(+"abc123") //NaN

console.log(+"123abc456") //NaN

console.log(+"123abc456" + 789) //NaN

console.log(+"123abc456" - 789) //NaN