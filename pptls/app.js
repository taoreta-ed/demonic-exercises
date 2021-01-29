/* Juego de Piedra, papel, tijeras, lagarto y spock */

let op1 = "Piedra";
let op2 = "Papel";
let op3 = "Tijeras";
let op4 = "Lagarto";
let op5 = "Spock";

let mach;

let btn1 = document.getElementById('op1');
let btn2 = document.getElementById('op2');
let btn3 = document.getElementById('op3');
let btn4 = document.getElementById('op4');
let btn5 = document.getElementById('op5');

function getRandom(){
    return Math.floor(Math.random()*5);
}

function machineChoice(){
    /*Dado un numero aleatorio del 0 al 4 (Se redondea hacia abajo), da la opcion de tenn*/
    let random = getRandom();

    switch(random){
        case 0: 
            /* El random es 0, la opcion de Tenn entonces es Piedra */
            mach = op1;
            return mach;
            break;
        case 1: 
            mach = op2;
            return mach;
            break;
        case 2: 
            mach = op3;
            return mach;
            break;
        case 3: 
            mach = op4;
            return mach;
            break;
        case 4: 
            mach = op5;
            return mach;
            break;
    }
}

function game(player, mach){

    if(player == mach){
        return 'empate';
    }else if (player == "Piedra" && mach == "Tijeras"){
        return 'Jugador';
    }else if (player == "Piedra" && mach == "Papel"){
        return 'Tenn';
    }else if (player == "Piedra" && mach == "Lagarto"){
        return 'Jugador';
    }else if (player == "Piedra" && mach == "Spock"){
        return 'Tenn';
    }else if (player == "Papel" && mach == "Piedra"){
        return 'Jugador';
    }else if (player == "Papel" && mach == "Tijeras"){
        return 'Tenn';
    }else if (player == "Papel" && mach == "Lagarto"){
        return 'Tenn';
    }else if (player == "Papel" && mach == "Spock"){
        return 'Jugador';
    }else if (player == "Tijeras" && mach == "Piedra"){
        return 'Tenn';
    }else if (player == "Tijeras" && mach == "Papel"){
        return 'Jugador';
    }else if (player == "Tijeras" && mach == "Lagarto"){
        return 'Jugador';
    }else if (player == "Tijeras" && mach == "Spock"){
        return 'Jugador';
    }else if (player == "Lagarto" && mach == "Piedra"){
        return 'Tenn';
    }else if (player == "Lagarto" && mach == "Papel"){
        return 'Jugador';
    }else if (player == "Lagarto" && mach == "Tijeras"){
        return 'Tenn';
    }else if (player == "Lagarto" && mach == "Spock"){
        return 'Jugador';
    }else if (player == "Spock" && mach == "Piedra"){
        return 'Jugador';
    }else if (player == "Spock" && mach == "Papel"){
        return 'Tenn';
    }else if (player == "Spock" && mach == "Tijeras"){
        return 'Jugador';
    }else if (player == "Spock" && mach == "Lagarto"){
        return 'Tenn';
    }else{
        return 'Error';
    }
}

btn1.addEventListener('click', ()=>{
    let winPar = document.getElementById('result');
    let winner = game('Piedra', machineChoice());
    console.log(winner);

    /*Crear un if para poner un mejor mensaje (Jugador1, Jugador2, Tenn1...)*/
    winPar.innerHTML = "¡Ha ganado " + winner + " !";

    event.preventDefault();
});