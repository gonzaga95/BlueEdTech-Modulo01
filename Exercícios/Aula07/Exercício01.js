console.clear()
const prompt = require("prompt-sync")();

// Faça um programa que peça um número inteiro e crie arrays com:
// Todos os números pares de 0 ao número escolhido;
// Todos os números ímpares do 0 ao número escolhido.

let pares = [];
let impares = [];

numeroInserido = +prompt('Digite qualquer número: ');
for (let i = 0; i < numeroInserido; i++){
    if (i % 2 != 0) {
        impares.push(i);
    } else {
        pares.push(i);
    }
}
console.log(pares);
console.log(impares);