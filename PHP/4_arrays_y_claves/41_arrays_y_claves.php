<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        //1. ARRAY INDEXADO: clvaes numéricas automática desde 0
        $salto = "<br>";
        $frutas = []; //creamos un array vacío 
        $frutas = ["Manzana", "Pera", "Piña"]; //creamos un array con valores ya predefinidos
        echo $frutas[0].$salto; 
        //echo $frutas; no podemos hacer un echo de un array entero

        echo "<pre>";
        print_r($frutas);
        echo "</pre>"; 

        var_dump($frutas); 

        echo $frutas[9];

        //2. ARRAYS ASOCIATIVOS: son arrays cuya particularidad es que accedemos a los valores de dichos arrays  a través de claes y no por posiciones 
        $personas = ["2adaw" => "Samu", "2bdaw" => "Menganito", "2mkt" => "fulanita", "2com" => "Fulgencio"];
        echo $salto.$personas["2adaw"].$salto;

        //Como meter valores nuevos a mi array ya creado de antes
        $personas["2trsde"] = "Vini"; 

        // con array_push($personas, "Alba", "Pepe", "Lidia")

        $personas[] = "Lamine"; 
        $personas[] = "Nico"; 
        $personas["2adaw"] = "Nico"; 
        echo "<pre>";
        print_r($personas);
        echo "</pre>"; 

        //3. AÑADIR, MODIFICAR Y ELIMINAR ELEMENTOS DENTRO DE UN ARRAY
        print_r($frutas);
        $frutas[] = "Coco";
        $frutas[9] = "Plátanos";
        $frutas[] = "Banana"; 
        print_r($frutas);


        echo $salto; 

        unset($frutas[0]); //cargarme la posición y el valor dentro de un array
        print_r($frutas); 
        //unset($frutas); 
        //echo $salto."Mostrando abajo el array frutas".$salto;
        //print_r($frutas); 
        $frutas[1] = "Sandía";
        print_r($frutas); 

        //count($array) => sirve para sacar el tamaño de un array
        echo "Tamaño del array frutas: ".count($frutas)."Tamaño del array personas: ". count($personas).$salto; 

        //array_values($array)
        echo "<pre>";
        print_r(array_values($frutas)); 
        echo "</pre>"; 
        $frutas = array_values($frutas); //ordenar el propio array frutas 
        
        $personas = array_values($personas);//transformar el array ASOCIATIVO personas a un array INDEXADO ordeando por posiciones
        echo "<pre>"; 
        print_r($personas);
        echo "</pre>"; 
        
        //4. COMPROBAR CLAVES 
        $animales = ["mamifero" => "gato", "reptiles" => "serpiente", "aves" => "albatro", "peces" => "martillo"];

        // isset($variable) => si la función tiene algún valor distinto de nulo 
        var_dump(isset($animales["anfibio"])); 
        
        //array_key_exist(clave a probar, $array)=> si existe esa clave en el array
        var_dump(array_key_exists("insectos",$animales)); //false
        var_dump(array_key_exists("mamifero",$animales)); //true 

        //operador de fusión nulo => ?? sirve para coomprobar si una variable tiene un valor distinto de nulo y, además, en el caso en el que dicha variable tenga valor nulo, se mostrará un valor alternativo. 
        echo $animales["anfibio"] ?? "no existe"; 
        //echo (2<3) ? "hola" : "adios";
        $animales["anfibio"] = "rana"; 
        echo $animales["anfibio"] ?? "no existe"; 

        echo $salto;
        // 5. COMPARACIÓN
        $a = ["uno" => 1, "dos" => 2];
        $b = ["dos" => 2, "uno" => 1];

        echo $salto;

        var_dump($a == $b); //devuelve true: mismas asociaciones clave-valor
        var_dump($a === $b); //false: el orden de insercción de claves-valores es distinto

        $a = [1,2];
        $b = ["1","2"];
        echo $salto; 

        var_dump($a == $b); //devuelve true: porque son los mismos valores
        var_dump($a === $b); //false: pq aunque tengan los mismos valores, tienen tipos distintos

        $p1 = ["Ana", "Luis"];
        $p2 = ["Luis", "Ana"]; 

        echo $salto; 

        var_dump($p1 == $p2); //false
        var_dump($p1 === $p2); //false


    ?>
</body>
</html>