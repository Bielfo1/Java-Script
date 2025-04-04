// Receba 3 números e defina quem entre eles é o maior
let num1 = Number(prompt("Digite o primeiro número"))
let num2 = Number(prompt("Digite o segundo número"))
let num3 = Number(prompt("Digite o terceiro número"))


if (num1 > num2 && num1 > num3){
    console.log("O maior número é o:", num1)
}
else if (num2 > num1 && num2 > num3){
    console.log("O maior número é o:", num2)

}
else {
    console.log("O maior número é o:", num3)
}