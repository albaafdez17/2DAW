function ejercicio24() {

    let matriz = [];

    for (let i = 0; i < 3; i++) {
        matriz[i] = [];

        for (let j = 0; j < 4; j++) {
            matriz[i][j] = parseInt((Math.random() * 31) + 10);
        }
    }

    console.log(matriz);

    let suma = 0;
    let mayor = matriz[0][0];
    let menor = matriz[0][0];
    let pares = 0;
    let impares = 0;


    for (let i = 0; i < matriz.length; i++) {

        let sumaFila = 0;

        for (let j = 0; j < matriz[i].length; j++) {

            suma += matriz[i][j];
            sumaFila += matriz[i][j];

            if (matriz[i][j] > mayor) mayor=matriz[i][j];

            if (matriz[i][j] < menor) menor = matriz[i][j];

            if (matriz[i][j] % 2 == 0) pares++;
            else impares++;
           
        }

        console.log("Suma de la fila " + i + ": " + sumaFila);
    }


    let media = suma / 12;

    console.log("Suma total: " + suma);
    console.log("Media: " + media);
    console.log("Mayor: " + mayor);
    console.log("Menor: " + menor);
    console.log("Números pares: " + pares);
    console.log("Números impares: " + impares);
}


ejercicio24();
