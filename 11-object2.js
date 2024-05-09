/*

// const tinderuser = new Object() //singleton object
const tinderuser = {} //non-singleton object
console.log(tinderuser);

tinderuser.name="Anjali"
tinderuser.id="1234"
console.log(tinderuser);



const regular ={
    email:"abc@gmail.com",
    fullname: {
        username:{
            firstname:"anjali",
            lastname:"rao"
        }
    }
}

// console.log(regular.fullname);
// console.log(regular.fullname.username.firstname);


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

// const obj3 = {obj1,obj2}
const obj4 = Object.assign({},obj1,obj2,obj3)
console.log(obj4)

const obj5 = {...obj1,...obj2} /// ... spread operator
console.log(obj4)

const user = [
    {
        id:1,
        name:"abc"
    },
    {
        id:2,
        name:"abc"
    },
    {
        id:3,
        name:"abc"
    },
]


console.log(user[1].name)
console.log(tinderuser)

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLogged'));


*/
//*********************************/

const course ={
    coursename: "js",
    price : "999",
    courseinstructior: "hitesh"
}

// course.courseinstructor

const {courseinstructior : inst} = course

// console.log(courseinstructior)
console.log(inst)


// json
// {
//     "name" : "anjali",
//     "course" : "js",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]