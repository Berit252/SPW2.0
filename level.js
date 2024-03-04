let currentLevel = 18
const divs = [
  2, 4, 8, 
  8, 16, 32, 
  16, 16, 16, 
  8, 8, 8, 
  8, 8, 8,
  8, 4, 4,
  1
] //每一关block的数量

function startDiv(div) {
  const numBlocks = divs[div - 1]
  for (let i = 0; i < numBlocks; i++) {
    setRandomPosition()
  }
}

startDiv(currentLevel)

function restart() {
  currentLevel = 1
  count = 0
  document.getElementById('countDisplay').style.display = 'none'

  const allBlocks = document.querySelectorAll('.block')
  allBlocks.forEach(function(block) {
    block.parentNode.removeChild(block)
  })

  const otherElementOne = document.querySelectorAll('.congratulation');
  otherElementOne.forEach(function(element) {
    element.parentNode.removeChild(element);
  })

  const otherElementTwo = document.querySelectorAll('.centered-text');
  otherElementTwo.forEach(function(element) {
    element.parentNode.removeChild(element);
  })

  const otherElementThree = document.querySelectorAll('.endImg');
  otherElementThree.forEach(function(element) {
    element.parentNode.removeChild(element);
  })

  document.body.style.backgroundColor = 'white'
  
  startDiv(currentLevel)
}