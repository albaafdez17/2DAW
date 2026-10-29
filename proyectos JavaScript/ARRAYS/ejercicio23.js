let posicion="";

function ejercicio23(matriz, numero){

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {

            if (matriz[i][j] === numero) {
                posicion = "["+i+","+j+"]";
                return true;
            }
        }
    }

        return false;

}

let mimatriz = [[1,2,3],[3,6,7],[3,2,6]];

// La función debe indicar si el número está en la matriz o no y su posición
if(ejercicio23(mimatriz,5)){
    console.log("El número está dentro de la matriz\n");
    console.log("Se encuentra en la posición "+posicion);
   
}
else{
    console.log("El número no está dentro de la matriz\n");
    console.log("Se encuentra en la posición [-1,-1]");
   
}



