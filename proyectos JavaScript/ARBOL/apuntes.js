//Pongo un else if aqui porque parece que no se hacerlo :(
function centrada(){
    let elementos = document.getElementsByTagName("table");
    if(elementos[0].align == "center")elementos[0].align = "right";
    else if(elementos[0].align == "right")elementos[0].align = "left";
    else if(elementos[0].align == "left")elementos[0].align = "center";
}


//Todo lo que se presenta con etiquetas, etc, en nuestro código html, está contenido en lo que llamamos árbol. Para acceder a todas esas partes del código html y modificarlas, usaremos javascript. El árbol se genera cuando se cargan todos los elementos html. Pero javascript se los come antes. Así que lo arreglaremos con el evento load, que lo veremos más adelante. 
//Las funciones específicas para llamar a las propiedades de los elementos:

// 1. document.getElementsByTagName(nombre_de_una_etiqueta): obtiene todos los elementos de nuestra página que cuya etiqueta sea la misma que la que indicamos como parámetro. La función devuelve un array con los elementos encontrados. Por ejemplo: 
var parrafos = document.getElementsByTagName("p"); //Con la línea de código anterior vamos a obtener un array con todos los párrafos de la página y dicho array lo almacenamos en la variable parrafos.

// 2. document.getElementsByName(nombre): Esta función nos selecciona todos aquellos elementos cuyo atributo name sea el mismo que el indicado como parámetro. Por ejemplo:
var elemento = document.getElementsByName("especial"); //Con el código anterior vamos a tener en elemento una referencia a la caja de texto con nombre especial. (creo que tb devuelve un array)

//* 3. document.getElementsByClassName(nombre_de_clase): devuelve elementos cuyo atributo class sea el mismo que el indicado como parámetro. Como las clases se usan para crear agrupaciones, esta función siempre va a devolver una array (incluso cuando la clase solo tenga un elemento).

//* 4. document.getElementByName(id):nos selecciona aquel elemento cuyo atributo id coincide con el indicado como parámetro. Vamos a obtener una referencia al enlace dado que es el elemento con id="yo". 

//AHORA VEREMOS LAS FUNCIONES BASE: Para seleccionar selectores de CSS

// 1. querySelector(selector_css): Devuelve una referencia al primer elemento que cumpla con el criterio dado por el selector que va entre paréntesis. SIEMPRE DEVUELVE UNA REFERENCIA

// 2. querySelectorAll(selector_css): Devuelve un array10 con referencias a todos los elementos que cumplas con el criterio dado por el selector que va entre paréntesis. 

//La duda ahora es, obtengo todas esas referencias, y ahora que hago? 
//1. NOTACIÓN PUNTO:
//Obtengo la referencia al elemento
var elemento = document.getElementById("tabla");
//Muestro el valor de su atributo altura
alert(elemento.height);
//cambio valor del atributo border
elemento.border = '5px';

//2. FORMA ACTUAL: MÉTODOS GET Y SET
//consultar valor: getAttribute. Ejemplo: 
var elemento = document.getElementById("tabla");
alert(elemento.getAttribute("height")); //si el atributo no existe, devolverá null o empty string
//cambiar el valor: setAttribute. Ejemplo:
var elemento = document.getElementById("tabla");
elemento.setAttribute("height","200px");

// ATRIBUTOS IMPORTANTES









//CREACION DE NODOS. Modificar un árbol
/*Los métodos mas importantes son:

1. setAttribute(nombre, valor) --> Crea un nodo de tipo atributo con el nombre y valor indicados. 

2. createComment(texto) --> crea un nodo tipo comentario con el texto indicado

3. createElement(nombre_etiqueta) --> Crea un elemento del tipo indicado en el parámetro nombre_etiqueta

4. createTextNode(texto) --> Crea un nodo tipo texto con el valor indicado.

5. appendChild(nodo) --> Cuelga un nodo a otro (es decir, añade un hijo a un nodo).

6. parentNode --> devuelve una referencia al nodo padre. 

7. removeChild(nodo) --> Descuelga el nodo indicado de su padre y lo elimina

8. insertBefore(nuevo,existente) --> Inserta un nuevo nodo antes del nodo existente que se indica en los argumentos.

9. replaceChild(nuevo, viejo) --> 


tb quiero poner que hay una propiedad de css de mostrar y ocultar.
visibility: hidden --> oculto
visibility: visible --> visible
*/




