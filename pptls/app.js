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
    let random = getRandom();

    switch(random){
        case 0: 
            mach = op1;
            console.log('Soy la opcion ' + mach);
            return mach;
            break;
        case 1: 
            mach = op2;
            console.log('Soy la opcion ' + mach);
            return mach;
            break;
        case 2: 
            mach = op3;
            console.log('Soy la opcion ' + mach);
            return mach;
            break;
        case 3: 
            mach = op4;
            console.log('Soy la opcion ' + mach);
            return mach;
            break;
        case 4: 
            mach = op5;
            console.log('Soy la opcion ' + mach);
            return mach;
            break;
    }
}

function game(player, mach){
    console.log(player + " , " + mach);

    if(player == mach){
        console.log('Es un empate');
        return 'empate';
    }else if (player == "Piedra" && mach == "Tijeras"){
        console.log('¡Piedra rompe tijeras! Gana el jugador');
        return 'Jugador';
    }else if (player == "Piedra" && mach == "Papel"){
        console.log('Gana Tenn');
        return 'Tenn';
    }else if (player == "Piedra" && mach == "Lagarto"){
        console.log('Gana el jugador');
        return 'Jugador';
    }else if (player == "Piedra" && mach == "Spock"){
        console.log('Gana Tenn');
        return 'Tenn';
    }else if (player == "Papel" && mach == "Piedra"){
        console.log('Gana el jugador');
        return 'Jugador';
    }else if (player == "Papel" && mach == "Tijeras"){
        console.log('Gana Tenn');
        return 'Tenn';
    }else if (player == "Papel" && mach == "Lagarto"){
        console.log('Gana Tenn');
        return 'Tenn';
    }else if (player == "Papel" && mach == "Spock"){
        console.log('Gana el jugador');
        return 'Jugador';
    }else if (player == "Tijeras" && mach == "Piedra"){
        console.log('Gana Tenn');
        return 'Tenn';
    }else if (player == "Tijeras" && mach == "Papel"){
        console.log('Gana el jugador');
        return 'Jugador';
    }else if (player == "Tijeras" && mach == "Lagarto"){
        console.log('Gana el jugador');
        return 'Jugador';
    }else if (player == "Tijeras" && mach == "Spock"){
        console.log('Gana el jugador');
        return 'Jugador';
    }else if (player == "Lagarto" && mach == "Piedra"){
        console.log('Gana Tenn');
        return 'Tenn';
    }else if (player == "Lagarto" && mach == "Papel"){
        console.log('Gana el jugador');
        return 'Jugador';
    }else if (player == "Lagarto" && mach == "Tijeras"){
        console.log('Gana Tenn');
        return 'Tenn';
    }else if (player == "Lagarto" && mach == "Spock"){
        console.log('Gana el jugador');
        return 'Jugador';
    }else if (player == "Spock" && mach == "Piedra"){
        console.log('Gana el jugador');
        return 'Jugador';
    }else if (player == "Spock" && mach == "Papel"){
        console.log('Gana Tenn');
        return 'Tenn';
    }else if (player == "Spock" && mach == "Tijeras"){
        console.log('Gana el jugador');
        return 'Jugador';
    }else if (player == "Spock" && mach == "Lagarto"){
        console.log('Gana Tenn');
        return 'Tenn';
    }else{
        console.log('Ocurrió algo inesperado');
        return 'Error';
    }
}

btn1.addEventListener('click', ()=>{
    let winner = game('Piedra', machineChoice());
    console.log(winner);

    event.preventDefault();
});