const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

function backPage(){

    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
function nextPage(){

    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}


let buttonReturn = document.querySelector("#buttonReturn")
let buttonNext = document.querySelector("#buttonNext")

buttonReturn.addEventListener("click", backPage)
buttonNext.addEventListener("click", nextPage)
