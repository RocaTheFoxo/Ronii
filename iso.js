function ikä() {
    let ikä = prompt("Mikä on sinun ikäsi?");

    if (ikä <= 18) {
        document.getElementById("demoni").innerHTML = "Olet alaikäinen, hahaha!";
    } 
    
    else if (ikä >= 18 && ikä < 70) {
        document.getElementById("demoni").innerHTML = "Olet täysi-ikäinen";
    }

    else if (ikä >= 70) {
        document.getElementById("demoni").innerHTML = "Vanhus?!?!?!"
    }

    else
    {
        document.getElementById("demoni").innerHTML = "hemmetin alieni";
    }
}

function loop() {
    let numero = 0
    while (numero < 100) {
        document.getElementById("looppi").innerHTML = numero
        numero++
    }
}