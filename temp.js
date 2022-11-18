var temperatura = prompt("Temperatura");
 temperatura = parseFloat(temperatura);
 if (temperatura>38){
    console.log("Esta com febre");
    document.write("Esta com febre");

 }else{
    console.log("Nada de febre");
    document.write("Nada de febre");
 }