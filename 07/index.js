const nomes = ["Ana", "Joana", "Carlos", "amanda"];
let nomesAa = []

for(let nome of nomes){
    let inicialNome = nome[0]

    if(nome[0] === "A"||nome[0] === "a"){
        nomesAa.push(nome)
    }
}console.log(nomesAa)