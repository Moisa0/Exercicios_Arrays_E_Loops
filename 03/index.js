const numeros = [54, 22, 14, 87, 284, 10];
let encontrado = false;
for(let item of numeros){
    if(item===10){
        console.log(numeros[numeros.indexOf(10)])
        encontrado = true;
        break;
    }
}
if(!encontrado){
    console.log(-1)
}