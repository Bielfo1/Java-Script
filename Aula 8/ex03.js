function avaliarDesempenho(porcentagemAcerto){

    if (porcentagemAcerto >= 90){
        return  "Excelente"
    }
    else if (porcentagemAcerto >= 70){
        return "Bom"
    }
    else {
        return "Precisa Melhorar"
    }
}

let porcentagemAcerto = Number(prompt('Digite a porcentagem de acerto: '))
let nota = avaliarDesempenho(porcentagemAcerto)
console.log(nota)