console.clear()
const prompt = require("prompt-sync")();

// 4. Faça um programa que leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.

console.log('Os múltiplos de um número inteiro são um conjunto cujos elementos são obtidos após a multiplicação desse número fixo por todos os números inteiros.');
console.log('Vamos descobrir se os números A e B são múltiplos?');

let numA = 0;
let numB = 0;

numA = parseInt(prompt('Insira o valor de A: '));
console.log();
numB = parseInt(prompt('Insira o valor de B: '));
console.log();

if (numB%numA == 0 && numA%numB == 0) {
    console.log(`${numA} é múltiplo de ${numB}
${numB} é múltiplo de ${numA}`);
}
if (numB%numA != 0 && numA%numB == 0) {
    console.log(`${numA} é múltiplo de ${numB}
${numB} não é múltiplo de ${numA}`);
}
if (numB%numA == 0 && numA%numB != 0) {
    console.log(`${numA} não é múltiplo de ${numB}
${numB} é múltiplo de ${numA}`);
}
if (numB%numA != 0 && numA%numB != 0) {
    console.log(`Os números ${numA} e ${numB} não são múltiplos entre si.`);
}
console.log();