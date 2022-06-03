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

while (eleitores > 0){
    for (let i = 0; i < eleitores; i++){
        let escolhido = Math.ceil(Math.random() *3);
        switch (escolhido) {
            case 1:
                candidato1++
                break;
            case 2:
                candidato2++
                break;
            case 3: 
                candidato3++;
                break;
        }
        eleitores--
    }
}
console.log(`O candidato 1 teve ${candidato1} votos.
O candidato 2 teve ${candidato2} votos.
O candidato 3 teve ${candidato3} votos.`);