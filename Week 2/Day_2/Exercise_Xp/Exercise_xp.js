// Exercise1
let x = 5;
let y = 2;

if(x > y){
    alert("X is the biggest number")
} else{
    alert("Y is the samllest number")
}

// Exercise2
let newdog = "Chihuahua"
console.log(newdog.length);
console.log(newdog.toUpperCase());

if(newdog == Chichuahua){
    alert("I love Chihuahua, it’s my favorite dog breed");
} else{
    alert("I dont care , I prefer cats");
}

// Exercise3
let userinput = prompt("Please enter a number : ");

let number = parseInt(userinput);

if (!isNaN(number)) {
    if (number % 2 == 0) {
        alert(number + " is an even number");
    } else {
        alert(number + " is an odd number");
    }
}

// Exercise4
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
if (users.length === 0) {
    console.log("No-one is online");
} else if (users.length === 1) {
    console.log(users[0] + " is online");
} else if(users.length === 2) {
    console.log(users[0] + " and " + users[1] + " are online");
} else if(users.length > 2) {
    console.log(users[0] + ", " + users[1] + " and " + (users.length - 2) + " more are online");
}



