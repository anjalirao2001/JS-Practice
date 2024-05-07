/*

// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);
// Array methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr);

// console.log(myArr. includes (9));
// console.log(myArr.indexOf(3));
// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3)
// console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice (1,3)
console.log("C", myArr);
// console.log(myn2);


*/

let hero1 = ["thor","ironman","spiderman"]
let hero2 = ["spiderman","flash","batman"]
let hero3 = hero1.concat(hero2)
console.log(hero3);
const all_hero = [...hero1,...hero2]
console.log(all_hero);

const arr1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const arr2 = arr1.flat(Infinity)
console.log(arr2);

console.log(Array.isArray("Hitesh")) //false
console.log(Array.from("Hitesh")) 
console.log(Array.of(arr1,arr2))

