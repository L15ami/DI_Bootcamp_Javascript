debugger;
let driver = prompt("How old are you? :")

if (driver <= 18 ){
    alert("sorry, you too young to drive!")
} else{
    alert("you are old enough to drive! ");}

switch(driver){
    case driver <= 18:
        console.log ("you too young");
        break;
    case driver >= 18:
        console.log("you can drive")
}

let person = {
    username : "Amitesh",
    password : "loll"
}

let database = [person]
console.log(database)

let newsfeed = [
    {
    username:"ram",
    timeline: 123},
    {username:"sam",
    timeline: 456},
    {username: "tom",
    timeline : 789}
]
console.log(newsfeed)

