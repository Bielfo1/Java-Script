//Faça um sistema de votação que receba o nome e a idade de um usuário e se o usuário tiver menos de 16 anos exiba a mensagem , Não é permitido votar com menos de 16 anos, se o usuário tiver 16 ou 17 ou maior de 65 exiba a mensagem , Voto opcional , caso contrário exiba a mensagem de voto obrigatório

let nome = prompt("Digite seu nome")
let idade = prompt("Digite sua idade")

if (idade < 16 ){
    console.log("Não é permitido votar")
}
else if(idade >= 16 && idade <= 17 || idade >= 65){
    console.log("Voto opcional.")
}
else{
    console.log("Voto obrigatorio")
}