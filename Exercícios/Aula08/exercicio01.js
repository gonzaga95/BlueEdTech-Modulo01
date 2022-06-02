console.clear();
const prompt = require("prompt-sync")();

// Peça ao usuário uma quantidade de linhas e e outra de colunas, 
// e imprima essas informações na forma de uma tabela como no exemplo de 3 linhas e 4 colunas:
// [ 0, 1, 2, 3 ]
// [ 1, 2, 3, 4 ]
// [ 2, 3, 4, 5 ]

let linhas = [];

console.log('Vamos fazer uma tabela de X linhas e Y colunas?');
let quantidadeLinhas = +prompt('Insira a quantidade de linhas: ');
let quantidadeColunas = +prompt('Insira a quantidade de colunas: ');

for (let i = 0; i < quantidadeLinhas; i++){
    let colunas = [];
    for (let a = 0; a < quantidadeColunas; a++){
        colunas.push(a + i);
    }
    linhas.push(colunas);
}

for (let i of linhas){
    console.log(i);
}