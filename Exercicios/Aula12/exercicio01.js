const prompt = require('prompt-sync')();
console.clear();

// Exercício – Treino: Crie uma função que dado dois valores (passados como parâmetros) 
// mostre no console a soma, subtração, multiplicação e divisão desses valores.

console.log('Insira dois números e vou lhe devolver a soma, subtração, multiplicação e divisão');

function calculadora(a, b){
    console.log(`${a} + ${b} = ${a+b}`);
    console.log(`${a} - ${b} = ${a-b}`);
    console.log(`${a} * ${b} = ${a*b}`);
    console.log(`${a} / ${b} = ${a/b}`);
}

const numero1 = +prompt('Insira um valor ');
const numero2 = +prompt('Insira um outro ');

calculadora(numero1, numero2);