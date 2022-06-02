// // Faça um Programa que leia 20 números inteiros e armazene-os num array. 
// Armazene os números pares no array PAR e os números IMPARES no array IMPAR. 
// Imprima os três vetores.

let array = [];
let arrayPar = [];
let arrayImpar = [];

for (let i = 1; i <= 20; i++) {
    let numero = i;
    array.push(numero);
    if (numero % 2 == 0) {
        arrayPar.push(numero);
    } else {
        arrayImpar.push(numero);
    }
}
console.log(`A lista de todos os números é: 
${array}

A lista dos números ímpares é:
${arrayImpar}

A lista dos números pares é:
${arrayPar}`);
console.log();