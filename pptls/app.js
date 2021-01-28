/* Juego de Piedra, papel, tijeras, lagarto y spock */

let op1 = "Piedra";
let op2 = "Papel";
let op3 = "Tijeras";
let op4 = "Lagarto";
let op5 = "Spock";

let mach;

function getRandom(){
    return Math.floor(Math.random()*4);
}

function machineChoice(){
    let random = getRandom();

    switch(random){
        case 1: 
            mach = op1;
            console.log('Soy la opcion ' + mach);
            return mach;
            break;
        case 2: 
            mach = op2;
            console.log('Soy la opcion ' + mach);
            return mach;
            break;
        case 3: 
            mach = op3;
            console.log('Soy la opcion ' + mach);
            return mach;
            break;
        case 4: 
            mach = op4;
            console.log('Soy la opcion ' + mach);
            return mach;
            break;
    }
}

function game(player, mach){
    if(player == mach){
        console.log('Es un empate');
    }else if (player == "Piedra" && mach == "Tijeras"){
        console.log('¡Piedra rompe tijeras! Gana el jugador');
    }else if (player == "Piedra" && mach == "Papel"){
        console.log('Gana Tenn');
    }else if (player == "Piedra" && mach == "Lagarto"){
        console.log('Gana el jugador');
    }else if (player == "Piedra" && mach == "Spock"){
        console.log('Gana Tenn');
    }else if (player == "Papel" && mach == "Piedra"){
        console.log('Gana el jugador');
    }
}