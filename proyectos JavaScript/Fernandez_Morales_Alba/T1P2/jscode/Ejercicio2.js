window.onload = function(){
    let contenedor = document.getElementById("contenedor"); 
    let botones = document.querySelectorAll("input[type='button']");
    
    //boton añadir
    botones[0].onclick = function(){

        //habilito boton limpiar
        if(botones[0].disabled==false){
            botones[1].disabled=false;
        }

        //creo la etiqueta de la imagen
        let imagen = document.createElement("img");

        //enganchamos la imagen al contenedor
        contenedor.appendChild(imagen); 

        //le introduzco la clase foto para maquetarla
        imagen.className="foto";

        //Pregunta el nombre de la imagen
        let nombre = prompt("Introduce el nombre de la imagen");
        if(nombre == ""){
            imagen.setAttribute("src", "img/terra.jpg"); 

        }else{
            if(nombre=="aurora"){
                imagen.setAttribute("src", "img/aurora.jpg");
            }else if(nombre=="gadget"){
                imagen.setAttribute("src", "img/gadget.jpg");

            }else if(nombre=="gideon"){
                imagen.setAttribute("src", "img/gideon.jpg");

            }else if(nombre=="muriel"){
                imagen.setAttribute("src", "img/muriel.jpg");

            }else if(nombre=="steel"){
                imagen.setAttribute("src", "img/steel.jpg");

            }else if(nombre=="terra"){
                imagen.setAttribute("src", "img/terra.jpg");

            }
        }

        

    //boton limpiar
    botones[1].onclick = function(){
        contenedor.nextElementSibling.remove(); //no me deja eliminarlo
    }

        
        
    }
}