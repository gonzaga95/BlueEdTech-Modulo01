console.clear();
const prompt = require('prompt-sync')();

// 2. Crie um sistema de cadastro de funcionários que deve perguntar 
// quantos funcionarios serão cadastrados e criar um objeto novo 
// para cada funcionário cadastrado com as informações: nome, cargo e salário. 
// Ele deve armazenar todos esses objetos em uma lista.

let numeroFuncionarios;
const funcionarios = [];

console.log('Cadastro de novos funcionários');
console.log('Quantos funcionários deseja cadastrar?');

numeroFuncionarios = +prompt('');

for (let i = 0; i < numeroFuncionarios; i++){
    funcionarios[i] = {};
    console.log(`Qual é nome do ${i+1}º funcionário? `);
    funcionarios[i].nome = prompt(``);
    console.log(`Qual é cargo do ${i+1}º funcionário? `);
    funcionarios[i].cargo = prompt(``);
    console.log(`Qual é salário do ${i+1}º funcionário? `);
    funcionarios[i].salario = prompt(``);
    console.clear();
}

console.log('O cadastro dos seguintes funcionários foi realizado');
console.log(funcionarios);