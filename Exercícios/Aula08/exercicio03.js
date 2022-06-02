console.clear();
const prompt = require("prompt-sync")();

// Faça um programa que peça um número e imprima toda a tabuada dele do 1 ao 10.

let limiteTabuada = 10;
console.log(`Vamos fazer a tabuada até ${limiteTabuada} de um número A?`)
let numeroInserido = +prompt('Insira um número: ');
for (let i = 0; i < 10; i++){
    let resultado = numeroInserido*(i+1);
    console.log(`${numeroInserido} x ${i+1} = ${resultado}`);
}