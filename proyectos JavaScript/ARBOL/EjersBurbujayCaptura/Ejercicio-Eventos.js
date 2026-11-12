

window.onload = function(){

    //Apartado A: Al hacer click en una celda, esa celda se pinta de AZUL. El boton LIMPIAR pone todas las celdas en color blanco.
    let celda = document.getElementsByClassName("celda");
    let tablero = document.getElementsByClassName("tablero");

    celda.addEventListener("click", function(e){
        if(e.target != e.currentTarget){
            e.target.style.backgroundColor = "blue";
        }
    })

    //Apartado B: Dado el array let colores = ['red','green', 'blue', 'yellow'] Y una variable que indica el color a pintar. Al hacer click en una celda, esa celda se pinta del color que indica la variable  anterior. Para cambiar de color hay que pulsar el boton DERECHO del raton.  ¿Como cambio de color? AL pulsar el boton derecho del raton, avanzo en el array de colores. AL llegar al fional, empiezo por el principio.

    let colores = ['red','green', 'blue', 'yellow']

    celda.addEventListener("contextmenu", function(e){
        if(e.target != e.currentTarget){
            for(let i=0;i<colores.length;i++){
                e.target.style.backgroundColor = colores[i]; 
            }
        }
    })

    //Apartado C: De manera aleatoria, añade a una de las celdas la ACTIVA. Usa los botones de la clase CONTROLES para mover "esa celda" por el tablero. Obviamente, no puede salirse del tablero. 
    


}