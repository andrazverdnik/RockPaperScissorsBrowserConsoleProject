let scissors = 1;
let paper = 2;
let rock = 3;
let botPoints = 0;
let userPoints = 0;
let matchPoints = 5;
let battleRes = document.getElementById("battleResText")
let battleResRep = document.getElementById("battleResRep")
const rockBtn = document.getElementById("rockBtn")
const paperBtn = document.getElementById("paperBtn")
const scissorsBtn = document.getElementById("scissorsBtn")

rockBtn.addEventListener("click", () => {
    rockBtn.classList.add("buttonPressed")
    rockBtn.classList.remove("button")
    setTimeout(() => {
        rockBtn.classList.remove("buttonPressed")
        rockBtn.classList.add("button")
    }, 250)
    setTimeout(() => {
        game(3)
    }, 100)
})

paperBtn.addEventListener("click", () => {
    paperBtn.classList.add("buttonPressed")
    paperBtn.classList.remove("button")
    setTimeout(() => {
        paperBtn.classList.remove("buttonPressed")
        paperBtn.classList.add("button")
    }, 250)
    setTimeout(() => {
        game(2)
    }, 100)
})

scissorsBtn.addEventListener("click", () => {
    scissorsBtn.classList.add("buttonPressed")
    scissorsBtn.classList.remove("button")
    setTimeout(() => {
        scissorsBtn.classList.remove("buttonPressed")
        scissorsBtn.classList.add("button")
    }, 250)
    setTimeout(() => {
        game(1)
    }, 100)
})


function randomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// function match(pointsRequired){
//     let i = 0;
//     while(userPoints<pointsRequired && botPoints<pointsRequired ){
//         i+=1
//         game(i)
//     }
//     console.log("The match has ended on game " + i)
//     console.log("And the results are")
//     console.log("..................................")
//     if(botPoints>userPoints){
//         setTimeout(console.log("You lost the match :("), 5000)
//     } else if(userPoints>botPoints){
//         setTimeout(console.log("You won the match :)"), 5000)
//     }
//     console.log("The end score is " + userPoints + " : " + botPoints + " for you!")
//     console.log("I hope you had fun!")
// }
function game(userWeapon){
    let botweapon = randomInt(1,3);
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
            battleResRep.textContent = "Your opponent has selected scissors"
            console.log("Your opponent has selected scissors")
            break;
        case 2:
            battleResRep.textContent = "Your opponent has selected paper"
            console.log("Your opponent has selected paper")
            break;
        case 3:
            battleResRep.textContent = "Your opponent has selected rock"
            console.log("Your opponent has selected rock")
            break;
    }
    if(userWeapon == botweapon) {
        battleRes.textContent = "It's a DRAW!"
    } else if(userWeapon == 1 && botweapon == 2){
        battleRes.textContent = "You WIN!"
        userPoints+=1
    } else if(userWeapon == 2 && botweapon == 3){
        battleRes.textContent = "You WIN!"
        userPoints+=1
    } else if(userWeapon == 3 && botweapon == 1){
        battleRes.textContent = "You WIN!"
        userPoints+=1
    } else if(userWeapon == 2 && botweapon == 1){
        battleRes.textContent = "You loose"
        botPoints+=1
    } else if(userWeapon == 3 && botweapon == 2){
        battleRes.textContent = "You loose."
        botPoints+=1
    } else if(userWeapon == 1 && botweapon == 3){
        battleRes.textContent = "You loose."
        botPoints+=1
    }
    setTimeout(console.log("Currently, you have " + userPoints + " and your opponent has " + botPoints + " points"),10000)
}
// matchPoints = parseInt(prompt("How many points will be required for VICTORY?"))
match(matchPoints)
