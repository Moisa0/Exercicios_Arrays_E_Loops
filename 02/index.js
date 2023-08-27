const letras = ["A", "a", "B", "C", "e", "E", "e"];
let i = 0
for (let letra of letras){
    if(letra === "E" || letra === "e"){
        i+=1
    }  
} 

if(i===0){
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
} else if(i===1){
    console.log(`Foi encontrado apenas 1 letra "E" ou "e"`);
} else{
    console.log(`Foram encontradas ${i} letras "E" ou "e"`);
}

