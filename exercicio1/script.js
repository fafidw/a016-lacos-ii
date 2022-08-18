const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

for(let i = 0; i <= array.length-1; i++){
    console.log(`Jogador ${i + 1}`)

    for(g in array[i]){
        console.log(`Temporada ${Number(g) + 1}:
        quantidade de gols: ${array[i][g]}`);
    }
}

for(let i in array){
    console.log(`O jogador fez: ${Number(i)+1}, ${array[i]}`)
}