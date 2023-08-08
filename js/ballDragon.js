const sectionReiniciar = document.getElementById('reiniciar')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
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
const contenedorAtaques = document.getElementById('contenedor-ataques')

let peleadores = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDePeleadores
let ataquesPeleadorEnemigo
let inputGoku
let inputVegeta
let inputPiccolo
let peleadorJugador
let ataquesPeleador
let botonXp
let botonAttFinal
let botonAttEspecial
let botones = []
let victoriasJugador = 0
let victoriasEnemigo = 0
let indexAtaqueJugador = 0
let indexAtaqueEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3

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
    { nombre: '⚡️', id: 'boton-xp' },
    { nombre: '⚡️', id: 'boton-xp' },
    { nombre: '⚡️', id: 'boton-xp' },
    { nombre: '🗡️', id: 'boton-Attfinal' },
    { nombre: '✨', id: 'boton-Attespecial' }
)

vegeta.ataques.push(
    { nombre: '🗡️', id: 'boton-Attfinal' },
    { nombre: '🗡️', id: 'boton-Attfinal' },
    { nombre: '🗡️', id: 'boton-Attfinal' },
    { nombre: '⚡️', id: 'boton-xp' },
    { nombre: '✨', id: 'boton-Attespecial' }
)

piccolo.ataques.push(
    { nombre: '✨', id: 'boton-Attespecial' },
    { nombre: '✨', id: 'boton-Attespecial' },
    { nombre: '✨', id: 'boton-Attespecial' },
    { nombre: '⚡️', id: 'boton-xp' },
    { nombre: '🗡️', id: 'boton-Attfinal' }
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
        inputVegeta = document.getElementById('Vegeta')
        inputPiccolo = document.getElementById('Piccolo')
    })

    let botonPeleadorJugador = document.getElementById('boton-peleador')
    botonPeleadorJugador.addEventListener('click', seleccionarPeleadorJugador)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarPeleadorJugador() {
    sectionSeleccionarPeleador.style.display = 'none'

    sectionSeleccionarAtaque.style.display = 'flex'

    if (inputGoku.checked) {
        spanPeleadorJugador.innerHTML = inputGoku.id
        peleadorJugador = inputGoku.id
    } else if(inputVegeta.checked) {
        spanPeleadorJugador.innerHTML = inputVegeta.id
        peleadorJugador = inputVegeta.id
    } else if(inputPiccolo.checked){
        spanPeleadorJugador.innerHTML = inputPiccolo.id
        peleadorJugador = inputPiccolo.id
    } else {
        alert('Selecciona a tu peleador')
    }

    extraerAtaques(peleadorJugador)
    seleccionarPeleadorEnemigo()
}

function extraerAtaques(peleadorJugador) {
    let ataques
    for (let i = 0; i < peleadores.length; i++) {
        if (peleadorJugador == peleadores[i].nombre) {
            ataques = peleadores[i].ataques
        }

    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesPeleador = `
        <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesPeleador
    })


    botonXp = document.getElementById('boton-xp')
    botonAttFinal = document.getElementById('boton-Attfinal')
    botonAttEspecial = document.getElementById('boton-Attespecial')
    botones = document.querySelectorAll('.BAtaque')

}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent == '⚡️') {
                ataqueJugador.push('Aumento Poder')
                console.log(ataqueJugador)
                boton.style.background = '#6b4e10'
            } else if (e.target.textContent == '🗡️') {
                ataqueJugador.push('Ataque Final')
                console.log(ataqueJugador)
                boton.style.background = '#6b4e10'
            } else {
                ataqueJugador.push('Ataque Especial')
                console.log(ataqueJugador)
                boton.style.background = '#6b4e10'
            }
            ataqueAleatorioEnemigo()
        })
    })
}

function seleccionarPeleadorEnemigo() {
    let peleadorAleatorio = aleatorio(0, peleadores.length -1)

    spanPeleadorEnemigo.innerHTML = peleadores[peleadorAleatorio].nombre
    ataquesPeleadorEnemigo = peleadores[peleadorAleatorio].nombre
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo() {
    const ataqueAleatorio = aleatorio(0, ataquesPeleadorEnemigo.length -1)

    if(ataqueAleatorio === 0 || ataqueAleatorio === 1){
        ataqueEnemigo.push('Aumento Poder')
    } else if(ataqueAleatorio === 3 || ataqueAleatorio === 4){
        ataqueEnemigo.push('Ataque Final')
    } else{
        ataqueEnemigo.push('Ataque Especial')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponenetes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    for (let index = 0; index < ataqueJugador.length; index++) {
        indexAmbosOponenetes(index, index)
        if(ataqueJugador[index] == ataqueEnemigo[index]) {
            crearMensaje('Empate 🤼')
        }  else if ((ataqueJugador[index] == 'Aumento Poder' && ataqueEnemigo[index] == 'Ataque Especial') || (ataqueJugador[index] == 'Ataque Final' && ataqueEnemigo[index] == 'Aumento Poder') || (ataqueJugador[index] == 'Ataque Especial' && ataqueEnemigo[index] == 'Ataque Final')) {
            crearMensaje('GANAS ESTA RONDA! 🎉')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            crearMensaje('has perdido esta ronda... 😔')
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }

    }
    revisarVidas()
}

function revisarVidas(){
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal('Ambos peleadores pueden seguir de pie. Empate 🤼')
        alert('Empate 🤼')
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal('Hiciste una buena combinación. TU GANAS 🎉')
        alert('HAS GANADO 🎉')
    } else {
        crearMensajeFinal('Tu contraincante hizo una buena combinación. pierdes 😢')
        alert('has perdido 😢')
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal

    let botonXp = document.getElementById('boton-xp')
    botonXp.disabled = true
    let botonAttFinal = document.getElementById('boton-Attfinal')
    botonAttFinal.disabled = true
    let botonAttEspecial = document.getElementById('boton-Attespecial')
    botonAttEspecial.disabled = true

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
