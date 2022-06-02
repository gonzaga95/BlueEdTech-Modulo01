console.clear()
const prompt = require("prompt-sync")();

// Crie um programa em que o usuário escolha a quantidade de notas serem entradas
// e depois peça e armazene essa quantidade de notas em um array. 
// Ao final imprima a quantidade de alunos 
// APROVADOS (nota >= 7), EM RECUPERAÇÃO (entre 5 e 7) e REPROVADOS (abaixo de 5).

let quantidadeNotas;
let notas = [];
let aprovados = [];
let recuperacao = [];
let reprovados = [];

console.log('Quantas notas deseja inserir? ');
quantidadeNotas = +prompt('');
for (let i = 0; i < quantidadeNotas; i++){
    console.log(`Insira a nota do alune ${i+1}:`)
    notas[i] = +prompt('');
    if (notas[i] >= 7){
        aprovados.push(notas[i]);
    } else if (notas[i] >= 5) {
        recuperacao.push(notas[i]);
    } else {
        reprovados.push(notas[i]);
    }
}

console.log(`A classe tem ${notas.length} alunes.

${aprovados.length} foram APROVADES.
${recuperacao.length} estão em RECUPERAÇÃO.
${reprovados.length} foram REPROVADES.`);