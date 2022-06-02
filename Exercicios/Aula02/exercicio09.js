console.clear()
const prompt = require("prompt-sync")();

// 9) Conversor de moedas - Crie um programa que solicite um um valor em real ao usuário e converta esse valor, para dólar.

console.log('Convertendo valor em Reais para Dólares Americanos');

let valorEmReais = +prompt('Qual é o valor em Reais? ');
let cambioHoje = 0.2104;
let valorEmDolares = valorEmReais * cambioHoje;

console.log()
console.log(`O valor em USD é ${valorEmDolares.toFixed(2)}`);