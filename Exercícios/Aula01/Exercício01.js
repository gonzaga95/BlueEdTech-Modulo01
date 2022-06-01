console.clear()
const prompt = require("prompt-sync")();

// 01. Leia 2 valores A e B, que correspondem a 2 notas de um aluno. A seguir calcule e informe a média ponderada do aluno, sabendo que a nota A tem peso 4 e a nota B tem peso 6. Ex: nota a * 4 e nota b * 6.

let notaA = +prompt('Insira a primeira nota: ');
let notaB = +prompt('Insira a segunda nota: ')
let pesoA = 4
let pesoB = 6

let notaMedia = (notaA*pesoA + notaB*pesoB) / (pesoA+pesoB)

console.log(`A média ponderada do aluno é ${notaMedia.toFixed(1)}`)