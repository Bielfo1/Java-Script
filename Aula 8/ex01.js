// Calcular preço.

function calcularPrecoLanche(qtdCoxinha, qtdSuco) {
    let coxinha = 5
    let suco = 4
    let precofinal = coxinha * qtdCoxinha + suco * qtdSuco
    return precofinal
}

let qtdCoxinha = Number(prompt('Digite a quantidade de Coxinhas: '))
let qtdSuco = Number(prompt('Digite a quantidade de sucos: '))
let precofinal = calcularPrecoLanche(qtdCoxinha, qtdSuco)
console.log(precofinal)
