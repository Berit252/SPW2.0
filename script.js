document.body.style.overflow = 'hidden'

let divCounter = 0

const blockWidth = 100
const blockHeight = 80
const fixedTop = window.innerHeight / 2 - blockHeight + 26
const fixedLeft = window.innerWidth / 2 - blockWidth - 24

let text = ""
let divPadding

function setRandomPosition(){
  let randomTop = Math.random() * (window.innerHeight - blockHeight) * 0.9
  let randomLeft = Math.random() * (window.innerWidth - blockWidth) * 0.9
  
  if (currentLevel === 1){
    text = "press 'space' to delete"
    divPadding = `${0}px ${20}px`
  } else if (currentLevel === 2){
    text = "press"
    divPadding = `${0}px ${70}px`
  } else if (currentLevel === 3){
    text = "prs"
    divPadding = `${0}px ${80}px`
  } else if (currentLevel === 4){
    text = "more?" 
    divPadding = `${0}px ${78}px`
  } else if (currentLevel === 5){
    text = "more"
    divPadding = `${0}px ${76}px`
  } else if (currentLevel === 6){
    text = "even more?"
    divPadding = `${0}px ${46}px`
  } else if (currentLevel === 7){
    text = "enough"
    divPadding = `${0}px ${54}px`
  } else if (currentLevel === 8){
    text = "??"
    divPadding = `${0}px ${96}px`
  } else if (currentLevel === 9){
    text = "???"
    divPadding = `${0}px ${90}px`
  } else if (currentLevel === 10){
    text = "..."
    divPadding = `${0}px ${90}px`
  } else if (currentLevel === 11){
    text = "..."
    divPadding = `${0}px ${90}px`
  } else if (currentLevel === 12){
    text = "Are you still there?"
    divPadding = `${0}px ${22}px`
  } else if (currentLevel === 13){
    text = "Fine. but.."
    divPadding = `${0}px ${60}px`
  } else if (currentLevel === 14){
    text = "I'm not a game."
    divPadding = `${0}px ${46}px`
  } else if (currentLevel === 15){
    text = "Are you still pressing?"
    divPadding = `${0}px ${20}px`
  } else if (currentLevel === 16){
    text = "You really wanna a game?"
    divPadding = `${0}px ${18}px`
  } else if (currentLevel === 17){
    text = "Okay..."
    divPadding = `${0}px ${80}px`
  } else if (currentLevel === 18){
    text = "Loading..."
    count = 0
    divPadding = `${0}px ${70}px`
  } else if (currentLevel === 19){
    text = "game start"
    divPadding = `${0}px ${80}px`
  }

  let newDiv = document.createElement('div')
  newDiv.className = 'block'
  if (currentLevel <= 16) {
    newDiv.style.top = `${randomTop}px`
    newDiv.style.left = `${randomLeft}px`
  } else {
    newDiv.style.top = `${fixedTop}px`
    newDiv.style.left = `${fixedLeft}px`
  }
  newDiv.style.padding = divPadding
  newDiv.id = `block${divCounter++}`
  console.log(newDiv.id)

  let newP = document.createElement('p')
  newP.textContent = text
  newDiv.appendChild(newP)

  document.body.appendChild(newDiv)
}
