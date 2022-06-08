console.clear();
const prompt = require('prompt-sync')();

// Leia um valor inteiro X. 
// Em seguida mostre os ímpares de 1 até X, um valor por linha, inclusive o X, se for o caso. 
// Use o laço FOR.

let numero = +prompt('Insira um número: ');
while (isNaN(numero)){
    console.log('Você não digitou um número.');
    numero = +prompt('Insira um número: ');
}

for (i = 0; i <= numero; i++){
    if (i % 2 == 0){
        continue;
    }
    console.log(i);
}