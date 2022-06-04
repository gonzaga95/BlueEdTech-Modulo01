console.clear();
const prompt = require('prompt-sync')();

// Faça um programa que peça ao usuário digitar a população
//  e a taxa de crescimento populacional de 2 países A e B, 
//  sendo que a população do país A deve ser menor que a de B,
//   e a taxa de crescimento de A seja maior. 
//   Faça um programa que calcule e escreva o número de anos necessários 
//   para que a população do país A ultrapasse ou iguale a população do país B, 
//   mantidas as taxas de crescimento.

let futuroPaisA = 0;
let futuroPaisB = 0;
let contadorAnos = 0;

// País A
let populacaoPaisA = +prompt('Digite a população do país A: ');
console.log('Digite a taxa de crescimento populacional do país A:');
let taxaCrescimentoA = +prompt('');

/// País B
let populacaoPaisB = +prompt('Digite a população do país B: ');
while (populacaoPaisB < populacaoPaisA){
    console.log('A população do país A deve ser menor que a do país B')
    populacaoPaisB = +prompt('Digite a população do país B: ');
}

console.log('Digite a taxa de crescimento populacional do país B:');
let taxaCrescimentoB = +prompt('');
while (taxaCrescimentoB > taxaCrescimentoA){
    console.log('A taxa de crescimento do país A deve ser maior que a do país B')
    console.log('Digite a taxa de crescimento populacional do país B:');
    taxaCrescimentoB = +prompt('');
}

taxaCrescimentoA = taxaCrescimentoA/100;
taxaCrescimentoB = taxaCrescimentoB/100;

futuroPaisA = populacaoPaisA;
futuroPaisB = populacaoPaisB;

while (futuroPaisA < futuroPaisB) {
    futuroPaisA = futuroPaisA + (taxaCrescimentoA*populacaoPaisA);
    futuroPaisB = futuroPaisB + (taxaCrescimentoB*populacaoPaisB);
    contadorAnos++
}
console.log(`O país A ultraparrá a população do páis B em ${contadorAnos} anos.`);