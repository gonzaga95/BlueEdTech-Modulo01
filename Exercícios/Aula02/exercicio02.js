console.clear()
const prompt = require("prompt-sync")();

// 2) Etiqueta - Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda, o CEP na terceira e o telefone na quarta.

let nome = 'Carlos E G Silva';
let cep = '79350-000';
let telefone = '(67) 9-9123-0405';

console.log(`${nome}
${cep}
${telefone}`);