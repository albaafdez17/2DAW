function ejercicio14() { 

 

    let tamaño = parseInt(prompt("¿De qué tamaño quieres el array?")); 

 

    let numeros = []; 

 

    // Introducimos los números 

    for (let i = 0; i < tamaño; i++) { 

        let numero = parseInt(prompt("Introduce el número " + (i + 1) + ":")); 

        numeros.push(numero); 

    } 

 

    let resultado = []; 

    let suma = 0; 

 

    // Calculamos las sumas parciales 

    for (let i = 0; i < numeros.length; i++) { 

        suma = suma + numeros[i]; 

        resultado.push(suma); 

    } 

 

    alert("Array original: " + numeros + "\n Sumas parciales: " + resultado); 

} 

 
