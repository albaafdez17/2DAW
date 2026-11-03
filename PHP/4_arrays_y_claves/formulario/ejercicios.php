<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php
    ini_set("display_errors", 1);
    error_reporting(E_ALL); 
    ?>
</head>
<body>
    <h3>Ejercicio 5</h3>
    <p>Dado un array bidimensional, crear un formulario con dos listas deslegables e el que en la primera lista se especifique a través de qué columna vamos a ordenar y la segunda especificará el orden que se aplicará</p>
    <form action="tabla.php" method="post">
        <select name="columna">
            <option value="id">ID</option>
            <option value="id">NOMBRE</option>
            <option value="salario">ID</option>

        </select>

    </form>
    
</body>
</html>