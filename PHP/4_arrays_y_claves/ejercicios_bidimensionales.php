<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php 
    ini_set("display_errors", 1); //para mostrar los errores (teneis que saber que hace la funcion)
    error_reporting(E_ALL); //especificar que errores se van a mostrar
    ?>
</head>
<body>
    <h2>Ejercicio 1</h2>
    <form action="" method="get">
        <label>Elija el tamaño de la matriz: <input type="number" name="tamanio"></label>
        <button>Enviar</button> 
        <?php 
        global $matriz;
        if($_SERVER["REQUEST_METHOD"] == "GET"){
            //me meto en el if si me ha llegado los datos de un formulario que usa el método POST
            $tamanio = $_GET["tamanio"];
            if(isset($_GET["tamanio"]) && $_GET["tamanio"]){
                echo "<p>Introduzca un numero positivo</p>";
            }else{
                
                for($i=0;$i<$tamanio;$i++){
                    $matriz = []; 
                    for($j=0;$j<$tamanio[$i];$j++){
                        $matriz[$i][$j] = rand(1,50);
                    }
                }
            }
            
            for($i=0;$i<$matriz;$i++){
                for($j=0;$j<$matriz[$i];$j++){
                    $matriz
                }
            }

        }
        
        ?>
    </form>

</body>
</html>