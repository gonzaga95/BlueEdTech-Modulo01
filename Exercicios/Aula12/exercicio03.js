const prompt = require('prompt-sync')();
console.clear();

// 3. Exercício – Treino: Faça um programa que tenha uma função chamada area(), 
// que receba as dimensões de um terreno retangular (largura e comprimento) e mostre a área do terreno.

console.log('Calculadora de área de terreno retangular. Insira a largura e o comprimento');

function area(a, b) {
    let area = a * b;
    console.log(`A área do terreno é ${area} m2`);
}

const largura = +prompt('Insira a largura do terreno: ');
const comprimento = +prompt('Insira o comprimento do terreno: ');

area(largura, comprimento);