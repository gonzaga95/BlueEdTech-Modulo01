console.clear()
const prompt = require("prompt-sync")();

// Faça o cálculo contrário: Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias. Também considere todo ano com 365 dias e todo mês com 30 dias.

let diasTotal = 0;
let idadeAnos;
let idadeMeses;
let idadeDias;

console.log('Quantos dias você já viveu? ');
diasTotal = +prompt('');

idadeAnos = diasTotal/365
idadeMeses = (diasTotal%365)/30 // tá dando errado kkk
idadeDias = idadeMeses%30 // não tá certo

console.log(`A sua idade é de ${idadeAnos.toFixed(0)} anos, ${idadeMeses.toFixed(0)} meses e ${idadeDias.toFixed(0)} dias.`)