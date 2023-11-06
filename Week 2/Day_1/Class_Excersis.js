let addressNumber = 15
let addressStreet = "Tamil Temple,Rd Goodlands"
let country = "Mauritius"

// console.log('I live '+ "at " + addressStreet + addressNumber + ' in ' + country)
console.log(`I live at ${addressStreet} ${addressNumber} in ${country}`)

let year = 1998
let futur = 2028
let age = (futur - year)

console.log(age)
console.log(`I will be ${age} years old in ${futur}.` )

// Excercise 3

let animals = ["Cat", "Dog", "Fish", "Rabbit", "Cow"]
console.log(animals.slice(1,2));
// OR // console.log(animals[1]);
console.log(animals.splice(3,1,"Horse"));
console.log(animals);
console.log(animals.length);