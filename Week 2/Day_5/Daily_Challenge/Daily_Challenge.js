let startingBottles = parseInt(prompt("Enter a number: "))

function BottleOfBeer (number){
    for (let i = number; i > 0; i--){
        let bottleChecker = i;
        let nextBottle = i - 1;
        if(bottleChecker === 0){
        console.log("No Bottle left!")
        }else if (bottleChecker === 1){console.log(`${bottleChecker} Bottle`);}
        
        else{
            console.log(`${bottleChecker} Bottles`)
        }if(nextBottle === 0){
            console.log("Pass it around, no bottle left ")
        } else if (nextBottle === 1)
        {
            console.log(`take one down pass around, ${nextBottle} bottles left on wall`)
        }else{console.log(`take one bottle pass around,${nextBottle} bottles left on wall`)

        }

        }
    }
    



BottleOfBeer(startingBottles)