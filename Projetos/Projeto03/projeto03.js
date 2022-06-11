console.clear();
const prompt = require("prompt-sync")();

console.log("Módulo 01 - Semana 03");
console.log("Projeto 03 - Jogo da Velha");
console.log();
console.log("Popular 'Tic tac toe' em JavaScript");
prompt('ENTER para começar');

tabuleiro = [
    [0, 0, 0], 
    [0, 0, 0], 
    [0, 0, 0],
];

let jogarNovamente = false;
let vencedor;

let player = 'X';

novoJogo: while (!jogarNovamente) {
    console.table(tabuleiro);
    console.log(`É a vez do ${player}: `)

    let jogadaLinha = +prompt('Escolha a linha a marcar: ');
    while (jogadaLinha > 2) {
        jogadaLinha = +prompt('Escolha a linha a marcar: ');
    }
    let jogadaColuna = +prompt('Escolha a coluna a marcar: ');
    while (jogadaColuna > 2) {
        jogadaColuna = +prompt('Escolha a linha a marcar: ');
    }

    while (tabuleiro[jogadaLinha][jogadaColuna]) {
        console.log('Espaço já preenchido. Faça sua jogada em outra linha ou coluna: ');
        jogadaLinha = +prompt('Escolha a linha a marcar: ');
        while (jogadaLinha > 2) {
            jogadaLinha = +prompt('Escolha a linha a marcar: ');
        }
        jogadaColuna = +prompt('Escolha a coluna a marcar: ');
        while (jogadaColuna > 2) {
            jogadaColuna = +prompt('Escolha a linha a marcar: ');
        }
    }

    tabuleiro[jogadaLinha][jogadaColuna] = player;

    if (player === 'X') {
        player = 'O';
    } else {
        player = 'X';
    }

    let selecionaveis = 0;

    for (let i = 0; i < tabuleiro.length; i++){
        let linha = tabuleiro[i];
        for (let b = 0; b < linha.length; b++){
            let novaJogada = linha[b];
            if (!novaJogada) {
                selecionaveis++;
            }
        }
    }

    if (selecionaveis === 0){
        break;
    }
    
    let vitorias = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [2, 4, 6],
        [0, 4, 8]
    ]

    for (let vitoria of vitorias){
        let coordenadasIguais = 0;
        let ultimaJogada;

        for (let coordenada of vitoria){
            let linha = parseInt(coordenada / 3);
            let coluna = coordenada % 3;
            let jogada = tabuleiro[linha][coluna];

            if (jogada && (!ultimaJogada || jogada === ultimaJogada)){
                coordenadasIguais++;
            }
            ultimaJogada = jogada;
        }
        if (coordenadasIguais === 3){
            jogarNovamente = true;
            vencedor = ultimaJogada;
            break;
        }
    }
    console.clear();
}

console.table(tabuleiro);

if (jogarNovamente) {
    console.log(`O ${vencedor} venceu!`);
} else {
    console.log("Empatou!");
}