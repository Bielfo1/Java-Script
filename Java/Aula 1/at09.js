// Faça um programa que receba um número no navegador e defina no terminal do navegador se ele é par ou ímpar

let numero = Number(prompt("Digite um número"))

if (numero % 2 == 0){
    console.log("Número é par")
}
else{
    console.log("Número é impar")
}