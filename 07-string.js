const name = "Anjali"
const repoCount = 24


console.log(name + " " + repoCount + " Value" );

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Anjali')

console.log(typeof gameName);
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('j'))

const String1 = gameName.substring(0,3)
console.log(String1) 

const String2 = gameName.slice(-8,1)
console.log(String2)

const String3 = "        Anjali         "
console.log(String3)
console.log(String3.trim())

const url = "https://anjali.com/anjali%20rao"

console.log(url.replace('%20', '-'))

console.log(url.includes('anjali'))

const a = 'anjali-rao-rajput'
console.log(a.split('-'))