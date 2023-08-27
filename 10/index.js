const numeros = [8, 5050, 4, 1];
let maior = -9999999999999999999999
let menor = 99999999999999999999999
for(let item of numeros){
    if(item>maior){
        maior = item;
    }
    if(item<menor){
        menor = item
    }
}console.log(maior - menor)