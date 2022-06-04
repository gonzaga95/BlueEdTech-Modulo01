console.clear();
const prompt = require('prompt-sync')();

// Peça ao usuário para digitar vários nomes (a quantidade deve ser escolhida por ele). 
// Exiba na tela todos os nomes digitados, porém de maneira invertida (do último para o primeiro), 
// apresente também o maior e o menor nome (caso haja empate, deve mostrar todos).

console.log('Vamos conferir quem tem o maior nome?');
let quantidade = +prompt('Quantos nomes deseja inserir? ');
while (isNaN(quantidade)) {
    quantidade = +prompt('Quantos nomes deseja inserir? ');
}
let nomes = [];
let tamanho = [];
// let iguais = [];

for (let i = 0; i < quantidade; i++){
    nomes.unshift(prompt('Insira um nome: '));
    tamanho.unshift(nomes[0].length);
}

console.clear();
console.log(`Os nomes inseridos foram: ${nomes.join(', ')}.`);
console.log(`O maior nome é ${nomes[tamanho.indexOf(Math.max(...tamanho))]}.`);
console.log(`O menor nome é ${nomes[tamanho.indexOf(Math.min(...tamanho))]}.`);

// ///////////////////////////////////////////////////////////////////////////////
// Não consegui adicionar uma condição para mostrar os nomes de tamanhos iguais //
//////////////////////////////////////////////////////////////////////////////////