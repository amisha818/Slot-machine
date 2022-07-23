let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')
let speed = document.getElementById('speed')
let start = document.getElementById('start')
let result = document.getElementById('result')

let stop = document.getElementById('stop')
let slot = document.getElementsByClassName('slot')
let values = [
    '❤', '🌹', '💋', '❣', '💝', '💔', '😍', '💗', '💞'
]

function getRandomValue() {
    return values[Math.floor(Math.random() * 7)]
}
let animationid;


function updateanimation(newspeed) {
    if (animationid) clearInterval(animationid)
    animationid = setInterval(() => {

        value1.innerText = getRandomValue()
        value2.innerText = getRandomValue()
        value3.innerText = getRandomValue()
    }, 800 / newspeed)
}
let myVar;

function stopanimation() {
if (animationid) clearInterval(animationid)
    document.documentElement.style.setProperty('--speed', 0)
   
    if (value1.innerText == value2.innerText) {
        if (value1.innerText == value3.innerText) {
            result.innerText = "Congratulations! you win 500 coins"
        }
    } else {
        result.innerText = "OOPS! Better Luck next time.👍"
    }

}
start.onclick = function() {

  
    document.documentElement.style.setProperty('--speed', 3)
    updateanimation(3);
    speed.onchange = function(ev) {
        document.documentElement.style.setProperty('--speed', ev.target.value)
        updateanimation(ev.target.value);
    }
}
stop.onclick = function() {

    stopanimation();
}
