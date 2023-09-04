let scissors = 1;
let paper = 2;
let rock = 3;
let botPoints = 0;
let userPoints = 0;
let matchPoints = 5;

function randomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function match(pointsRequired){
    let i = 0;
    while(userPoints<pointsRequired && botPoints<pointsRequired ){
        i+=1
        game(i)
    }
    console.log("The match has ended on game " + i)
    console.log("And the results are")
    console.log("..................................")
    if(botPoints>userPoints){
        setTimeout(console.log("You lost the match :("), 5000)
    } else if(userPoints>botPoints){
        setTimeout(console.log("You won the match :)"), 5000)
    }
    console.log("The end score is " + userPoints + " : " + botPoints + " for you!")
    console.log("I hope you had fun!")
}
function game(gameNumber){
    let botweapon = randomInt(1,3);
    console.log("Game number " + gameNumber)
    // let userWeapon = parseInt(prompt("What weapon do you choose? 1 = Scissors 2 = Paper 3 = Rock. Please input 1, 2 or 3."))
    switch(userWeapon){
        case 1:
            console.log("You have selected scissors")
            break;
        case 2:
            console.log("You have selected paper")
            break;
        case 3:
            console.log("You have selected rock")
            break;
    }
    switch(botweapon){
        case 1:
            console.log("Your opponent has selected scissors")
            break;
        case 2:
            console.log("Your opponent has selected paper")
            break;
        case 3:
            console.log("Your opponent has selected rock")
            break;
    }
    if(userWeapon == botweapon) {
        console.log("It's a DRAW!")
    } else if(userWeapon == 1 && botweapon == 2){
        console.log("You WIN!")
        userPoints+=1
    } else if(userWeapon == 2 && botweapon == 3){
        console.log("You WIN!")
        userPoints+=1
    } else if(userWeapon == 3 && botweapon == 1){
        console.log("You WIN!")
        userPoints+=1
    } else if(userWeapon == 2 && botweapon == 1){
        console.log("Aww, you lost.")
        botPoints+=1
    } else if(userWeapon == 3 && botweapon == 2){
        console.log("Aww, you lost.")
        botPoints+=1
    } else if(userWeapon == 1 && botweapon == 3){
        console.log("Aww, you lost.")
        botPoints+=1
    }
    setTimeout(console.log("Currently, you have " + userPoints + " and your opponent has " + botPoints + " points"),10000)
}
// matchPoints = parseInt(prompt("How many points will be required for VICTORY?"))
match(matchPoints)
