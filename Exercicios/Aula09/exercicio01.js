console.clear();
const prompt = require('prompt-sync')();

// Faça um programa que peça 2 números e crie um array contando todos os números os números sequenciais do primeiro até o segundo, 
// independente de ser maior ou menor.

let numero1 = +prompt('Insira um número: ');
let numero2 = +prompt('Insira outro número: ');
let contagem = [];

if (numero2>numero1) {
    for (i = numero1; i <= numero2; i++){
        contagem.push(i);
    }
} else {
    for (i = numero2; i <= numero1; i++){
        contagem.push(i);
    }
}
console.log(contagem.join(', '))