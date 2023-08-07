const sectionReiniciar = document.getElementById('reiniciar')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarPeleador = document.getElementById('seleccionar-peleador')
const spanPeleadorJugador = document.getElementById('peleador-jugador')

const spanPeleadorEnemigo = document.getElementById('peleador-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')

const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')

let peleadores = []
let ataqueJugador
let ataqueEnemigo
let opcionDePeleadores
let inputGoku
let inputVegeta
let inputPiccolo
let vidasJugador = 10
let vidasEnemigo = 10

class Peleador {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let goku = new Peleador('Goku', 'file:///Users/Emanuel/Desktop/progBasica/ballDragon/assets/goku.png', 10)
let vegeta = new Peleador('Vegeta', 'file:///Users/Emanuel/Desktop/progBasica/ballDragon/assets/vegeta.png', 10)
let piccolo = new Peleador('Piccolo', 'file:///Users/Emanuel/Desktop/progBasica/ballDragon/assets/piccolo.png', 10)

goku.ataques.push(
    { nombre: '⚡️', id: 'boton-fuego' },
    { nombre: '⚡️', id: 'boton-fuego' },
    { nombre: '⚡️', id: 'boton-fuego' },
    { nombre: '🗡️', id: 'boton-agua' },
    { nombre: '✨', id: 'boton-tierra' }
)

vegeta.ataques.push(
    { nombre: '🗡️', id: 'boton-agua' },
    { nombre: '🗡️', id: 'boton-agua' },
    { nombre: '🗡️', id: 'boton-agua' },
    { nombre: '⚡️', id: 'boton-fuego' },
    { nombre: '✨', id: 'boton-tierra' }
)

piccolo.ataques.push(
    { nombre: '✨', id: 'boton-tierra' },
    { nombre: '✨', id: 'boton-tierra' },
    { nombre: '✨', id: 'boton-tierra' },
    { nombre: '⚡️', id: 'boton-fuego' },
    { nombre: '🗡️', id: 'boton-agua' }
)

peleadores.push(goku, vegeta, piccolo)

function iniciarJuego() {
    sectionReiniciar.style.display = 'none'

    sectionSeleccionarAtaque.style.display = 'none'

    peleadores.forEach((peleador) => {
        opcionDePeleadores = `
        <input type="radio" name="mascota" id=${peleador.nombre} />
            <label class="tarjeta-de-peleador" for=${peleador.nombre}>
                <p>${peleador.nombre}</p>
                <img class="img-${peleador.nombre}" src=${peleador.foto} alt=${peleador.nombre}>
            </label>
        `
        contenedorTarjetas.innerHTML += opcionDePeleadores

        inputGoku = document.getElementById('Goku')
        inputVeggeta = document.getElementById('Veggeta')
        inputPiccolo = document.getElementById('Piccolo')
    })

    let botonPeleadorJugador = document.getElementById('boton-peleador')
    botonPeleadorJugador.addEventListener('click', seleccionarPeleadorJugador)

    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function ataqueFuego() {
    ataqueJugador = 'Aumento Poder'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'Ataque final'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'Ataque especial'
    ataqueAleatorioEnemigo()
}

function seleccionarPeleadorJugador() {
    sectionSeleccionarPeleador.style.display = 'none'

    sectionSeleccionarAtaque.style.display = 'flex'


    if (inputGoku.checked) {
        spanPeleadorJugador.innerHTML = inputGoku.id
    } else if(inputVegeta.checked) {
        spanPeleadorJugador.innerHTML = inputVegeta.id
    } else if(inputPiccolo.checked){
        spanPeleadorJugador.innerHTML = inputPiccolo.id
    } else {
        alert('Selecciona a tu peleador')
    }

    seleccionarPeleadorEnemigo()
}

function seleccionarPeleadorEnemigo() {
    let peleadorAleatorio = aleatorio(1, 3)

    if (peleadorAleatorio == 1) {
        spanPeleadorEnemigo.innerHTML = 'Goku'
    }
    else if (peleadorAleatorio == 2){
        spanPeleadorEnemigo.innerHTML = 'Veggeta'
    }else  {
        spanPeleadorEnemigo.innerHTML = 'Piccolo'
    }
}

function ataqueAleatorioEnemigo() {
    const ataqueAleatorio = aleatorio(1, 3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'Aumento poder'
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'Ataque final'
    } else{
        ataqueEnemigo = 'Ataque especial'
    }
    combate()
}

function combate() {
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje('Empate 🤼')
    } else if((ataqueJugador == 'Aumento poder' && ataqueEnemigo == 'Ataque especial') || (ataqueJugador == 'Ataque final' && ataqueEnemigo == 'Aumento poder') || (ataqueJugador == 'Ataque especial' && ataqueEnemigo == 'Ataque final')) {
        crearMensaje('GANAS ESTA RONDA! 🎉')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje('has perdido esta ronda... 😔')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

function revisarVidas(){
    if (vidasEnemigo == 0) {
        crearMensajeFinal('El peleador del enemigo no puede continuar. FELICIDADES 🎉')
        alert('HAS GANADO!!!')
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Tu peleador no puede continuar. Lo lamento 😔')
        alert('has perdido...')
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
