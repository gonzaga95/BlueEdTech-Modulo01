const prompt = require("prompt-sync")();
console.clear();

// 4. Crie uma função que calcula a quantidade mínima de passos que o/a Master Bluemer precisa dar para
// atravessar uma rua qualquer, conforme os seguintes requisitos:
// O/A Master Bluemer (MB) deseja atravessar uma rua qualquer.
// Inicialmente, MB está localizado em uma posição X, e deseja chegar a uma posição maior ou igual a Y.
// A cada passo que MB dá, ele percorre uma distância fixa Z. Nossa função deve:
// Contar a quantidade mínima de passos que MB precisa dar para atravessar a rua, ou seja,
// sair da posição X e chegar ou ultrapassar à posição Y;
// Possuir 3 parâmetros (3 números inteiros X, Y e Z);
// Retornar um número mínimo de passos que inicie da posição X e vá para uma posição maior ou igual a Y.

function movimento(x, y, z) {
    let distancia = y - x;
    let passos = 0;
    while (distancia > 0){
        distancia -= z;
        passos++;
    }
    return passos;
}

console.log(
    "Vamos conferir a distância, em plano único, para ir de X a Y, conforme tamanho entre os passes"
);
console.log();

let posicaoX = +prompt("Insira a posição inicial: ");
let posicaoY = +prompt("Insira a posição do destino: ");
let passadaZ = +prompt("Qual é a largura do passo? ");

console.log(movimento(posicaoX, posicaoY, passadaZ));