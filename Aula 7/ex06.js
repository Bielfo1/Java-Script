let numeros = [-1, -2, 1, 2, 5, 6, 10]
let positivos = numeros.filter((numero)=>{return numero > 0})
let negativos = numeros.filter((numero)=>{return numero < 0})
let negativoImpar = numeros.filter((numero)=>{return  numero % 2 !=0 && numero < 0  })

console.log(positivos)
console.log(negativos)
console.log(negativoImpar)
