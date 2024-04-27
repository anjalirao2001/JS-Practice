// primitive data types
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.5

const isLogedIn = false
const outsideTemp = null
let userEmail;
const anotherId = Symbol('123')
const anotherId2 = Symbol('123')

console.log(anotherId === anotherId2);

const bigNumber = 12345678901234567890n


// Reference (Non-primitive)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"];
let user = {
    name: 'John',
    age: 25,
    isLogedIn: true,
    email: 'john@gmail.com',
    address: {
        city: 'New York',
        state: 'NY'
    },
}

const myFunction = function()
{
    console.log("Hello")
}

console.log(typeof myFunction)



// *****************************************************

// Stack(Primitive), Heap(Reference,Non-primitive)

// Primitive data types are stored in stack
// Reference data types are stored in heap

let myYoutube = "connect with anjali"
let myYoutube2 = myYoutube

myYoutube = "connect with shaktiman"

console.log(myYoutube)
console.log(myYoutube2)

let user1 = {
    email: "user@google.com",
    upi: "user@ybl"
}

console.log(user1)

let user2 = user1

user2.email = "anjali@google.com"

console.log(user2)
