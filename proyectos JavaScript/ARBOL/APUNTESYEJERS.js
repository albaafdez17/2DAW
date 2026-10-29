

//Ejercicio de clase
window.onload = function () {
    let boton = document.querySelector("input[type='button']");

    boton.onclick = function () {
        let hijos = document.querySelector("section").children;

        let papi = document.querySelector("section");

        while (papi.firstChild != null) {
            papi.removeChild(papi.firstChild);
        }
    };
};


//Ejercicio 20
window.onload = function(){
    let boton = document.getElementsByClassName("botones");
    let textoparrafo = document.getElementsByClassName("parrafo1");
    let texto = textoparrafo[0].innerHTML; 
    let cuerpo = document.getElementsByTagName("body"); 

    //GENERAR
    boton[0].onclick = function(){
        //creo etiqueta
        let etiqueta = document.createElement("p");
        //crea el nodo de texto
        let nodo = document.createTextNode(texto); 
        //meter el texto al parrafo que he creado.
        etiqueta.appendChild(nodo);
        //le cambio la clase
        etiqueta.className="parrafo2";
        //lo engancho en el arbol html
        cuerpo[0].appendChild(etiqueta);
        let nuevos = document.getElementsByClassName("parrafo2"); 
    }

    //BORRAR VIEJO
    boton[1].onclick = function(){
        textoparrafo[0].remove(); 
        boton[1].disabled=true;
        let nuevos = document.getElementsByClassName("parrafo2"); 
    }

    //BORRAR NUEVOS
    let nuevos = document.getElementsByClassName("parrafo2");
    boton[2].disabled = true;
    if(nuevos.length>0){
        boton[2].disabled = false;
        boton[2].onclick = function(){
            nuevos[0].remove(); 
        }
    }
    

}