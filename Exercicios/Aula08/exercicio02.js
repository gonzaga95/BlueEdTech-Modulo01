console.clear();
const prompt = require("prompt-sync")();

// Escreva um programa que peça um número e escreva o fatorial dele. 
// Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720

console.log('Vamos ver o fatorial de um número?')
const array = [];
let numero = +prompt('Insira um número: ')
for (let i = 1; i <= numero; i++){
    array.unshift(i);
}
let demonstracao = [];
for (let i = 1; i <= numero; i++){
    demonstracao.unshift(i);
}
let conta;
for (let i = 0; i < array.length; i++){
    conta = array[i] * (numero-1);
    numero--
    // console.log(conta)
    if ((numero -1) <= 0){
        break;
    }
    array.splice(i+1, i, conta);
}
// console.log(array)
// console.log(demonstracao)
console.log(`${demonstracao[0]}! = ${demonstracao.join(' x ')} = ${array[array.length-1]}`);