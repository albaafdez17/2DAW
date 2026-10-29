<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3>Ejercicio 1</h3>
    <p>La biblioteca del insti tiene los siguientes libros: "El quijote", "1984", "Dune" "Matilda"</p>
    <ol>
        <li>Crea la función "unirConComas($array)", que devuelva un texzto con todos los valores separados por coma (sin coma al final). La usarás en el resto de ejercicios</li>
        <li>Añade "Momo", "Drácula" y "El perfume" al final de la biblioteca</li>
        <li>Se piden prestados Dune y Hamlet. Para cada petición, busca la posición del libro y si está, crea un array nuevo sin ese libro, de modo que no queden huecos y muestra lo siguiente: "Prestado: Dune" Y en caso de que el lirbo no lo tenga la bilbioteca, "No disponible: Hamlet"</li>
        <li>MUestra la  lista numerada (1. EL Quijote, 2. 1984...), el total de libros y, en una sola línea, los libros en orden inverso</li>
    </ol>

    <h3>Ejercicio 2</h3>
    <p>Una tienda informática guarda su stock en un array asociativo con la siguiente forma producto -> unidades: </p>
    <ol>
        <li>Crea un stock original en el que tengamos 12 teclados, cero ratones, 5 monitores, 3 webcams y 0 altavoces</li>
        <li>Crear una función "estadoStock(unidades)" que devuelva "Agotado(0)", "Pocas unidades(1 a 3)" o "Disponible" (más de 3). Hazlo con un match</li>
        <li>Crear una tabla inicial con tres columnas. La primera contendrá el nombre del producto, la segunda el número de unidades disponibles y el tercero el resultado de la función estadoStock. Además, si no quedan unidades, la fila tendrá el color de fondo rojo. Si quedan pocas, amarillo y si está disponible, azul</li>
        <li>LLega un pedido de reposición: raton 10, webcam 2, mirófono 7. Suma las unidades a los productos existentes. Si el producto no existía antes, aḉadelo e indica en un echo "nuevo producto" </li>
        <li>Falta el subapartado de comprar productos llamando a la función comprar</li>
        <li>Mostrar en la función de la tabla (si lo teneis hecho en una funcion y sino, creais la fnción), nada más terminar de crear la tabla entera, mostrar debajo el total de unidades de productos que tengo en mi tienda, el producto con más unidades. </li>
    </ol>

    
    <?php
    // $stock = [];
    // $stock["teclado"];

    $stock = ["teclados" => 12, "ratones" => 0, "monitores" => 5, "webcams" => 3, "altavoces" => 0];

    function estadoStock($array){
        $agotado = 0;
        $pocasunis = 0;
        $disponible = 0;
        foreach($array as $producto => $unidades){
            if($unidades == 0){
                $agotado++;
            }elseif ($unidades>=1 && $unidades<=3) {
                $pocasunis++;
            }else{
                $disponible++; 
            }
        }

        return "agotado: ".$agotado." pocas unidades: ".$pocasunis." Disponible: ".$disponible;

    }

    echo estadoStock($stock);
    ?>

    <?php 
    $reposicion = ["raton" => 10, "webcam" => 2, "microfono" => 7];

    foreach($reposicion as $producto => $unidades){
        if(in_array($producto,$stock)){
            $valor = $stock[$producto] + $unidades;
            $stock[$producto] = $valor;
        }else{
            $stock[$producto] = $unidades;
        }
    }


    
    echo "<br>"; 
    echo estadoStock($stock);
    echo "<br>";

    foreach($reposicion as $producto => $unidades){
        $cantidad = 0;
        
    }



    ?>


    <table border="1">
        <thead> 
            <tr>
                <th>nombre producto</th>
                <th>numero unidades</th>
                <th>estado Stock</th>
            </tr>
        </thead>
        <tbody>
            <?php
            foreach($stock as $nombre => $unidad){
                $color = match($unidad){
                    0 => "red",
                    1,2,3 => "yellow",
                    default => "lightblue"
                };
            ?>

            <tr style="background-color: r;"> 
                <td><?php echo $nombre ?></td>
                <td><?php  echo $unidad ?></td>
                <td><?php  echo estadoStock($unidad)?></td>
            </tr> 

            <?php
            }
            ?>
            
            
        </tbody>
    </table>

    
        


    ?>

</body>
</html>