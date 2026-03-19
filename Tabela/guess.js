var numeroAlert=Math.floor(Math.random()*101 );

function ChecarAleatorio(){
    var numeroColocado = document.getElementById("numDigitado").value;

    if(numeroAlert== numeroColocado){
        document.getElementById("ID_DO_ELEMENTO").style.setProperty("background-color","green")
    }else{
        document.getElementById("ID_DO_ELEMENTO").style.setProperty("background-color","red")
    }
}