console.clear()
const prompt = require("prompt-sync")();

// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

let usuario;
let senha;

console.log('Crie um usuário e uma senha diferentes entre si.');
usuario = prompt('Insira um nome de usuário: ');
senha = prompt('Agora insira uma senha: ');
while (senha == usuario) {
    console.log('A senha deve ser diferente do usuário!')
    senha = prompt('Insira uma senha: ');
}
console.clear()
console.log('Pronto!')