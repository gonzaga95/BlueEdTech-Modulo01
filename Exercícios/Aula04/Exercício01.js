console.clear();
const prompt = require("prompt-sync")();

// 1) Reajuste salarial - As empresas @.com resolveram dar um aumento de salário aos seus colaboradores
//  e lhe contrataram para desenvolver o programa que calculará os reajustes. 
//  Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, 
//  baseado no salário atual:
// Salários até R$ 280,00 (incluindo): aumento de 20%. 
// Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
// Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
// Salários de R$ 1500,00 em diante: aumento de 5%.
// Após o aumento ser realizado, informe na tela:
// O salário antes do reajuste.
// O percentual de aumento aplicado.
// O valor do aumento.
// O novo salário, após o aumento.

console.log('O patrão ficou maluco e resolveu dar aumento salarial para TODES!');
console.log('Vamos conferir o seu reajuste?');
const reajustes = [0.2, 0.15, 0.1, 0.05];
let valorAumento;
let salarioNovo;

let salarioAtual = +prompt('Insira o seu salário atual: ');
while (isNaN(salarioAtual)){
    console.log('O valor deve ser numérico e com pontos apenas para centavos');
    console.log('Exemplo: 1300.59');
    salarioAtual = +prompt('Insira o seu salário atual: ');
}

console.clear();
if (salarioAtual >= 1500) {
    valorAumento = salarioAtual * reajustes[3];
    salarioNovo = salarioAtual + valorAumento;
    console.log(`O seu salário de R$ ${salarioAtual} foi reajustado em ${reajustes[3]*100}%,
o que equivale a R$ ${valorAumento}.
Seu novo salário é de R$ ${salarioNovo}`);
} else if (salarioAtual >= 700) {
    valorAumento = salarioAtual * reajustes[2];
    salarioNovo = salarioAtual + valorAumento;
    console.log(`O seu salário de R$ ${salarioAtual} foi reajustado em ${reajustes[2]*100}%,
o que equivale a R$ ${valorAumento}.
Seu novo salário é de R$ ${salarioNovo}`);
} else if (salarioAtual > 280) {
    valorAumento = salarioAtual * reajustes[1];
    salarioNovo = salarioAtual + valorAumento;
    console.log(`O seu salário de R$ ${salarioAtual} foi reajustado em ${reajustes[1]*100}%,
o que equivale a R$ ${valorAumento}.
Seu novo salário é de R$ ${salarioNovo}`);
} else {
    valorAumento = salarioAtual * reajustes[0];
    salarioNovo = salarioAtual + valorAumento;
    console.log(`O seu salário de R$ ${salarioAtual} foi reajustado em ${reajustes[0]*100}%,
o que equivale a R$ ${valorAumento}.
Seu novo salário é de R$ ${salarioNovo}`);
}