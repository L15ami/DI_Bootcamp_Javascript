// // Exercise 1 : List Of People

// const people = ["Greg", "Mary", "Devon", "James"];
// console.log(people[0]);

// people[3] = "Jason"
// console.log(people);

// people.push("Amitesh");
// console.log(people);

// console.log(people.indexOf('Mary'));

// let result = people.slice(1, 5);
// console.log(result);

// console.log(people.indexOf("Foo"));
// // The index of "Foo" returns -1 because "Foo" 
// // is not present in the array, and when an element
// //  is not found in an array, the indexOf method returns -1.

// let last = people[people.length - 1];
// console.log(last);

// for (let names = 0; names < people.length; names++){
//     console.log(people[names]);
// }

// for ( let name = 0; name < people.length; name++){
//     console.log(people[name]);
//     if (people[name] === "Devon") {
//         break; // Exit the loop when "Devon" is encountered
//     }
// }

// Exercise 2 : Your Favorite Colors
let colors = ["Red","Blue","yellow","Black","Green"];

for (let color = 0; color < colors.length; color++){
    console.log(`My #${color + 1} choice is ${colors[color]}`);
}

let suffix = ["st","nd","rd","th","th"]

for (let rank = 0; rank < suffix.length; rank++){
    console.log(`My ${rank + 1}${suffix[rank]} choice is ${colors[rank]}`)
}
