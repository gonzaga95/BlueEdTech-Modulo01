const prompt = require("prompt-sync")();
console.clear();

// Crie uma função para inverter um array passado pelo usuário.

const array = [];

function arrayInverter(a){
    let invertida = a.reverse();
    return invertida;    
}

console.log('Você deve inserir uma lista e a mesma será aprensentada em ordem inversa');
const tamanhoArray = +prompt('Quantos elementos terá a lista? ');

for (i = 0; i < tamanhoArray; i++){
    let elemento = prompt(`Qual é o ${i+1}º elemento? `);
    array.push(elemento);
}

console.log();
console.log('A array invertida é:')
console.log(arrayInverter(array));