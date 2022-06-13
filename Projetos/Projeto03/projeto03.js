console.clear();
const prompt = require("prompt-sync")();

console.log("Módulo 01 - Semana 03");
console.log("Projeto 03 - Jogo da Velha");
console.log();
console.log("Popular 'Tic tac toe' em JavaScript");
prompt('ENTER para começar');
console.clear();

let jogarNovamente = true;
let vencedor;
let vencedorX = 0;
let vencedorO = 0;

function limparTabueliro() {
    tabuleiro = [
        [0, 0, 0], 
        [0, 0, 0], 
        [0, 0, 0],
    ];
}

function novoJogo(){
    jogarNovamente = prompt('Deseja jogar novamente? [S/N] ').toUpperCase()
    while (jogarNovamente.toUpperCase() != 'S' && jogarNovamente != 'N'){
        console.log('Responda S para SIM');
        console.log('Responda N para NÃO');
        jogarNovamente = prompt('Deseja jogar novamente? [S/N] ').toUpperCase()
    }
    if (jogarNovamente.toUpperCase() == 'S'){
        console.clear();
        return true;
    } else {
        console.clear();
        console.log('Foi uma bela disputa!');
        console.log('Vamos para o placar final...');
        prompt();
        return false;
    }
}

function placarFinal(){
    if (vencedorX > vencedorO){
        console.log("O player 'X' venceu!");
    } else if (vencedorO > vencedorX){
        console.log("O player 'O' venceu!");
    } else {
        console.log('Foi disputadíssimo e houve um empate!')
    }
}

function contagemVencedores (a){
    switch (a){
        case 'X':
            vencedorX++;
            break;
        case 'O':
            vencedorO++;
            break;
    }
}

while (jogarNovamente) {
    limparTabueliro();
    let resultado = false;
    let player = 'X';

    while (!resultado) {
        console.log("Popular 'Tic tac toe' em JavaScript");
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
                resultado = true;
                vencedor = ultimaJogada;
                break;
            }
        }
        console.clear();
    }
    console.clear();
    console.log('Temos um resultado:')
    console.table(tabuleiro);
    
    if (resultado) {
        contagemVencedores(vencedor);
        console.log(`O ${vencedor} venceu!`);
        prompt('Pressione Enter');
        jogarNovamente = novoJogo();
    } else {
        console.log("Empatou!");
        prompt('Pressione Enter');
        jogarNovamente = novoJogo();
    }
}

console.clear();
if (vencedorX > 0 || vencedorO > 0){
    if (vencedorX >= 1) {
        if (vencedorX > 1){
            console.log(`O player 'X' venceu ${vencedorX} vezes.`);
        } else {
            console.log(`O player 'X' venceu 1 vez.`);
        }
    }
    if (vencedorO >= 1) {
        if (vencedorO > 1){
            console.log(`O player 'O' venceu ${vencedorO} vezes.`);
        } else {
            console.log(`O player 'O' venceu 1 vez.`);
        }
    }
    placarFinal();
} else {
    console.log('Não tivemos vencedores nas partidas.');
}