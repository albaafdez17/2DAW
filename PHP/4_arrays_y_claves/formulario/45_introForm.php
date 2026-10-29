<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3>Como funciona una petición<nav></nav></h3>
    <p>Cada vez que el navegador pide esta página, PHP se ejecuta desde cero y relllena unos arrays especiales (superglobales): $_GET, $_POST, $_REQUEST  y $_SERVER. Todos estos arrays son arrays completamente normales que funcionan exactamente igual que cuqluier otro array que nosotros creemos.</p>

    <?php 
        echo "<pre>"; print_r($_GET); echo "</pre>";
        echo "<pre>"; print_r($_POST); echo "</pre>";
        echo "<pre>"; print_r($_REQUEST); echo "</pre>";
        echo "<pre>"; print_r($_SERVER); echo "</pre>";

        $claves = [
            "REQUEST_METHOD" => "Método de la petición que se ha enviado",
            "REQUEST_URI" => "Ruta y los parámetros que se han pedido",
            "QUERY_STRING" => "Parámetros de la URL", 
            "SCRIPT_NAME" => "Archivo PHP que se ejecuta",
            "HTTP_REFERER" => "Página desde la que vienes",
            "HTTP_USER_AGENT" => "Navegador y sistema operativo desde el que se trabaja",
            "REMOTE_ADDR" => "IP del cliente",
            "SERVER_NAME" => "Nombre del servidor",
            "SERVER_PORT" => "Puerto del servidor"
        ];

    ?>

    <table border="border-collapse:collapse;">
        <tr>
            <th>Clave de $_SERVER</th>
            <th>Qué es</th>
            <th>Valor</th>
        </tr>
        <?php 
        foreach($claves as $clave => $descripcion){
        ?>
        <tr>
            <td><?= $clave ?></td>
            <td><?= $descripcion ?></td>
            <td><?= $_SERVER($clave) ??"(no existe)" ?></td>
        </tr>
        <?php
        }
        ?>
    </table>


    <form action="" method="get">
        <label>Comentario: <input type="text" name="comentario"></label>
        <!-- <input type="submit" value="Enviar" name="hepulsadoElboton">-->
        <button>Enviar</button> 
    </form>

    <?php 
        if(isset($_GET["comentario"])){ //esta condicion me controla si para la clave comentario hay un valor asignado
            $recogida = $_GET["comentario"];
            echo "<h2>$recogida</h2>";
        }else{
            echo "Manda cosas webon";
        }
        
    ?>

    <form action="" method="post">
        <label>Nombre: <input type="text" name="nombre"></label>
        <label>Edad: <input type="number" name="edad"></label>
        <button>Enviar</button> 
    </form>
    <?php 
        $nombre = $_POST["nombre"];
        $edad = $_POST["edad"];
        if(isset($_POST["nombre"]) && isset($_POST["edad"])){
            echo "<p> Me llamo $nombre y tengo $edad años</p>";
        }else{
            echo "<p>Rellena el formulario</p>";
        }

        if($_SERVER["REQUEST_METHOD"] == "POST"){
            //me meto en el if si me ha llegado los datos de un formulario que usa el método POST
            $nombre = $_POST["nombre"];
            $edad = $_POST["edad"];
            if(isset($_POST["nombre"]) && isset($_POST["edad"])){
                echo "<p> Me llamo $nombre y tengo $edad años</p>";
            }else{
                echo "<p>Rellena el formulario</p>";
            }

        }
    ?>
    <!--
    FALTA EL COMPROBAR EL MÉTODO USADO
    

    FALTA HACER EL CONTADOR
    -->
    <p>La página no recuerda nada de la ejecución anterior, inclusive los datos que pasaron. Vamos a ver na forma en la que podemos "recordar" un dato usando un input hidden</p>
    <?php 
        $contador = 0;
        if(isset($POST["contador"])){
            $contador = $_POST["contador"];
        }

        if(isset($_POST["action"])){
            if($_POST["action"] == "SUMAR") $contador++;
            else $contador--;
        }

    ?>
    <form action="" method="post">
        <input type="hidden" name="contador" value="<?= $contador ?>">
        <p>Contador: $contador</p>
        <input type="submit" name="accion" value="RESTAR">
        <input type="submit" name="accion" value="SUMAR">
    </form>

</body>
</html>