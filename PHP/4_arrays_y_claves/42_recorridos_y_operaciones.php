<?php
   $notas = ["Ana" => 7, "Leo" => 9, "Samu" => 3, "Alba" => 10]; 

    // modificar el array usando su clave
    foreach($notas as $nombre => $nota){
        $notas[$nombre] = $nota-1;  
    }

    echo "<pre>"; 
    print_r($notas); 
    echo "</pre>";

    //$notas = [4,6,1,10,9,9]; 

    for($i = 0; $i<count($notas); $i++){
        echo "posicion: $i nota: ".$notas[$i]."<br>"; 
    }

    //FUNCIONES PARA TRABAJAR CON ARRAYS
    /*
         sort() rsort() asort() arsort() ksort() krsort()
    */

     $copia = $notas; 
     sort($copia); //los ordena y ademas quita la clave de menor a mayor (array indexado)
     echo "<pre>sort: ";
     print_r($copia);
     echo "</pre>";  
     
     $copia = $notas; 
     rsort($copia); //los ordena y ademas quita la clave de mayor a menor (array indexado)
     echo "<pre>rsort: ";
     print_r($copia);
     echo "</pre>";   

     $copia = $notas; 
     asort($copia); //de menor a mayor pero respeta el array asociativo
     echo "<pre>asort: ";
     print_r($copia);
     echo "</pre>"; 

     $copia = $notas; 
     arsort($copia); //de mayor a menor pero respeta el array asociativo
     echo "<pre>arsort: ";
     print_r($copia);
     echo "</pre>"; 

     $copia = $notas; 
     ksort($copia); 
     echo "<pre>arsort: ";
     print_r($copia);
     echo "</pre>"; 

     $copia = $notas; 
     krsort($copia); 
     echo "<pre>arsort: ";
     print_r($copia);
     echo "</pre>"; 

     $numeros = [10, 20, 30, 20, 10, 10];
     if(in_array(9,$numeros)){ //devuelve si ese numero está dentro del array números
        echo "EL nueve sa encontrao <br>";
     }
     else{
        echo "EL nueve no se ha encontrao<br>";
     }

     $posicion = array_search(10, $numeros);
     echo $posicion;  //devuelve la primera aparición del 10, la primera posición.

     $trozo = array_slice($numeros, 1, 4); //array_slice(arra, dondeempiezo, cuantoscojo) devuelve un array tomando como referencia el array pasado como parámetro empezando en la posición "dondeempiezo" y añado "cuantoscojo" elementos del array original
     print_r($trozo);  

     $patata = array_values(array_unique($numeros));
     echo "<br>";
     print_r($patata); 

     //explode(separador, cadena) => devuelve un array a partir de una cadena, usando como separador para crear cada elemento del array el pasado como parámetro

     $palabras = explode(".","manzana")



?>