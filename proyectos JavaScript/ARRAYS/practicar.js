//1. Crea una función que  reciba un array (del tamaño que sea) y un numero. A continuación, la función debe devolver el número de veces que aparece ese número en el arrat y la PRIMERA aparición de este. Requisito: hacerlo todo recorriendo en el array y la PRIMERA aparición de este.
/*
function ejercicio1(miarray,num){
    let numveces=0;
    let aparicion = 0;
    for(let i=0;i<miarray.length;i++){
        if(miarray[i]==num){ 
            if(numveces == 0){
                aparicion = i;
            }
            numveces++;
        }
    }

    return [numveces, aparicion]; 

}

// let miarray = [9,4,7,9,4,1,1,5]; 
//let micadenita = ejercicio1(miarray,1);
console.log(micadenita); 

//2. Crea una función que reciba una matriz de cualquier tamaño y devuelva true o false si la matriz es simétrica o no.

 
function ejercicio2(mimatriz){
    for(let i=0;i<mimatriz.length;i++){
        for(let j=i;j<mimatriz[i].length;j++){
            if(mimatriz[i][j]!=mimatriz[j][i]){
                return false; 
            }
        }
        
    }
    return true; 
}

//mimatriz2 = [[1,8,3],[2,5,6],[3,6,9]]; 
console.log(ejercicio2(mimatriz2)); 


// Función que recibe una matriz de numeros y un array de numeros. Devuelve una matriz donde cada fila de esa matriz queda multiplicada por el correspondiente numero del array. 
*/


/*
let mimatriz = [[1,2,3],[4,1,5],[2,1,6]];
let miarray = [2,3,1];

function ejercicio3(mimatriz, miarray){
    let nuevamatriz = [];
    for(let i=0;i<mimatriz.length;i++){
        for(let j=0;j<mimatriz[i].length;j++){
            multiplica = mimatriz[i][j] * miarray[i]; 
            nuevamatriz[i][j].push(multiplica); 
        }
    }

    return nuevamatriz; 
}



console.log(ejercicio3(mimatriz,miarray));
*/

//FUncion que recibe una matriz de numeros de cualquier tamaño y un array de coordenadas del mismo tamaño que la amtriz. Una coordenada son DOS valores, luego los elementos de ese array serán de DOS valores. P eje: 

/*
function ejercicio4(matriz,posiciones){

    for(let i=0;i<matriz.length;i++){
        for(let j=0;j<matriz[i].length;j++){
            if([i][j]==posiciones[i]){
                
            }
        }
    }
}
    */


