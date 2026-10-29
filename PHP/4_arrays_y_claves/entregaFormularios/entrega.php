<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php 
    ini_set("display_errors",1);
    error_reporting(E_ALL);
    ?>

</head>
<body>
    
    <h3>Ejercicio Entregable</h3>
    <p></p>
    <form action="" method="post">
        <input type="hidden" name="formularios" value="ejEntrega">
        <label for="">A. Introduce una serie de numeros separados por comas: </label>
        <input type="text" name="numerosA" id=""><br>
        <label for="">B. Introduce una serie de numeros separados por comas:</label>
        <input type="text" name="numerosB" id=""><br>
        <input type="submit" value="Enviar">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        //Entro si y solo si se ha enviado datos a través de un formulario con el método post
        if (isset($_POST["formularios"]) && $_POST["formularios"] == "ejEntrega") {
            //ES UN STRING
            $numerosA = $_POST["numerosA"];
            $numerosB = $_POST["numerosB"];
            
            //LE QUITAMOS LAS COMAS CON EXPLODE Y TRANFORMAMOS A ARRAY DE NÚMEROS
            //A
            $numerosA = explode(",", $numerosA);
            var_dump($numerosA);
            //B
            $numerosB = explode(",", $numerosB);
            var_dump($numerosB);

            //creamos array union y metemos los no repetidos en el array union de A y B: 
            $union = [];
            $copiaA = $numerosA;
            $copiaB = $numerosB;
            for($i=0;$i<count($numerosA);$i++){
                if(!array_search($copiaA[$i],$union)){
                    array_push($union,$numerosA[$i]); 
                } 
            }
            for($i=0;$i<count($numerosB);$i++){
                if(!array_search($copiaB[$i],$union)){
                    array_push($union,$numerosB[$i]); 
                } 
            }

            //tengo que poner algo para que el 1 me apareca solo 1 vez, porque es el que se repite
            $copiaunion = $union;
            $unionreal = [];
            for($i=0;$i<count($copiaunion);$i++){
                if(array_search($copiaunion[$i],$union)){
                    array_push($unionreal,$copiaunion[$i]); 
                } 
            }
            
            $unionreal = implode(",",$unionreal);
            
            
            echo "<pre>";
            echo "La unión de los dos conjuntos es: $unionreal";
            echo "</pre>";
        }
    }
    ?>

    <h3>Ejercicio 4</h3>
    <p>Introduce las notas de varias asignaturas de un solo estudiante y obtén las siguientes estadísticas: Total de notas // nota máxima // Nota mínima // Media aritmética // El número de aprobados // el número de suspensos</p>
    <p>En el formulario tendremos dos campos de texto, en el primero definiremos el nombre de las asignaturas separadas por comas y en el segudo las potas de cada asignatura separadas por coma. Para trabajar este ejercicio, teneis que construir un array asociativo donde las claves son el nombre de cada asignatura y el valor es la nota de dihca asignatura. Después de mostrar todas las estadísticas, mostrar una tabla con tres columnas. Asignatura || Nota || Calificación. Mostrar la fila en verde si exsta aprobado y en rojo si ha suspendido la asignatura. </p>

    <form action="" method="post">
        <input type="hidden" name="formularios" value="ejEntrega">
        <label for="">Introduce una serie de asignaturas separadas por comas: </label>
        <input type="text" name="asignaturas" id=""><br>
        <label for="">Introduce una serie de notas separadas por comas:</label>
        <input type="text" name="notas" id=""><br>
        <input type="submit" value="OK">
    </form>

     <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        //Entro si y solo si se ha enviado datos a través de un formulario con el método post
        if (isset($_POST["formularios"]) && $_POST["formularios"] == "ejEntrega") {
            //creamos array de asignaturas y array de notas
            $arrayasignaturas = $_POST["asignaturas"];
            $arraynotas = $_POST["notas"];
            
            //LE QUITAMOS LAS COMAS CON EXPLODE Y TRANFORMAMOS A ARRAY DE NÚMEROS
            //Asignzaturas
            $arrayasignaturas = explode(",", $arrayasignaturas);
            var_dump($arrayasignaturas);
            //Numeros
            $arraynotas = explode(",", $arraynotas);
            var_dump($arraynotas);

            if(count($arraynotas) !=  count($arraynotas)){
                echo "Numero de asignaturas distinto al de notas. Vuelve a introducir"; 
            }
            

            $arraycompleto = [];

            for($i=0;$i<count($arra);$i++){
                $arraycompleto[$arrayasignaturas]=$arraynotas; 
            }

        }
    }
    ?>



</body>
</html>