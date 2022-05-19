setInterval(setClock, 1000)

const hourHand = document.querySelector('.hand.hour')
const minuteHand = document.querySelector('.hand.minute')
const secondHand = document.querySelector('.hand.second')

function setClock() {
  const currentDate = new Date()
  console.log(currentDate.getHours(),currentDate.getMinutes(),currentDate.getSeconds())
  const secondsAngle = currentDate.getSeconds()*6
  const minutesAngle=currentDate.getMinutes()*6+(currentDate.getSeconds())/60*(6) 
  const hoursAngle=currentDate.getHours()*30+currentDate.getMinutes()*(1/2)
  
  setRotation(secondHand, secondsAngle)
  setRotation(minuteHand, minutesAngle)
  setRotation(hourHand, hoursAngle)
}

function setRotation(element,angle) {
  element.style.setProperty('--rotation', angle%360)//angle)
}

setClock()