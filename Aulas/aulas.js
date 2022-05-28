const prompt = require("prompt-sync")();
// // Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais.

// console.clear()
// console.log("Qual é maior?")
// let numero1 = +prompt("Fale um número: ")
// let numero2 = +prompt("Fale outro número: ")

// if (numero1 > numero2){
//     console.log(`${numero1} é maior que ${numero2}`)
// } else if (numero2>numero1){
//     console.log(`${numero2} é maior que ${numero1}`)
// } else {
//     console.log(`Os números são iguais`)
// }
// console.log()


// // Faça um programa que leia um número, e informe se ele é par ou impar
// console.log("Par ou ímpar")
// let numero3 = +prompt("Fale um número: ")
// let resto = numero3%2

// if (resto == 0){
//     console.log(`${numero3} é par`)
// } else {
//     console.log(`${numero3} é ímpar`)
// }


// // TESTANDO O SWITCH
// let numero = +prompt("Insira um número: ");

// switch (numero) {
//     case 1:
//         console.log("1");
//         break;
//     case 2:
//         console.log("2");
//         break;
//     case 3: case 4:
//         console.log("Maior que 2, menor que 5");
//         break;
//     default: 
//         console.log("Nenhuma opção");        
// }

// // AULA 5
/*
Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Estado Civil: 's', 'c', 'v', 'd';
Caso o usuário digite algum dado inválido, ele deve retornar ao início do programa.
*/

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