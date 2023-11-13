// // Exercise 1 : Users
// // Retrieve the div and console.log it
// let div = document.getElementById("container").innerHTML;
// console.log(div);

// // Change the name “Pete” to “Richard”
// let PeteElement = document.querySelectorAll(".list li")
//     for (let user of PeteElement ) {
//         if (user.innerText === "Pete"){
//             user.innerText = "Richard"
//         }
//     }

//     // Delete the <li> that contains the text node “Sarah”.
// let SaraElement = document.querySelectorAll(".list li")
//     for (let user of SaraElement ) {
//         if (user.innerText === "Sarah"){
//             user.remove()
//         }
//     }


//     // Change each first name of the two <ul>'s to my name.
// let ul = document.querySelectorAll("ul")
// for (let user of ul ) {
//     user.firstElementChild.innerText = "Amitesh"
// }

// let ulname = document.querySelectorAll(".list")
// for (let ul of ulname){
//     ul.classList.add("Student_list");
//     if (ul === ulname[0]){
//         ul.classList.add("University", "Attendance");
//     }
// }


// // Exercise 2 : Users And Style
// let divElement = document.querySelector("div")
// divElement.style.backgroundColor = "lightblue"
// divElement.style.padding = "10px"
// document.body.style.fontSize = "50px"

// let John = document.querySelector("ul li:first-child")
// John.style.display = "none"

// let Pete = document.querySelector("ul li:last-child")
// Pete.style.border = "10px solid"

// if (divElement.style.backgroundColor === "lightblue"){
//     let users = Array.from(document.querySelectorAll("li")).map(li => li.textContent).join(" and ");
//     alert("hello " + users)
// }



// // Exercise 3 : Change The Navbar
// let Navbar = document.getElementById("navBar");
// Navbar.setAttribute("id", "socialNetworkNavigation")

// let newli = document.createElement("li");
// let newtext = document.createTextNode("logout");
// newli.appendChild(newtext);
// let ul = document.querySelector("ul")
// ul.appendChild(newli)

// let first_list = ul.firstElementChild
// let last_list = ul.lastElementChild
// console.log(first_list.textContent)
// console.log(last_list.textContent)



// // Exercise 4 : My Book List
// let allBooks = [
//     {
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         image: "https://images.unsplash.com/photo-1699251391796-9c87cfdba2ab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         alreadyRead: true
//     },
//     {
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         image: "https://images.unsplash.com/photo-1699354511301-ec6be76db29f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         alreadyRead: false
//     }
// ];
// function renderbook() {
//     let div = document.querySelector(".listBooks")
//     let table = document.createElement("table")
//     allBooks.forEach((book) => {
//         let row = document.createElement("tr");
//         let title = document.createElement("td");
//         let author = document.createElement("td")

//         title.textContent = book.title + " written by " + book.author;
//         author.innerHTML = `<img src = "${book.image}" width = "100px">`;

//         if (book.alreadyRead) {
//             row.style.backgroundColor = "green";
//             } else {
//             row.style.backgroundColor = "red"
//         };

//         row.appendChild(title);
//         row.appendChild(author);
//         table.appendChild(row);
//         });

//         div.appendChild(table);

//     } 
    
//     renderbook()


