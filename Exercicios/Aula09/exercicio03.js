console.clear();
const prompt = require('prompt-sync')();

// Faça um programa que, dado uma lista de N números 
// (o usuário deve determinar a quantidade de números a serem entrados e entrar cada um deles), 
// determine o menor valor, o maior valor e a soma dos valores.

let quantidade = +prompt('Quantos números deseja inserir? ');
const lista = [];

while (quantidade > 0) {
    let numeroEntrada = +prompt('Insira um número: ');
    lista.push(numeroEntrada);
    quantidade--
}
let maiorNumero = lista[lista.indexOf(Math.max(...lista))];
let menorNumero = lista[lista.indexOf(Math.min(...lista))];
let soma = lista.reduce((a, b) => a + b);

console.clear();
console.log(`O maior número da lista é o ${maiorNumero}.
O menor número da lista é o ${menorNumero}.
A soma de todos os números da lista é:
${lista.join(' + ')} = ${soma}`);