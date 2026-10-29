function ejercicio11(){ 

    let lista = []; 

 

    for (let i = 0; i < 10; i++) { 

        let numero = parseInt(prompt("Introduce el número " + (i + 1) + ":")); 

        lista.push(numero); 

 

        let max=0; 

        if(numero>max){ 

            max=numero;  

        } 

        let contador=0; 
        let posiciones=""; 

        if(lista[i]==max){ 

            contador++; 

            posiciones= " " + posiciones + i;  

        } 


         

    } 

 

    alert("El valor máximo es: "+max+"\n"+ 

        "Aparece" + contador + "veces" + "\n"+ 

        "Posiciones: "+posiciones 

    ); 

}

 

 

 