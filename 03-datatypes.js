"use strict"; // treat all JS code as newer version

// alert(3+3) we are using nodejs, not browser

// code readability should be high
console.log(3+3)

console.log("Anjali")

let name = "Anjali"
let age = 23
let isLogedIn = false

/* 
number => 2 to power 53
bigint
string => ""
boolean => true/false
null => empty value , standalone value
undefined => empty value, value that is not defined

object => {}
symbol => unique value
*/

console.log(typeof name) //string
console.log(typeof age) //number
console.log(typeof isLogedIn) // boolean

let a = null
console.log(typeof a) //object

let b
console.log(typeof b) //undefined