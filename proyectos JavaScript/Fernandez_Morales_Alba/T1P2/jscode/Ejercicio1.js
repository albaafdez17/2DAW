window.onload = function(){
    let botones = document.getElementsByClassName("botones");
    let mayor = 0;
    let menor = 0;

    let divIz = document.getElementById("ladoIzq") ;
    let divDer = document.getElementById("ladoDer"); 
    
    botones[1].disabled=true;
        
    

    botones[0].onclick = function(){


        //creo dos numeros aleatorios
        let aleIz = parseInt(Math.random()*(50-1+1)+1);

        let aleDer = parseInt(Math.random()*(50-1+1)+1);

        //ahora 
        let izquierda = document.createTextNode(aleIz); 

        let derecha = document.createTextNode(aleDer); 

        divIz.appendChild(izquierda); 
        divDer.appendChild(derecha);

        //desabilito generar
        botones[0].setAttribute("disabled","true"); 

        if(botones[0].disabled==true){
            botones[1].disabled=false;
        }

        mayor = parseInt(divIz.textContent);
        menor = parseInt(divDer.textContent);

        if(mayor>menor){
            mayor = divIz.textContent;
        }else{
            mayor = divDer.textContent
        }

    }

    //boton comparar

    botones[1].onclick = function(){
        let divSalida = document.getElementById("salida"); 
        let mayorcito = document.createTextNode(mayor);
        divSalida.appendChild(mayorcito);


        //divDer.textContent="";
        //divIz.textContent="";
        //divSalida.textContent="";
        
    }


    

    
}