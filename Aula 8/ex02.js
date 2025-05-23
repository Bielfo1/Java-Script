// Checar Bateria.

function nivelBateria(bateria){
    if (bateria < 20){
        return "Bateria fraca, carregue seu celular!";

    } else {
        return "Bateria Ok!";
    }
}


let bateria = Number(prompt('Digite o seu nível de bateria: '))
let nvbateria = nivelBateria(bateria)
console.log(nvbateria)