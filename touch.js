let startY = 0

document.addEventListener('touchstart', (e) => {
  startY = e.touches[0].clientY
}, false);


// Level 19 前
document.addEventListener('touchend', (e) => {
  let endY = e.changedTouches[0].clientY // Ending Y position

  if (startY > endY + 50 && currentLevel < 19) { // 50 is the minimum distance for the swipe
    console.log("Swipe Up Detected!")
    
    // 选择所有具有'block'类名的div
    const allBlocks = document.querySelectorAll('.block')

    if (allBlocks.length > 0) {
      const lastBlock = allBlocks[allBlocks.length - 1]

      if (currentLevel < 8) {
        lastBlock.parentNode.removeChild(lastBlock)
      } else { 
        // 应用动画
        lastBlock.style.animation = 'slideUp 0.2s forwards';
        // 监听动画结束事件
        lastBlock.addEventListener('animationend', function() {
          lastBlock.parentNode.removeChild(lastBlock)
        })
      }
    }

    // 进入下一关? (若 页面上没有block了 后面也还有关卡 即可)
    if (document.querySelectorAll('.block').length === 0 && currentLevel < divs.length) {
      currentLevel++
      startDiv(currentLevel)
    }
  }
}, false)


// Level 19 后
document.addEventListener('touchend', (e) => {
  let endY = e.changedTouches[0].clientY // Ending Y position

  if (startY > endY + 50 && currentLevel === 19) { // 50 is the minimum distance for the swipe
    console.log("Swipe Up Detected!")

    // 应用消失动画到最后一个div
    const allBlocks = document.querySelectorAll('.block')
    if (allBlocks.length > 0) {
      const lastBlock = allBlocks[allBlocks.length - 1]
      lastBlock.style.animation = 'slideUp 0.3s forwards'
    }

    // 创建并显示新的div
    let newDiv = document.createElement('div')
    newDiv.className = 'block'
    newDiv.style.position = 'absolute'
    newDiv.style.height = '68px'
    newDiv.style.width = '240px'
    newDiv.style.top = `${fixedTop}px`
    newDiv.style.left = `${fixedLeft}px`
    newDiv.style.animation = 'slideIn 0.3s forwards'
    document.body.appendChild(newDiv)

    count++
    document.getElementById('countDisplay').textContent = `point: ${count}`
    document.getElementById('countDisplay').style.display = 'block'

    if (count === 100) { // 一直计数到100 
      // congratulationDiv
      let congratulationDiv = document.createElement('div')
      congratulationDiv.id = 'congratulation'
      congratulationDiv.style.padding = `${240}px ${320}px`
      congratulationDiv.textContent = 'Congratulation!'
      congratulationDiv.className = 'congratulation'
      document.body.appendChild(congratulationDiv)
    } else if (count === 101) {
      document.getElementById('countDisplay').style.display = 'none'
      let congratulationDiv = document.getElementById('congratulation')
      congratulationDiv.textContent = 'Total Score: 100 !!!'
    } else if (count === 102) {
      document.getElementById('countDisplay').style.display = 'none'
      let congratulationDiv = document.getElementById('congratulation')
      congratulationDiv.textContent = 'Are you happy?'
    } else if (count === 103) {
      document.getElementById('countDisplay').style.display = 'none'
      let congratulationDiv = document.getElementById('congratulation')
      congratulationDiv.textContent = 'Still there?'
      congratulationDiv.style.padding = `${240}px ${360}px`
    } else if (count === 104) {
      document.getElementById('countDisplay').style.display = 'none'
      let congratulationDiv = document.getElementById('congratulation')
      congratulationDiv.textContent = 'HUMMMMMMMM...'
      congratulationDiv.style.padding = `${240}px ${320}px`
    } else if (count === 105) {
      document.getElementById('countDisplay').style.display = 'none'
      let congratulationDiv = document.getElementById('congratulation')
      congratulationDiv.textContent = 'EMMM... '
      congratulationDiv.style.padding = `${160}px ${300}px`
      congratulationDiv.appendChild(img)
    } else if (count === 106) {
      let congratulationDiv = document.getElementById('congratulation')
      congratulationDiv.textContent = 'Go ahead... '
      congratulationDiv.style.padding = `${160}px ${280}px`
      congratulationDiv.appendChild(img) 
    } else if (count === 107) {   // 这里放出来继续计数
      const congratulationDiv = document.getElementById('congratulation')
      congratulationDiv.parentNode.removeChild(congratulationDiv)
      document.getElementById('countDisplay').style.display = 'block'
    } else if (count === 131) {  // 颜色转换开始
      document.getElementById('countDisplay').style.display = 'none'
      currentLevel++
    } 

    // 20 (颜色转换效果)
    if (startY > endY + 50 && currentLevel === 20) {
      count++
      console.log(count)
      let swt = count % 2
      let color = swt === 0 ? 'rgb(25,25,25)' : 'rgb(255,255,255)'
      document.body.style.backgroundColor = color
      const allBlocks = document.querySelectorAll('.block')   // 从这之后就没block了
      allBlocks.forEach(function(block) {
        block.parentNode.removeChild(block) 
      })

      if (count === 142) {    // 终断颜色转换
        currentLevel++
      }
    }

    // 21 (textDiv上线)
    if (startY > endY + 50 && currentLevel === 22) {
      count++
    console.log(count)

    let textDiv = document.getElementById('textDiv')
    if (!textDiv && count === 143) { // 如果textDiv不存在且count为152，创建它
      let textDiv = document.createElement('div')
      textDiv.className = 'centered-text'
      textDiv.id = 'textDiv';
      document.body.appendChild(textDiv)
    }

    if (textDiv) { // 如果textDiv存在，更新其textContent 
      document.body.style.backgroundColor = 'rgb(255,255,255)'
      const phrases = [
        "●",
        "○",
        "●",
        "○",
        "●",
        "I●", 
        "I'●", 
        "I'm●", 
        "I'm e●", 
        "I'm end●", 
        "I'm endle●", 
        "I'm endless●", 
        "I'm endless..●",
        "I'm endless...●",
        "I'm endless......●",
        "I'm endless.........●",
        "I'm endless...............●",
        "I'm endless.....................●",
        "I'm endless...........................●",
        "I'm endless.................................●",
        "I'm endless....................................●",
        "I'm endless..........................................●",
        "I'm endless.............................................●",
        "I'm endless...................................................●",
        "I'm endless...................................................A●",
        "I'm endless...................................................Are●",
        "I'm endless...................................................Are y●",
        "I'm endless...................................................Are yo●",
        "I'm endless...................................................Are you●",
        "I'm endless...................................................Are you?●",
        "I'm endless...................................................Are you?.●",
        "I'm endless...................................................Are you?...●",
        "I'm endless...................................................Are you?.........●",
        "I'm endless...................................................Are you?............●",
        "I'm endless...................................................Are you?...............●",
        "I'm endless...................................................Are you?..................●",
        "I'm endless...................................................Are you?..................●",
        "I'm endless...................................................Are you?.....................",
        "●",
        "Ar●",
        "Are ●",
        "Are you●",
        "Are you a●",
        "Are you afr●",
        "Are you afra●",
        "Are you afraid●",
        "Are you afraid?",
        "●",
        "A●",
        "Are●",
        "Are y●",
        "Are yo●",
        "Are you ●",
        "Are you up●",
        "Are you ups●",
        "Are you upse●",
        "Are you upset?",
        "●",
        "A●",
        "Are●",
        "Are y●",
        "Are yo●",
        "Are you ●",
        "Are you b●",
        "Are you bor●",
        "Are you bored?",
        "●",
        "A●",
        "Are●",
        "Are y●",
        "Are yo●",
        "Are you ●",
        "Are you a●",
        "Are you an●",
        "Are you anno●",
        "Are you annoye●",
        "Are you annoyed?",
        "●",
        "A●",
        "Are●",
        "Are y●",
        "Are yo●",
        "Are you ●",
        "Are you l●",
        "Are you loo●",
        "Are you look●",
        "Are you looking●",
        "Are you looking f●",
        "Are you looking for●",
        "Are you looking forwa●",
        "Are you looking forward●",
        "Are you looking forward t●",
        "Are you looking forward to ●",
        "Are you looking forward to an●",
        "Are you looking forward to any●",
        "Are you looking forward to anyth●",
        "Are you looking forward to anythi●",
        "Are you looking forward to anything●",
        "Are you looking forward to anything?",
        "●",
        "M●",
        "Mome●",
        "Moment●",
        "Moments ●",
        "Moments a●",
        "Moments are●",
        "Moments are p●",
        "Moments are pa●",
        "Moments are pas●",
        "Moments are passi●",
        "Moments are passin●",
        "Moments are passing.",
        "●",
        "W●",
        "We ●",
        "We ar●",
        "We are h●",
        "We are he●",
        "We are her●",
        "We are here●",
        "We are here.",
        "M●",
        "Mome●",
        "Moment●",
        "Moments ●",
        "Moments ar●",
        "Moments are ●",
        "Moments are c●",
        "Moments are com●",
        "Moments are coming●",
        "Moments are coming.",
        "W●",
        "We●",
        "We ar●",
        "We are h●",
        "We are he●",
        "We are here.",
        "●",
        "M●",
        "Mom●",
        "Momen●",
        "Moment●",
        "Moments a●",
        "Moments are●",
        "Moments are e●",
        "Moments are end●",
        "Moments are endle●",
        "Moments are endless●",
        "Moments are endless.",
        "●",
        "S●",
        "Se●",
        "See ●",
        "See y●",
        "See yo●",
        "See you●",
        "See you.",
        "See you.."
      ]
      textDiv.textContent = phrases[count - 143] || textDiv.textContent
    }


    if (count === 300) {
      textDiv.parentNode.removeChild(textDiv)
      console.log('cleared')

      endImg = document.createElement('img')
      endImg.src = './img/thinking-processing.gif'
      endImg.alt = 'a gif at last' // 设置替代文本
      endImg.className = 'endImg'
      endImg.id = 'endImg'
      endImg.style.top = endImgTop + 'px'
      document.body.appendChild(endImg)
    } 

    if (count >= 301) { 
      // 上移gif
      endImgTop -= 24
      endImg.style.top = endImgTop + 'px'
    }


    if (count === 320) {
      restart()
    }
    }
  }
}, false)

