const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnClick = document.querySelector("#btnClick")
const btnReset = document.querySelector("#btnReset") 



let phrases = [
  "Sonhos são caminhos construídos pelo coração.",
  "Dias nublados guardam o sol atrás deles.",
  "Permita que o seu corpo descanse.",
  "Tenha coragem para se tornar aquilo que sonha.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
]

let randomPhrases = phrases[Math.floor(Math.random() * phrases.length)]

btnClick.addEventListener(`click`, handleClick)
btnReset.addEventListener(`click`, handleReset)

function handleClick(event) {
  if(btnClick) {
    toggleScreen()

    screen2.querySelector(".screen2 p").innerText = randomPhrases
  }
}

function handleReset(e) {
  if(btnReset) {
    toggleScreen()

    randomPhrases = phrases[Math.floor(Math.random() * phrases.length)]
  }
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
