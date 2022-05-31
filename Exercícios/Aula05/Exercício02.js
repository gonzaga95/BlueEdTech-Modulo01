console.clear()
const prompt = require("prompt-sync")();

// // Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Estado Civil: 's', 'c', 'v', 'd';
// Caso o usuário digite algum dado inválido, ele deve retornar ao início do programa.

let nome;
let idade;
let salario;
let estadoCivil;
let opcoes = ['s', 'c', 'v', 'd']

while (true) {
    console.log("Digite seu nome:");
    nome = prompt('');
    if (nome.length <= 3) {
        continue
    }

    console.log("Digite sua idade:");
    idade = +prompt('');
    if (nome <= 0 || nome > 150) {
        continue
    }

    console.log("Digite o seu salário:");
    salario = +prompt('');
    if (salario <= 0 ) {
        continue
    }

    console.log("Digite seu estado civil:");
    console.log(opcoes);
    estadoCivil = prompt('');
    for (let i=0; i < opcoes.length; i++) {
        if (salario != opcoes[i]) {
            continue
        }
    }
    console.log("Você inseriu os dados corretamente!")
    prompt()
    break;
}