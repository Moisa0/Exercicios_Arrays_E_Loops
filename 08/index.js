const numeros = [3, 4, 1, 8, 11, 7, 5];
let maior = 0;
for(item of numeros){
    
    if(item > maior){
        maior = item
    }
}console.log(maior);