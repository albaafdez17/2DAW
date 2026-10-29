//EJERCICIO 13 YUJUUUUUUU
window.onload = function(){
    let boton = document.getElementsByTagName("button");

        boton[0].onclick = function(){
            let info = document.getElementsByTagName("p");
            if(info[0].style.visibility==="hidden"){
                info[0].style.visibility="visible";
                boton[0].innerText="Ocultar"; 
            }else{
                info[0].style.visibility="hidden";
                boton[0].innerText="Mostrar"; 
            }
        }
    
}