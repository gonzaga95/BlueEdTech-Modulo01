console.clear();
const prompt = require('prompt-sync')();

// Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. 
// Um número primo é aquele que é divisível somente por ele mesmo e por 1.

console.log('Vamos verificar se um número A é primo?');
let numero = +prompt('Insira um número inteiro: ');
let divisoes = [];

for (i = 0; i <= numero; i++){
    if (numero % i == 0) {
        divisoes.push(i);
    }
}
console.log();
if (divisoes.length == 2) {
    console.log(`O ${numero} é um número primo.`)
} else {
    console.log(`O ${numero} não é um número primo.`)
}