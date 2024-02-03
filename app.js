let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = secretNumFunc();
let intentos = 1;




function asignarTextoElemento ( elemento, texto ) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

asignarTextoElemento("h1", "Juego del número secreto!");
asignarTextoElemento("p", `Ingresa un número del 1 al ${numeroMaximo}`);

function secretNumFunc () {


  let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

  if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento("p", 'Ya se sortearon los números disponibles');
  } else {
    if ( listaNumerosSorteados.includes(numeroGenerado) ) {
      return secretNumFunc();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
      console.log(numeroGenerado);
    }
  }
}

function verificarIntento () {
  let numerousuario = parseInt(document.getElementById("numeroUsuario").value);
  if (numerousuario === numeroSecreto) {
    console.log(numeroSecreto);
    asignarTextoElemento("p", `¡Acertaste el número en ${intentos} ${intentos == 1 ? "intento" : "intentos" }!`);
    document.getElementById('reiniciar').removeAttribute('disabled')
    console.log(listaNumerosSorteados)
  } else {
    if (numerousuario > numeroSecreto) {
      asignarTextoElemento("p", "El número es menor");
    } else {
      asignarTextoElemento("p", "El número es mayor");
    }
    intentos ++;
    limpiarCaja();
  }
}


function limpiarCaja () {
  document.querySelector('#numeroUsuario').value = '';
}



function reinicarJuego () {
  limpiarCaja();
  condicionesIniciales();
  document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

function condicionesIniciales () {
  asignarTextoElemento("h1", "Juego del número secreto!");
  asignarTextoElemento("p", `Ingresa un número del 1 al ${numeroMaximo}`);
  numeroSecreto = secretNumFunc();
  console.log(numeroSecreto);
  intentos = 1;
}
