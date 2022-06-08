console.clear()
const prompt = require("prompt-sync")();

// Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados e peça o nome e nota de cada um. Armazene as informações em duas listas separadas e no final imprima o nome e a nota correspondente de cada aluno, e a média total da notas.

const alunos = [];
const notas = [];
let somaNotas = 0;
let quantidadeAlunos;

console.log('Insira a quantidade de alunos a serem cadastrados:');
quantidadeAlunos = +prompt('');
for (let i = 0; i < quantidadeAlunos; i++){
    console.log(`Qual é o nome do(a) alune ${i+1}:`);
    alunos[i] = prompt('');
    console.log();
    console.log(`Qual foi a nota do(a) ${alunos[i].toUpperCase()}?`)
    notas[i] = +prompt('');
    somaNotas += notas[i];
    console.log();
}

const mediaNotas = somaNotas / quantidadeAlunos;

for (let i = 0; i < quantidadeAlunos; i++){
    console.log(`${alunos[i].toUpperCase()} tirou nota ${notas[i]}`);
}
console.log();
console.log(`A média da turma foi ${mediaNotas.toFixed(1)}`);