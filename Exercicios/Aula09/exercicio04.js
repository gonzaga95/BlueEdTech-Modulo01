console.clear();
const prompt = require('prompt-sync')();

// Numa eleição existem três candidatos. Faça um programa que peça o número total de eleitores. 
// Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.

let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;
let eleitores = +prompt('Digite o número total de eleitores: ');
console.clear();
console.log(`O total de eleitores foi ${eleitores}.`);

for (let i = eleitores; i > 0; i--){
    // let escolhido = Math.ceil(Math.random() *3); // Votos aleatórios para testar grandes números.
    console.log(`Escolha o candidato1, candidato2 ou candidato3.`);
    let escolhido = prompt('');
    while (escolhido != 'candidato1' && escolhido != 'candidato2' && escolhido != 'candidato3') {
        console.log('Opção inválida.')
        console.log(`Escolha o candidato1, candidato2 ou candidato3.`);
        escolhido = prompt('');
    }
    switch (escolhido) {
        // case 1: // Para votos aleatórios conforme linha 15
        case 'candidato1':
            candidato1++
            break;
        // case 2: // Para votos aleatórios conforme linha 15
        case 'candidato2':
            candidato2++
            break;
        // case 3: // Para votos aleatórios conforme linha 15
        case 'candidato3':
            candidato3++;
            break;
    }
    console.clear();
    console.log('Voto computado!');
    console.log();
    console.log(`Restam ${i-1} eleitores.`)
    if (i == 1) {
        console.log(`O candidato 1 teve ${candidato1} votos.
O candidato 2 teve ${candidato2} votos.
O candidato 3 teve ${candidato3} votos.`);
    }
}