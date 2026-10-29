//Ejercicio 1 ESTA PERFE YA LO ENTIENDO 

window.onload = function(){
    let botones = document.getElementsByTagName("button");
    let enlace= document.getElementsByTagName("a"); 

    botones[0].onclick = function(){
        alert(enlace[0].href + " " + enlace[0].innerText); 
    }
    botones[1].onclick = function(){
        enlace[0].innerText="he cambiado"; 
        enlace[0].href = "https://open.spotify.com/"; 
        alert(enlace[0].href + " " + enlace[0].innerText); 
    }
}

//EJERCICIO 2 YA ME SALEEEEEEE. Me faltan los otros dos botones
window.onload = function(){
    let botones = document.getElementsByTagName("button");
    let tabla = document.getElementsByTagName("table");

    botones[2].onclick = function(){
        alert(tabla[0].width + " " + tabla[0].getAttribute("height")); 
        let altura = parseInt(prompt("Introduce una nueva altura"));
        tabla[0].setAttribute("height",altura);
        alert(tabla[0].getAttribute("height"));
        let anchura = parseInt(prompt("Introduce una nueva anchura"));
        tabla[0].setAttribute("width",anchura);
    }
}

//EJERCICIO 3. ME SALEEEEEEEEEEEEEEE
window.onload = function(){
    let botones = document.getElementsByTagName("button");
    let parrafo = document.getElementsByTagName("div"); 

    botones[5].onclick = function(){
        let cuenta = parseInt(parrafo[0].innerText);
        parrafo[0].innerText = cuenta + 1; 
    }
    botones[6].onclick = function(){
        let cuenta = parseInt(parrafo[0].innerText);
        parrafo[0].innerText = cuenta - 1; 
    }
}



//EJERCICIO 4
window.onload = function(){

}


//EJERCICIO 5 LISTOOOOOOOOOOOOO
window.onload = function(){
    let parrafo = document.getElementById("parrafete"); 

    parrafo.onclick = function(){
        if(this.className=="uno"){    
        parrafo.className="dos"; 
        }else{
            parrafo.className="uno"; 
        }
    }
}


//EJERCICIO 8 LISTOOOOOOOOOOOOOOO
window.onload = function () {
      let imagen = document.getElementsByClassName("ejercicio8")[0];
      let original = imagen.getAttribute("src");   // guardamos la imagen original

      // Al pasar el ratón por encima: imagen nueva
      imagen.onmouseover = function () {
        this.setAttribute("src", "imagenes/SAM_2490.JPG");
      };

      // Al sacar el ratón: vuelve la original
      imagen.onmouseout = function () {
        this.setAttribute("src", original);
      };
};

//EJERCICIO 10 
window.onload = function(){
    let parrafo = document.getElementsByClassName("PAR");
    let pagina = document.getElementsByTagName("body")[0]; 

    parrafo[0].onmouseover = function(){
        pagina.style.backgroundColor=parrafo[0].style.backgroundColor;
    }
    parrafo[1].onmouseover = function(){
        pagina.style.backgroundColor=parrafo[1].style.backgroundColor;
        
    }
    parrafo[2].onmouseover = function(){
        pagina.style.backgroundColor=parrafo[2].style.backgroundColor;
        
    }
}

//EJERCICIO 19
window.onload = function(){
    let boton = document.getElementsByClassName("añadir");
    let lista = document.getElementsByTagName("ul"); 

    boton[0].onclick = function(){
        let cadena = prompt("Introduce un nuevo lenguaje de programacion: "); 
         //1.crear etiqueta
         let etiqueta = document.createElement("li"); 
         //2. crear el (nodo) de texto.
         let texto = document.createTextNode(cadena);
         //3. meter el texto al li que he creado
         etiqueta.appendChild(texto);
         //removeChild --> para eliminar
         //4. Engachamos ese li a la lista
        lista[0].appendChild(etiqueta); 
    }
}

//EJERCICIO 20 esta mal completar...


//EJERCICIO 22 JUYUUUUUUUUUUU
window.onload = function(){
    let contador = 0;
    let boton = document.querySelectorAll("button");
    let contenedor = document.getElementsByClassName("caja");

    boton[13].onclick = function(){
        contador++; 
        
        //crear etiqueta
        let etiqueta = document.createElement("p");
        //crear el nodo de texto
        let texto = document.createTextNode("Párrafo número " + contador); 
        //meter el texto al p q he creado
        etiqueta.appendChild(texto);
        //enganchamos el p al div
        contenedor[0].appendChild(etiqueta); 

    }
}





/*

function borde(){
    let elementos = document.getElementById("tabla");
    alert("Borde actual: " + elementos.border);
    let bordecito = parseInt(prompt("Introduce un nuevo borde"));
    elementos.border=bordecito;
}

function centrada(){
    let elementos = document.getElementsByTagName("table");
    if(elementos[0].align == "center")elementos[0].align = "right";
    else if(elementos[0].align == "right")elementos[0].align = "left";
    else if(elementos[0].align == "left")elementos[0].align = "center";
}




//Ejercicio 4
let imagenes = [
    "imagenes/SAM_2487.JPG",
    "imagenes/SAM_2492.JPG",
    "imagenes/SAM_2489.JPG",
    "imagenes/SAM_2490.JPG",
    "imagenes/SAM_2491.JPG"
];

let posicion = 0;

function avanzar() {
    if (posicion < imagenes.length - 1) {
        posicion++;
        document.getElementById("foto").src = imagenes[posicion];
    }
    if(posicion==imagenes.length-1){
        let boton = document.getElementById("avanzar");
        boton.disabled = true;
    }
}

function retroceder() {
    if (posicion > 0) {
        posicion--;
        document.getElementById("foto").src = imagenes[posicion];
    }
    if(posicion>0){
        let boton = document.getElementById("avanzar");
        boton.disabled = true;
    }
}



 
//Ejercicio 6
 function colores1(boton) {
    document.body.style.backgroundColor = boton.value;
}
    

//Ejercicio 8
function rollover(){
    let imagen1= document.getElementsByClassName("imagen1"); 

    imagen1.hidden = false
}


//Ejercicio 9
//Creo que no está del todo bien porque no sabemos de que color el realmente la web. 
function fondocolor(div){

    document.body.style.backgroundColor=div.style.backgroundColor; 
}

function volverfondo(){
    document.body.style.backgroundColor="white";
}
*/