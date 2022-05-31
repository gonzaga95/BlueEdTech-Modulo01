console.clear()
const prompt = require("prompt-sync")();

// // Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo array. Imprima a média de idade e de altura.

let quantidadePessoas = 5
let idade = [];
let altura = [];
let somaIdade = 0;
let somaAltura = 0;

for (i = 0; i < quantidadePessoas; i++) {
    console.clear()
    console.log(`Pessoa ${i+1}`)
    console.log('Insira a idade em anos')
    idade[i] = +prompt('')
    console.log('Insira a altura em cm')
    altura[i] = +prompt('')
    somaIdade += idade[i]
    somaAltura += altura[i]
}

let mediaIdade = somaIdade / idade.length
let mediaAltura = somaAltura / altura.length
console.log(`A média de idade é de ${mediaIdade} anos.`)
console.log(`A média de altura é de ${mediaAltura} cm.`)