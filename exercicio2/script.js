let numero = Number(prompt('Insira um número de 1 a 10 para exibir sua tabuada'))
let multiplicador = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(`Tabuada do ${numero}`)

for(i in multiplicador){
    console.log(multiplicador[i]*numero)
}