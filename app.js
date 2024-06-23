/*
let titulo = document.querySelector(`h1`);
titulo.innerHTML = "Juego del numero secreto";

let parrafo = document.querySelector(`p`);
 parrafo.innerHTML = "Indica un numero entre 1 y 10";
*/

let numeroSecreto =0;
let intentos =0;
let intentosMaximos= 4 ;
let numerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){

    let elemntoHTML = document.querySelector(elemento);
    elemntoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroUsuario);
   

    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento(`p`, `Acertaste el numero en ${intentos} ${(intentos === 1) ? `intento` : `intentos`}`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);

    }else{
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento(`p`, `el numero es menor`);
        }else{
            asignarTextoElemento(`p`, `el numero es mayor`);
        }

        intentos++;
        if (intentos >= intentosMaximos) {
            asignarTextoElemento(`p`, `Se te acabaron los intentos.`);
            document.querySelector(`#reiniciar`).setAttribute(`disabled`, `true`);
            document.getElementById(`nuevo`).removeAttribute(`disabled`);
            return;}
        limpiar();
    }
    return;

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(numerosSorteados);

    //si ya se sortearon todos los num

    if(numerosSorteados.length == numeroMaximo){ 
        asignarTextoElemento(`p`, `Ya se sortearon todos los numeros posibles`);
        
    }  else {
         //si el numero generado no esta en la lista jugamos
        if(numerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

        } else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
            }
        }
}

function limpiar(){
    let valorCaja = document.querySelector(`#valorUsuario`);
    valorCaja.value = ``;
    return;
}

function condicionesIniciales() {
     
    asignarTextoElemento(`h1`, `Juego del numero secreto`);
    asignarTextoElemento(`p`, `Introduce un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar juego
    limpiar();
    //indicar mensaje de numeros
    condicionesIniciales();
    //generar numero aleatorio
    //inicializar num intentos
    //desabilitar boton nuevo juego
    document.querySelector(`#reiniciar`).setAttribute(`disabled`, `true`);

    
    
    
    
}

function reiniciarLista() {

    numerosSorteados.length = 0;
    
}
condicionesIniciales();

