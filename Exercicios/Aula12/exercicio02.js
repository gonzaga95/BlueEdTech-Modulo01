const prompt = require('prompt-sync')();
console.clear();

// Exercício – Treino: Crie uma função que verifica se um número inteiro passado como parâmetro 
// é divisível por 3 e retorne true ou false.

console.log('Insira um número e vou lhe informar se ele é divisível por 3');

function divisao(a) {
    if (a % 3 === 0) {
        return true;
    } else {
        return false;
    }
}

const numero1 = +prompt('Insira um valor ');

console.log(divisao(numero1));