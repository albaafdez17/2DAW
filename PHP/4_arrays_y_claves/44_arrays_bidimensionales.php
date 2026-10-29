<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    //un array bidimensional tiene como característica que cada elemento del array principal contiene otro array
    $videojuegos = [
        ["Silksong", "Metroidva", 20],
        ["Elden Ring", "Souls", 60],
        ["Lego Batman", "Lego", 20],
        ["Cyberpunk", "RPG", 80]
    ];
    echo $videojuegos[0][0];

    $videojuegos[] = ["DSIII", "Souls", 40];

    foreach($videojuegos as $videojuego){
        foreach ($videojuego as $caracteristicas){
            echo $caracteristicas." ";
        }
        echo "<br>";
    }

    for($i=0; $i<count($videojuegos); $i++){
        for($j = 0; $j<count($videojuegos[$i]); $j++){
            $videojuegos[$i][$j]." ";
        }
        echo "<br>";
    }

    foreach($videojuegos as $jueguito){
        list($titulo, $categoria, $precio)= $jueguito; //list() sirve para sacar los elementos de un array INDEXADO siempre y cuando conozcamos la estructura del array
        echo "<p>$titulo: $precio </p>";   
    }

    echo "<pre>";
    print_r($videojuegos);
    echo "</pre>";
    $personas = [
        "Ana" => ["dni" => "12341234A", "edad"=> 23],
        "Alberto" => ["dni" => "12341234C", "edad"=> 29],
        "Samu" => ["dni" => "12341234Z", "edad"=> 19],
    ];

    $resultado = "<p>";
    foreach($personas as $nombre => $informacion){
        $resultado .="<p>$nombre: ";
        $tam = 0;
        foreach($informacion as $clave => $valor){


        }
    }

    //Sacar en un array indexado la columna de las categorías del array videojuegos y otro array, la columna de los precios 
    $categorias = [];
    $precios = [];

    foreach($videojuegos as $videojuego => $info){
        
    }

    ?>
</body>
</html>