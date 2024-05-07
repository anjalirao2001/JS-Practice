// singleton
// Object.create


// object literal

const mySym = Symbol("key1")

const user = {
    name: 'John',
    "full name": "john desuja",
    [mySym]: "value for mySym",
    age: 25,
    location: "Bangalore"
}

// console.log(user.name)
console.log(user["name"])
console.log(user["full name"])
// console.log(user.mySym)
console.log(user[mySym])

user.name = "Priya"
// Object.freeze(user) //for frezzing object
user.name = "Anubhuti"

console.log(user)

user.greeting = function(){
    console.log("Hello JS user");
}
console.log(user.greeting());

user.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(user.greeting());
console.log(user.greeting2());