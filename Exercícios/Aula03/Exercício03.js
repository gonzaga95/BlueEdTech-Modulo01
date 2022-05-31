console.clear()
const prompt = require("prompt-sync")();

//3. Faça um programa que leia um número, e informe se ele é par ou impar
console.log("Par ou ímpar")
let numero3 = +prompt("Fale um número: ")
let resto = numero3%2

if (resto == 0){
    console.log(`${numero3} é par`)
} else {
    console.log(`${numero3} é ímpar`)
}