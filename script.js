let homeDisplay = document.getElementById("homeScore")
let guestDisplay = document.getElementById("guestScore")

let homescore = 0
let guestscore = 0

//Home
function onePointHome(){
    homescore += 1
    homeDisplay.textContent = homescore
}

function twoPointHome(){
    homescore += 2
    homeDisplay.textContent = homescore
}

function threePointHome(){
    homescore += 3
    homeDisplay.textContent = homescore
}

//Guest
function onePointGuest(){
    guestscore += 1
    guestDisplay.textContent = guestscore
}

function twoPointGuest(){
    guestscore += 2
    guestDisplay.textContent = guestscore
}

function threePointGuest(){
    guestscore += 3
    guestDisplay.textContent = guestscore
}

//New Game / Restart Counter
function newGame(){
    guestscore = 0
    homescore = 0
    guestDisplay.textContent = guestscore
    homeDisplay.textContent = homescore
}