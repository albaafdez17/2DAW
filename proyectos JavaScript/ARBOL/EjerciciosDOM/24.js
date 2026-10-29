window.onload = function(){
    let boton = document.getElementsByTagName("button");
    let listatareas = document.getElementsByTagName("ul"); 

    //controlar que se meta una cadena si o si
    //TAREA AL PRINCIPIO
    boton[0].onclick= function(){
        let nueva = prompt("Añade una nueva tarea a la lista de tareas, se pondrá al inicio: "); 
        //creamos una etiqueta
        let etiqueta = document.createElement("li"); 
        //2. crear el (nodo) de texto.
        let tarea = document.createTextNode(nueva);
        //3. meter el texto al li que he creado
        etiqueta.appendChild(tarea);
        //4. Engachamos ese li la lista
        listatareas[0].prepend(etiqueta);
    }

    //TAREA AL FINAL
    boton[1].onclick= function(){
        let nueva = prompt("Añade una nueva tarea a la lista de tareas, se pondrá al final: "); 
        //creamos una etiqueta
        let etiqueta = document.createElement("li"); 
        //2. crear el (nodo) de texto.
        let tarea = document.createTextNode(nueva);
        //3. meter el texto al li que he creado
        etiqueta.appendChild(tarea);
        //4. Engachamos ese li la lista
        listatareas[0].appendChild(etiqueta);
    }

    //ELIMINAR ÚLTIMA TAREA
    boton[2].onclick = function(){
        listatareas[0].lastElementChild.remove(); 
    }


    //ELIMINAR LA PRIMERA TAREA
    boton[3].onclick = function(){
        
    
        if (listatareas[0].children.length > 0) {
    listatareas[0].lastElementChild.remove();
    if(listatareas[0].children.length===0){
        alert("La lista está vacía, no tienes nada que hacer!!!!") }
    
    }
    }

}


