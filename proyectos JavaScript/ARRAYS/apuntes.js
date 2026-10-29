//Coercion de Tipos de JS. Los pasa de un tipo a otro sin avisar

//Existen dos tipos: Implícita y explícita

//Implícita
/*
let una = 4;
let otra = "2"; 

let res = una+otra; //si fuera una-otra,  sí que resta y da 2
console.log(res); 
console.log(typeof(res));

*/
/*
let res = (0 == "0"); //si pongo === seria falso, compara tb tipo. Si es == sería true
console.log(res);
*/

//Explícita
/*
let una = -2;
let otra = false;

let res = "cadena";
console.log(String(una));
console.log(typeof(res)); 
*/


//ARRAYS
/*
let lista = new Array(5); 

for (let i = 0; i < lista.length; i++) {
    lista[i] = 6;
}

lista[2] = 9;
lista[0] = 4; 

lista[7] = 88; 

console.log(lista); 
*/
//cuatros for diferentes: el q ya conociamos. Y 3 más

/*
let lista = new Array(5); 

for(const elemento of lista){
    console.log(elemento); 
}*/
/*

let lista = [];
const TAM = 7;
let mayor = 8;
let menor = 2;

for(let i=0; i<TAM; i++){
    lista[i] = parseInt(Math.random()*(mayor-menor+1)+menor); 
}
lista.push(28);
lista.push(48);

lista.unshift(22); //añade desde el principio
lista.unshift(44); 

let res = lista.pop(); //elimina el último. SACA
res = lista.shift(); //saca el primero

console.log(lista);

//para concatenar una lista con otra: let res = otra.concat(lista)

*/

//Matrices
/*
let una = new Array(5);
let dos = new Array(5);
let tres = new Array(5);

let total = new Array(una,dos,tres); 

console.log(total); 
*/
/*

function arrays(){



let matriz = [[],[],[]]; 

let columnas = 3; 
let cadena = "";

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < columnas; j++) {
        if (i%2 == 0) matriz[i][j] = 12; 
        else matriz[i][j] = 1;
    }
}

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < columnas; j++) {
        if (i%2 == 0) matriz[i][j] = 12; 
        else matriz[i][j] = "0"+"1";
        cadena += matriz[i][j] + " ";
    }
    cadena += "\n";
}

alert(cadena);


}

*/

let numero = 6.345;
//numero+=""; //CHAPUZA

//numero = String(numero);
numero = numero.toString();

console.log(typeof(numero)); 

//MATH
//.round, .random, .ceil ... 
//cadenas

let frase = "Sigue al conejo blanco, Neo"; 
let resultado = frase.toUpperCase(); //toLowerCase. .charAt para ver que caracter es. .indexof para la aparición. .split 

