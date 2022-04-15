var buttonStart
var buttonPause
var buttonReset
var divTempo
var tempo = 0
var timerId

//Inicia a aplicação
init()

function init(){
    buttonStart = document.getElementById("start")
    buttonStart.onclick = start 

    buttonPause = document.getElementById("pause")
    buttonPause.onclick = pause
    buttonPause.disabled = true

    buttonReset = document.getElementById("reset")
    buttonReset.onclick = reset
    buttonReset.disabled = true

    divTempo = document.getElementById("tempo")
}


function update(){
    tempo = tempo + 0.100
    divTempo.innerHTML = tempo.toFixed(1) + "s"
}

function start(){
    timerId = setInterval(update,100)
    buttonStart.disabled = true
    buttonPause.disabled = false
    buttonReset.disabled = false
}
function pause(){
    clearInterval(timerId)
    buttonStart.disabled = false
    buttonPause.disabled = true
}
function reset(){
    clearInterval(timerId)
    tempo = 0
    divTempo.innerHTML = tempo.toFixed(1) + "s"
    buttonStart.disabled = false
    buttonPause.disabled = true
    buttonReset = true
}