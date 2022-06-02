console.clear()
const prompt = require("prompt-sync")();

//02 Faça um programa para a leitura de quatro notas parciais de um aluno. 
// O programa deve calcular a média alcançada por aluno e apresentar:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Em recuperação", se a média for entre cinco e sete;
// A mensagem "Reprovado", se a média for menor que cinco.

let notas = [];
let somaNotas = 0;
let quantidadeNotas = 4;
let aprovacao;

console.log(`Vamos descobrir a média do aluno?
Você deve inserir as ${quantidadeNotas} notas do aluno`);
for (let i=0; i < quantidadeNotas; i++){
    console.log(`Insira a nota ${i+1}:`);
    notas[i] = +prompt('');
    somaNotas += notas[i];
    console.log();
}

let media = somaNotas / quantidadeNotas
if (media >= 7) {
    aprovacao = 'APROVADO'
} else if (media >= 5) {
    aprovacao = 'em RECUPERAÇÃO'
} else {
    aprovacao = 'REPROVADO'
}

console.log(`A média do aluno é ${media.toFixed(1)}
O aluno está ${aprovacao}`)