console.clear()
const prompt = require("prompt-sync")();

// Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar.

let num;
console.log('Insira um número par');
num = +prompt('');
while (num % 2 != 0){
    console.log('O número deve ser par: ');
    num = +prompt('');
}
console.log('Obrigado!')