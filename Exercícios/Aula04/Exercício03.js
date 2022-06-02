console.clear();
const prompt = require("prompt-sync")();

// Caixa Eletrônico - Faça um Programa para um caixa eletrônico. 
// O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. 
// As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. 
// O valor mínimo é de 10 reais e o máximo de 600 reais. 
// O programa não deve se preocupar com a quantidade de notas existentes na máquina.
// Exemplo 1: 
// Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1.
// Exemplo 2: 
// Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.

let saque;
let notas = [100, 50, 10, 5, 1];

saque = +prompt('Qual valor deseja sacar? ');
while (saque < 10 || saque > 600){
    console.log('O mínimo para saque é R$ 10 e o limite é R$ 600')
    saque = +prompt('');
}
console.log('O seu saque foi de: ')
for (let i = 0; i < notas.length; i++){
    let vezes = 0
    while (saque >= notas[i]){
    vezes++
    saque -= notas[i];
    }
    if (vezes > 1) {
    console.log(`${vezes} notas de R$ ${notas[i]}`);
    } else if (vezes == 1){
        console.log(`${vezes} nota de R$ ${notas[i]}`);
    }
}