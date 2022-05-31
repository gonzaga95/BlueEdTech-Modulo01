console.clear()
const prompt = require("prompt-sync")();

// Neste problema, deve-se ler o nome de uma peça que chamaremos de peça1, o número de peças1 que o usuário quer, o valor unitário de cada peça1, o nome de uma peça2, o número de peças2 e o valor unitário de cada peça2. Após, calcule e mostre o valor a ser pago.

console.log('Bem-vinde a loja');
console.log('Vendemos bolsas, blusas, saias e calças');

console.log('Escolha o seu primeiro pedido: ');
let peca1 = prompt('');
let preco1 = 39.90
console.log(`${peca1} custam R$ ${preco1} cada.`);
console.log('Quantas você quer?');
let pecas1 = prompt('');

console.log('Escolha o seu segundo pedido: ');
let peca2 = prompt('');
let preco2 = 49.90
console.log(`${peca2} custam R$ ${preco2} cada.`);
console.log('Quantas você quer?');
let pecas2 = prompt('');

console.log('Escolha o seu terceiro pedido: ');
let peca3 = prompt('');
let preco3 = 35.90
console.log(`${peca3} custam R$ ${preco3} cada.`);
console.log('Quantas você quer?');
let pecas3 = prompt('');

let valorTotal = (preco1*pecas1) + (preco2*pecas2) + (preco3*pecas3)

console.log()
console.log(`O valor total da sua compra foi de R$ ${valorTotal.toFixed(2)}`)
console.log('Volte sempre :)')