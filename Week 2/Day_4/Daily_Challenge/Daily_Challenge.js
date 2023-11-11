// let userinput = prompt("Enter different words seperated with ',': ");
// let wordlist = userinput.split(',').map(word => word.trim());
// console.log(wordlist);

// function createFrame(words){
//     let maxlength = 0;
//     words.forEach(function(word) {
//         if (word.length > maxlength){
//             maxlength = word.length;
//             // console.log(maxlength)
//         }
//     })

// }
// // create the top border
// let border = "*".repeat(maxlength + 4);
// console.log(border);
// console.log(border.length)

// // create the frame with words
// words.forEach((word) =>){
//     let spaces = " ".repeat(maxlength - word.length);
//     console.log(`* ${word}${spaces} *`);
// }




// prompt the user for words
let userinput = prompt("Enter words separated by commas")
let wordArray = userinput.split(",");
// map(map => word.trim());

console.log(wordArray);

function createFrame(words){
    // finding the length of the longest word
    let maxlength = 0;
    words.forEach(function(word) {
        if (word.length > maxlength){
            maxlength = word.length;
            // console.log(maxlength)
        }
        
    });


// create the top border 
let border = "*".repeat(maxlength + 4);
console.log(border);
// console.log(border.length)

// create the frame with words
words.forEach((word) =>{
    let spaces = " ".repeat(maxlength - word.length);
    console.log(`* ${word}${spaces} *`)});

    // create the bottom border 
    console.log(border);
}

createFrame(wordArray);