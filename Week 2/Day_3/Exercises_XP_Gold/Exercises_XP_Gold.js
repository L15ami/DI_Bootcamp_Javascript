// Exercise 1 : Divisible By Three

let numbers = [123, 8409, 100053, 333333333, 7]
for (let num = 0; num <numbers.length; num++) {
    let divide_by_three = numbers[num] % 3 === 0;
    console.log(divide_by_three);
}


// Exercise 2 : Attendance
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }


let studentname = prompt("What is your name?");
// Check if the entered name is in the guestList object
if (studentname in guestList) {
    let country = guestList[studentname]
    console.log(`Hi!! I'm ${studentname}, and I'm from ${country}`)
} else{
    console.log("Hi! I'm a guest.")
}


// Exercise 3 : Family
