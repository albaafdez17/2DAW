function ejercicio13(){ 

 
    let num1= parseInt(prompt("Introduce un número: ")); 
    let num2= parseInt(prompt("Introduce otro número: ")); 

 
    let mayor; 
    let menor; 

 

    if(num1<num2){ 
        menor=num1; 
        mayor=num2; 

    } else{ 
        menor=num2; 
        mayor=num1; 
    } 

 

    let lista = []; 
    for(let i=menor; i<mayor; i++){ 
        lista.push(i); 
    } 

 

    alert("El array es: " + lista); 
}