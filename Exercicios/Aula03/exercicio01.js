console.clear()
const prompt = require("prompt-sync")();

//1. Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais.

console.log("Qual é maior?")
let numero1 = +prompt("Fale um número: ")
let numero2 = +prompt("Fale outro número: ")

if (numero1 > numero2){
    console.log(`${numero1} é maior que ${numero2}`)
} else if (numero2>numero1){
    console.log(`${numero2} é maior que ${numero1}`)
} else {
    console.log(`Os números são iguais`)
}
console.log()