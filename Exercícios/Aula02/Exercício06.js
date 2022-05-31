console.clear()
const prompt = require("prompt-sync")();

// Calculadora de Dano - Escreva um programa que receba dois valores digitados pelo usuário: quantidade de vida de um monstro (entre 10 e 50) e valor do ataque do jogador por turno (entre 5 e 10). Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar para conseguir derrotar o monstro (o jogador irá derrotar o monstro em N turnos).

let hitpoints = 0;
let poderAtaque = 0;
let turnos = 0;

console.log('Qual é o valor de hitpoints do monstro?');
hitpoints = +prompt('');
while (hitpoints < 10 || hitpoints > 50) {
    console.log('O valor deve estar entre 10 e 50');
    console.log('Qual é o valor de hitpoints do monstro?');
    hitpoints = +prompt('');
}
console.log('Qual é o valor do dano de ataque da guerreira?');
poderAtaque = +prompt('');
while (poderAtaque < 5 || poderAtaque > 10) {
    console.log('O valor deve estar entre 05 e 10');
    console.log('Qual é o valor do dano de ataque da guerreira?');
    poderAtaque = +prompt('');
}

turnos = hitpoints / poderAtaque;
console.log();
console.log(`O guerreiro derrotará o monstro em ${Math.ceil(turnos)} turnos.`);