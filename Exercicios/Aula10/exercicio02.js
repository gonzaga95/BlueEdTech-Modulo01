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
const nomes = [];
let tamanhoNomeMaior;
let maioresNomes = [];

let tamanhoNomeMenor;
let menoresNomes = [];

for (let i = 0; i < quantidade; i++){
    nomes.push(prompt(`Insira o nome: `));
    if (tamanhoNomeMaior === undefined || tamanhoNomeMaior <= nomes[i].length){
        if (tamanhoNomeMaior < nomes[i].length){
            maioresNomes = [];
        }
        tamanhoNomeMaior = nomes[i].length;
        maioresNomes.push(nomes[i]);
    }
    if (tamanhoNomeMenor === undefined || tamanhoNomeMenor >= nomes[i].length){
        if (tamanhoNomeMenor > nomes[i].length){
            menoresNomes = [];
        }
        tamanhoNomeMenor = nomes[i].length;
        menoresNomes.push(nomes[i]);
    }
}
nomes.reverse();
console.clear();
console.log(`Os nomes inseridos foram: ${nomes.join(', ')}.`);
if (maioresNomes.length > 1) {
    console.log(`Os maiores nomes foram: ${maioresNomes.join(', ')}`)
} else {
    console.log(`O maior nome foi: ${maioresNomes}`)
}
if (menoresNomes.length > 1) {
    console.log(`Os menor nomes foram: ${menoresNomes.join(', ')}`)
} else {
    console.log(`O menor nome foi: ${menoresNomes}`)
}