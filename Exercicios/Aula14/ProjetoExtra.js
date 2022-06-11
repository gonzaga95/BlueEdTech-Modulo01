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
const jogadores = [];
function maior(a, b){
    return a - b;
}

for (let i = 1; i <= quantidadeJogadores; i++){
    console.log(`Qual é o nome do ${i}º jogador? `);
    let nome = prompt('');
    let jogador = {
        Nome: nome
    }
    jogadores.push(jogador);
}

function lancarDados() {
    dado = Math.ceil(Math.random() * 6);
    return dado;
}

for (let i = 1; i <= rodadas; i++){
    console.log(`Rodada ${i}: `)
    for (let rodada of jogadores){
        rodada.dados = lancarDados();
        console.log(`${(rodada.Nome).toUpperCase()} tirou ${rodada.dados}`);
    }
    console.log();
}
console.log(jogadores);
// console.log(jogadores[0].dados, jogadores[1].dados);
maior(jogadores[0].dados, jogadores[1].dados);
console.log(jogadores);

