console.clear();
const prompt = require('prompt-sync')();

// Utilizando os conceitos aprendidos até objetos, crie um programa onde jogadores joguem um dado 
// e tenham resultados aleatórios. O programa deve:
// Perguntar quantas rodadas você quer fazer;
// Perguntar quantos jogadores vão jogar;
// Criar um objeto pra cada jogador com nome e número tirado;
// Guarda todos os objetos em uma lista;
// Ordenar esses objetos, sabendo que o vencedor tirou o maior número no dado.
// Mostrar no final qual jogador ganhou mais rodadas e foi o grande campeão.

let rodadas = +prompt('Quantas rodadas serão disputadas? ');
let quantidadeJogadores = +prompt('Quantos jogadores participarão? ');
let jogadores = [];

function lancarDados() {
    dado = Math.ceil(Math.random() * 6);
    return dado;
}

for (let i = 0; i < rodadas; i++){
    for (let a = 0; a < quantidadeJogadores; a++)
}

lancarDados();
// console.log(lancarDados());

