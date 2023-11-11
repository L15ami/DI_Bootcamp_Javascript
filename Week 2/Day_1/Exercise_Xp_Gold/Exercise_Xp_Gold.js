// Exercise 1 : Favorite Color

let sentence = ["my","favorite","color","is","blue"];
let newSentence = sentence.join(" ");
console.log(newSentence)

// Exercise 2 : Mixup

let str1 = "mix";
let str2 = "pod";

let swapstr1 = str2.slice(0, 2) + str1.slice(2);
let swapstr2 = str1.slice(0, 2) + str2.slice(2);

let concatenatedStr = swapstr1 + " " + swapstr2;

console.log(concatenatedStr);

// Exercise 3 : Calculator

// user_input = prompt("Enter your first number : ");
// let first_num = parseInt(user_input)

// user_input = prompt("Enter your second number : ");
// let second_num = parseInt(user_input)

// total_num = (first_num + second_num)
// alert("The sum of both numbers are : " + total_num );

// Part 6

user_input = prompt("Enter your first number : ");
let first_num = parseInt(user_input)

user_input3 = prompt("Enter your operator: +, -, *, / ");
let operator = user_input3

user_input2 = prompt("Enter your second number : ");
let second_num = parseInt(user_input2)

let subtraction = first_num - second_num
let addition = first_num + second_num
let multiplication = first_num * second_num
let division = first_num / second_num

alert("subtraction: " + first_num + " - " + second_num + " = " + subtraction);
alert("addition: " + first_num + " + " + second_num + " = " + addition);
alert("multiplication: " + first_num + " * " + second_num + " = " + multiplication);
alert("division: " + first_num + " / " + second_num + " = " + division);


