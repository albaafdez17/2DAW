window.onload = function(){
    let php = "./imagenes/php.png";
    let boton = document.querySelectorAll("button");
    let imagen = document.getElementsByTagName("img");
    let contenido = document.getElementsByTagName("p");

    boton[0].onclick = function(){
        imagen[0].src = php;
        contenido[0].innerText = "PHP es un lenguaje de programación de código abierto que se utiliza principalmente para desarrollar páginas web dinámicas y aplicaciones web. Se ejecuta en el servidor y permite gestionar bases de datos, procesar formularios, controlar sesiones de usuarios y generar contenido HTML de forma dinámica. Además, es compatible con bases de datos como MySQL y se integra fácilmente con HTML.";
        boton[0].disabled=true;
    }
}