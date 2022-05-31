console.clear()
const prompt = require("prompt-sync")();

// 5) Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.

let nome;
let opcoes = ["1. Calças", "2. Blusas", "3. Vestidos"];
let escolha;

console.log(`Bem-vinde, Sr(a) ${nome}
Escolha um produto pelo número da opção`)
for (i=0;i < opcoes.length; i++){
    console.log(opcoes[i])
}
console.log();
escolha = +prompt('')-1;
console.log()
console.log(`Você escolheu ${opcoes[escolha]}`);