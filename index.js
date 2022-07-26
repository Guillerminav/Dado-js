




// let boton = document.querySelector('.button')
// let visor = document.getElementById('visor')
// let resultado = document.getElementById('resultado')




// function tirarDado() {

//     random = Math.floor(Math.random() * 6 + 1);
//     resultado.innerHTML = random

// }


// tirarDado()



//dado real

let boton2 = document.querySelector('.button')
let visor = document.getElementById('visor2')
let resultado = document.getElementById('resultado2')


let uno = document.getElementById('uno')
let dos = document.getElementById('dos')
let tres = document.getElementById('tres')
let cuatro = document.getElementById('cuatro')
let cinco = document.getElementById('cinco')
let seis = document.getElementById('seis')

function tirarDado() {

    random = Math.floor(Math.random() * 6 + 1);

    if (random == 1){
        uno.style.background = "#222831"
        dos.style.background = "#FFD369"
        tres.style.background = "#222831"
        cuatro.style.background = "#222831"
        cinco.style.background = "#222831"
        seis.style.background = "#222831"
    } else if (random == 2) {
        uno.style.background = "#222831"
        dos.style.background = "#FFD369"
        tres.style.background = "#222831"
        cuatro.style.background = "#222831"
        cinco.style.background = "#FFD369"
        seis.style.background = "#222831"
    } else if (random == 3) {
        uno.style.background = "#222831"
        dos.style.background = "#222831"
        tres.style.background = "#222831"
        cuatro.style.background = "#FFD369"
        cinco.style.background = "#FFD369"
        seis.style.background = "#FFD369"
    } else if (random == 4) {
        uno.style.background = "#FFD369"
        dos.style.background = "#FFD369"
        tres.style.background = "#FFD369"
        cuatro.style.background = "#FFD369"
        cinco.style.background = "#222831"
        seis.style.background = "#222831"
    } else if (random == 5) {
        uno.style.background = "#FFD369"
        dos.style.background = "#FFD369"
        tres.style.background = "#FFD369"
        cuatro.style.background = "#FFD369"
        cinco.style.background = "#FFD369"
        seis.style.background = "#222831"
    } else if (random == 6) {
        uno.style.background = "#FFD369"
        dos.style.background = "#FFD369"
        tres.style.background = "#FFD369"
        cuatro.style.background = "#FFD369"
        cinco.style.background = "#FFD369"
        seis.style.background = "#FFD369"
    }
    console.log(random)
}


tirarDado()