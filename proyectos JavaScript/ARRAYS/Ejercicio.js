/*Crea un botón en HTML y asocia la función que hay abajo.
    * pide DOS NUMEROS enteros (a y b)
    * Descubrir cual es el mayor y cual es el menor
    * Crea un array con valores que van desde el menor hasta mayor
    Ejemplo:
    Menor = 2
    Mayor = 7
    Crea el array [2,3,4,5,6,7]

*//*

function crearArray(){
    //pedimos el primer numero
    let num1 = parceInt(prompt("Introduce el primer numero: ")); 
    //pedimos el segundo numero
    let num2 = parceInt(prompt("Introduce el segundo numero: ")); 

    let lista = new Array(5); 

    if(num1 < num2){
        lista.unshift[i]=num1;
        let res = num1;
        for(let i=1; i<lista.length-1; i++){
            res ++;
            lista[i]= n
        }
    }
    else{
        lista.unshift[i]=num2; 

    }
}

*/

let arr = new Array; 
arr = [7, -20, -3, 15, 10, 22]; 
let suma = 0;

function sumapositivos(){
    for(let i=0; i<arr.length; i++){
        if(arr[i]>0){
            suma += arr[i]; 
        }
    }
    return suma;
}

let sumita = sumapositivos();
console.log(sumita);
