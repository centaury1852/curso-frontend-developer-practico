
var opcion1 = "piedra";
var opcion2 = "papel";
var opcion3 = "tijera";

function juego(jugador1, pc) {

    if (jugador1 === "piedra" && pc === "tijera") {
        console.log("jugador gana");
    }
    else if (jugador1==="papel" && pc==="tijera") {
        console.log("pc gana")
    }

    else if (jugador1==="tijera" && pc==="papel") {
        console.log("jugador gana")
    }

    else if (jugador1==="piedra" && pc==="papel") {
        console.log("pc gana")
    }

    else if (jugador1==="papel" && pc==="piedra") {
        console.log("jugador gana")
                
    }

    else if (jugador1==="tijera" && pc==="piedra") {
        console.log("pc gana")
    }


    /*empates */
    else if (jugador1==="tijera" && pc==="tijera") {
        console.log("empate, elija nuevamente")
    }

    else if (jugador1==="papel" && pc==="papel") {
        console.log("empate, elija nuevamente")
    }

    else if (jugador1==="piedra" && pc==="piedra") {
        console.log("empate, elija nuevamente")
    }

    

    /* cuando el jugador no elige ninguna opcion y el si*/
    else if (jugador1==="" && pc==="papel"){
        console.log("ingrese piedra, papel o tijera en jugador ")
    }


    else if (jugador1==="" && pc==="piedra"){
        console.log("ingrese piedra, papel o tijera en jugador ")
    }


    else if (jugador1==="" && pc==="tijera"){
        console.log("ingrese piedra, papel o tijera en jugador ")
    }



    /* cuando no se a elegido ninguno */

    else if (jugador1==="" && pc===""){
        console.log("ingrese piedra, papel o tijera en jugador ")
    }

}
