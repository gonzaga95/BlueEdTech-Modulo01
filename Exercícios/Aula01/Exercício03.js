console.clear()
const prompt = require("prompt-sync")();

// Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. Exemplo: eu tenho 30 anos, 2 meses e 7 dias. Calcule e exiba o total de dias que essa pessoa já viveu. Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.

let anosVividos = 0;
let mesesVividos = 0;
let diasVividos = 0;
let diasTotal = 0;

console.log('Vamos calcular dias você já viveu?');
console.log('Insira sua idade em anos: ');
anosVividos = +prompt('');
console.log();
console.log('Insira quantos meses completos se passaram desde o seu último aniversário');
mesesVividos = +prompt('');
console.log();
console.log('Insira quantos dias se passaram desde o mesmo dia do mês do seu aniverário');
console.log('Exemplo: Hoje é dia 03 e meu aniversário dia 25, logo se passaram 08 dias.')
diasVividos = +prompt('');
console.log();

diasTotal = anosVividos*365 + mesesVividos*30 + diasVividos

console.log(`Você já viveu ${diasTotal} dias.`)