

window.onload = function(){

    let boton = document.querySelector("input[type='button']");
    let filas = 0;
    let columnas = 0;
    let solucion = document.getElementsByClassName("solucion"); 

    let contador = 0;

    boton.onclick = function(){
        //filas
        do{
            filas = parseInt(prompt("Introduce un numero de filas: "));
        }while(filas>10 && filas<0); 

        //columnas
        do{
            columnas = parseInt(prompt("Introduce un numero de columnas"));
        }while(columnas>10 && columnas<0);
    }


    //creo el elemento tabla que es donde voy a meter los tr y td
    let tabla = document.createElement("table");

    for(let i=0;i<filas;i++){
        contador++;
        //crea la etiqueta
        let etiquetaF = document.createElement("tr");
        //creo el texto
        let texto = document.createTextNode("");
        //meto el texto en la etiqueta creada y lo llamo fila
        let fila = etiquetaF.appendChild(texto);
        
        //engancho fila a la tabla
        tabla.appendChild(fila);
        

        //dentro de cada fila creo otro "array"
        for(let j=0;j<columnas;j++){
            let etiquetaC = createElement("td"); 

            //creo el texto con el numero de la fila
            let numero = document.createTextNode(contador);
            //meto el numero en la etiqueta creada
            let columna = etiquetaC.appendChild(numero); 
            

            //engancho a la fila de la tabla la columna
            fila[i].appendChild(columna);
        }

        //no se me dibuja nada 
    }


} 
