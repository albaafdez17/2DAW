// A.
function botonA(){
    let Antable = document.getElementsByTagName("table");
    let anchuranueva = parseInt(prompt("Introduce una nueva anchura: "));
    Antable[0].setAttribute("width",anchuranueva);
    let alturanueva = parseInt(prompt("Introduce una nueva altura: "));
    Antable[0].setAttribute("height",alturanueva);
    
    
}

function botonB(){
    let tabla = document.querySelector("table");
    let valor = parseInt(prompt("Introduce un valor para sumarlo al glosor: "));
    let suma = tabla.border + valor;
    table.border = suma;

}

function botonC(){
    let tabla = document.querySelector("table");

    let posi = tabla.getAttribute("align");
    switch (posi) {
        case "center": tabla.setAttribute("align","left"); break;
        case "left": tabla.setAttribute("align","right"); break;
        case "right": tabla.setAttribute("align","center"); break;
    }

}


//Crea un DIV con el número 0 en su interior. Bajo el DIV, coloca dos botones: uno para sumar y otro para restar.
// * Si se pulsa el botón para sumar, se incrementa en uno el número que hay en el DIV ese momento.
// * Si se pulsa el botón restar, se decrementa en uno el número que hay en el DIV en ese momento. 

function sumar(){
    let sumar = document.querySelector("div");
    let total = tabla.getAttribute("numero");
    total[0].
}