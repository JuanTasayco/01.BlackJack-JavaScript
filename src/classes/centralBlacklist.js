import {Baraja} from "./classBlacklist";

// c clovers, d diamonds h hearst s spades
const btnGive = document.querySelector(".btn-give");
const btnStop = document.querySelector(".btn-stop");
const btnRestart = document.querySelector(".btn-restart");
const puntuacion = document.querySelectorAll("b");
const divcartas = document.querySelectorAll(".divcartas");
let puntosJugador =0, puntosComputador=0;

const iniciarJuego=(deck)=>{
     deck= [];
     deck= new Baraja().crearBaraja();
     puntosJugador =0;
     puntosComputador =0;
     divcartas.forEach(a=>a.innerHTML= "");
     puntuacion.forEach(a=>a.innerText=0);
     return deck;
}
let deck1= iniciarJuego();
let deck2= iniciarJuego();
//creando barajas para player y computador
const obtenerCarta=(deck1)=>{
    const cartaLetra = deck1.pop();
    return cartaLetra; //
}

const obtenerValor=(cartaLetra)=>{
    let cartaValor= cartaLetra.slice(0,cartaLetra.length-1);
    cartaValor = (isNaN(cartaValor))?(cartaValor==="A")? 11 : 10 : cartaValor*1;
    return cartaValor;
}

const contenedorCards = document.querySelector(`.container-cards`);
const pintarHTML = (cartaLetra,player)=>{ 
    const imagen = document.createElement("IMG");
    imagen.src = `./assets/${cartaLetra}.png`;
    contenedorCards.children[player].appendChild(imagen);
    imagen.classList.add("player1__card");
    imagen.classList.add("img-fluid");
}


const logicaPuntuacion = (deck,puntos,posicion)=>{
    const pedirCarta = obtenerCarta(deck);  
    let valorCarta = obtenerValor(pedirCarta);
     puntos+=valorCarta;
     puntuacion[posicion].innerText = puntos;
     pintarHTML(pedirCarta,posicion);
     return puntos;
}

const logicaMaquina = ()=>{
   let suma =0;
  while(suma<21){
    puntosComputador = logicaPuntuacion(deck2,puntosComputador,1);
    suma+=puntosComputador;
  }
};

const botones = (valor)=>{
    btnGive.disabled = valor;
    btnStop.disabled = valor;
}

//BUTTONS 
btnGive.addEventListener("click",(event)=>{
puntosJugador = logicaPuntuacion(deck1,puntosJugador,0);
    if(puntosJugador>21){
        logicaMaquina(); 
        botones(true);
        setTimeout(()=>{
            if(puntosComputador<21){
                alert("Perdiste");
            }else{
                alert("Empatan");
            } 
        },100)
    }
})


btnStop.addEventListener("click",()=>{
    logicaMaquina();
    botones(true);
    setTimeout(()=>{
    if(puntosComputador>puntosJugador && puntosComputador<=21){alert("La computadora gana");} 
    else if(puntosComputador==puntosJugador){alert("Empatan");}
    else{alert("La computadora pierde");}
    },100)
   
})

btnRestart.addEventListener("click",()=>{
    deck1 = iniciarJuego()
    deck2 = iniciarJuego()
    botones(false);
});



 










