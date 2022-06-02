console.clear();
const prompt = require("prompt-sync")();

// 2) Jogo da adivinhação - 
// Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 
// e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. 
// O programa deverá escrever na tela se o usuário venceu ou perdeu

console.log('Jogo da adivinhação');
console.log('Descubra um número entre 0 e 10');

const numPC = Math.floor(Math.random()*11);

let numUsuario = +prompt('');

while (numUsuario != numPC) {
    while (isNaN(numUsuario) || numUsuario > 10 || numUsuario < 0) {
        console.log('A entrada deve ser um NÚMERO entre 0 e 10');
        numUsuario = +prompt('Tente novamente: ');
    }
    console.log('Você errou!');
    numUsuario = +prompt('Tente novamente: ');
}
console.log('Acertou!');
console.log();