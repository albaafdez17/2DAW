function ejercicio25() {

    let notas = [
        [7, 8, 6, 9],
        [5, 4, 6, 5],
        [9, 8, 10, 9],
        [6, 7, 5, 8],
        [3, 4, 2, 5]
    ];

    let aprobados = 0;
    let mayorMedia = 0;
    let alumnoMayor = 0;

    for (let i = 0; i < notas.length; i++) {
        let suma = 0;
        for (let j = 0; j < notas[i].length; j++) {
            suma += notas[i][j];
        }

        let media = suma / 4;
        console.log("Media alumno " + (i + 1) + ": " + media);

        // Cuantos alumnos tienen la media igual o superior a 5
        if (media >= 5) aprobados++;

        // Que alumno tiene la media más alta
        if (media > mayorMedia){
            mayorMedia = media;
            alumnoMayor = i + 1;
        }

    }

    console.log("Alumnos aprobados: " + aprobados);
    console.log("Alumno con mayor media: alumno " + alumnoMayor);
}

ejercicio25();