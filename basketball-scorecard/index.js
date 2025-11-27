let num1 = 12
let num2 = 5

document.getElementById("score-el1").textContent = num1
document.getElementById("score-el2").textContent = num2

let score1 = document.getElementById("score-el1") 
let score2 = document.getElementById("score-el2") 

function plus1() {
    num1 += 1
    score1.textContent = num1

}

function plus2() {
    num1 += 2
    score1.textContent = num1 

}

function plus3() {
    num1 += 3
    score1.textContent = num1 
}

function gPlus1() {
    num2 += 1
    score2.textContent = num2

}

function gPlus2() {
    num2 += 2
    score2.textContent = num2

}

function gPlus3() {
    num2 += 3
    score2.textContent = num2 
}


