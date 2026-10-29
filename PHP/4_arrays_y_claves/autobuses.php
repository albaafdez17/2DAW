<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Subapartado 1</h2>
    <p>
        Dado los datos que aparecen en la pizarra, crear un array bidimensional indexado con los datos de todos los viajes que tiene mi empresa de autobuses. Añadir dos viajes más en el que el primer viaje tenga como destino "Torremolinos" y el segundo viaje tenga como origen "Málaga"
    </p>

    <h2>Respuesta ejercicio 1</h2>
    <p>array creado. Creamos el array bidimensional de la pizarra (indexado)</p>
    <?php 

    $autobus =[
        ["Málaga", "Ronda", 100, 15],
        ["Churriana", "Málaga", 20, 3],
        ["Málaga", "Granada", 90, 12],
        ["Torremolinos", "Málaga", 30, 3,5],
        ["Benalmádena", "Torremolinos", 10, 4],
        ["Málaga", "Nerja", 60, 7]
    ];

    ?>

    <h2>Subapartado 2</h2>
    <p>
        Manteniendo el orden original de mi array, enseña en el navegador gracias a la función print_r el array ordenado por duración de más largo a más corto
    </p>

    <h2>Respuesta ejercicio 2</h2>
    <?php 

    //voy a guardar una copia del array autobus para que así al ordenarlo no se me pierda el original

    $copiabus = [
        ["Málaga", "Ronda", 100, 15],
        ["Churriana", "Málaga", 20, 3],
        ["Málaga", "Granada", 90, 12],
        ["Torremolinos", "Málaga", 30, 3.5],
        ["Benalmádena", "Torremolinos", 10, 4],
        ["Málaga", "Nerja", 60, 0]
    ];

    $duracion = array_column($copiabus,2); //aqui estoy diciendo que mi columna 2 del array copia es la duracion del trayecto, para después poder ordenarla por esa columna. 

    array_multisort($duracion, SORT_DESC, $copiabus);

    echo "<pre>"; 
    print_r($copiabus); 
    echo "</pre>"; //lista ordenada por duración de mayor a menor
    
    ?>

    <h2>Subapartado 3</h2>
    <p>Gracias a una función llamada tabla(), Crea una tabla con la siguiente estructura:</p>


    <table border="1">
        <thead>
            <tr>
                <th>Origen</th>
                <th>Destino</th>
                <th>Duración</th>
                <th>Precio</th>
            </tr>
        </thead>
        <tbody>

            <?php 
            //ponemos también en el mismo foreach el match para los colores
            foreach($copiabus as $viajes){
                //metemos info en cada columna
                list($origen, $destino, $duracion, $precio) = $viajes;

                //if para mostrar el mensaje del precio
                $mensajito = "";
                if($precio<=0){
                    $mensajito = " Viaje no disponible";
                }

                //match para controlar los colores de las columnas
                $color = match($precio){
                    1,2,3,4,5,6,7,8,9  => "blue",
                    10,11,12,13,14  => "green",
                    default => "purple"
                };

                foreach($viajes as $info){
                }
                ?>
                <tr style="background-color: <?php echo $color ?>;">
                    <td><?php echo $origen ?></td>
                    <td><?php echo $destino ?></td>
                    <td><?php echo $duracion ?></td>
                    <td><?php echo $precio.$mensajito?></td>
                </tr>
                <?php
                }
    
                ?>
                
            
            

        </tbody>
    </table>
    <p>
        Si el precio del viaje es menor o igual a cero, se mostrará "Viaje no disponible". </br>
        Si el precio está comprendido desde 1 (inclusive) hasta 10 sin incluir, se coloreará la fila entera de color azul. SI el precio está comprendido desde 10 (inclusive) hasta 15 sin incluir, se coleará la fila entera de color verde. 
        Si el precio es mayor o igual a 15, se coloreará de morado. 
    </p>
    <h2>Subapartado 4</h2>
    <p>
        Modifica la función tabla para que sea capaz de recibir dos parámetros. Uno que indique la columna (en formato entero) y otro que indique el tipo de ordenación. tabla(0,SORT_DESC); La función ahora deberá de mostrar la tabla pero con los datos del array ordenados según la columna y el tipo de ordenación. 

        <!-- tabla(columna, sort)-->
    </p>
    <h2>Subapartado 5</h2>
    <p>
        Modifica la tabla de la función para que tenga una columna más llamada tipo. Que dependiendo de la duració de cada vaije, contendrá una cadena u otra.
    </p>
    <ul>
        <li>Duración <=30 --- COrta distancia</li>
        <li>Duración > 30 && <= 120 --- Media distancia</li>
        <li>Duración > 120 -- Larga distancia</li>
    </ul>

    
</body>
</html>