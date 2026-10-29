//Ejercicio 5
function numero(){
    let num;
    let cuadrados; 
    do{
        num = parseInt(prompt("Dame un numero entero positivo N mayor a 0:"))

        if((num<=0) || (isNan(num))){
            alert("No es correcto"); 
        }
    }
    while((num<=0) || (isNan(num))); 

    //a 
    for (let i = 0; i <= num; i++) {
        if(num%i == 0){
            console.log(i);
            cuadrados += (i*i); //b
        }
    }

}


//Ejercicio 7

function paginaWeb(){
    
    let anio = parseInt(prompt("Introduce un año: "));

}