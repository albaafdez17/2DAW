function sumar(){
    let contador=document.getElementById("contador");
    let numero = parseInt(contador.textContent);
    numero = numero + 1;
    contador.textContent=numero;

}

function restar(){
    let contador=document.getElementById("contador");
    let numero = parseInt(contador.textContent);
    numero = numero - 1;
    contador.textContent=numero;

}