console.clear()
const prompt = require("prompt-sync")();

// 4. Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deve ser repetir até o usuário acertar o número, e a cada palpite deve dizer se o número é maior ou menor que o palpite. No final dele deve escrever na tela que o usuário encontrou o número, e mostrar a quantidade de palpites que foi necessária.

console.log(`Qual é o número secreto?
Escolha um número entre 0 e 10`)
const numeroSecreto = parseInt(Math.random() * 11);
let tentivas = 0;

let chute = +prompt(`Digite um número: `);

while (chute != numeroSecreto){
    tentivas++;
    if (chute < 0 || chute > 10) {
        console.log("Você não digitou um número entre 0 e 10");
        chute = +prompt(`Digite um número: `);
    } else if (chute > numeroSecreto) {
        console.log('O número secreto é menor');
        chute = +prompt(`Digite um número: `);
    } else if (chute < numeroSecreto) {
        console.log('O número secerto é maior');
        chute = +prompt(`Digite um número: `);
    }
}

if (numeroSecreto == chute) {
    tentivas++;
    console.log(`ACERTOU! Você precisou de ${tentivas} chutes!`);
} 