function calcularGastoDoMes(gastosSemanais){
    const semana = 4
    let mensal = gastosSemanais * semana
    return mensal
}
let gastosSemanais = Number(prompt('Digite quanto você gastou na semana: '))
let mensal = calcularGastoDoMes(gastosSemanais)
console.log('Você gastou no mês: R$', mensal)