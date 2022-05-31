console.clear()
const prompt = require("prompt-sync")();

// 8) Qual o valor do troco? - Crie um programa que calcule o troco de uma compra no valor de R$100,98 e que foi paga com R$150,00. O valor do troco deve ser exibido no console.

let valorCompra = 100.98;
let valorPago = 150;
let valorTroco = valorPago - valorCompra;

console.log(`O valor do troco é de R$ ${valorTroco.toFixed(2)}`);