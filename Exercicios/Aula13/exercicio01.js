console.clear();
const prompt = require('prompt-sync')();

// Crie um objeto pessoa com os atributos: nome, idade, peso e altura. 
// Além disso ela deve ter os métodos: Envelhecer, engordar, emagrecer, crescer. 
// Por padrão, a cada ano que nossa pessoa envelhece até os 21 anos, ela deve crescer 0,5 cm. 
// Crie um método bio que retorna uma string com todas as informações da pessoa.

let nome = prompt('Qual é nome? ');
let idade = +prompt('Qual é idade? ');
let peso = +prompt('Qual é peso? ');
let altura = +prompt('Qual é altura em cm? ');

let pessoa = {
    nome: nome,
    idade: idade,
    peso: peso,
    altura: altura,
    envelhecer: function(anos = 1){
        while (this.idade < 21){
            this.crescer();
            this.idade += anos;
        }
        if (idade > 21) {
        this.idade += anos;
        }
    },
    engordar: function(quilos){
        this.peso += quilos;
    },
    emagrecer: function(quilos){
        this.peso -= quilos;
    },
    crescer: function(crescimento = 0.5){
        this.altura += crescimento;
    },
    bio: function(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Peso: ${this.peso}`);
        console.log(`Altura: ${this.altura}`);
    }
}

console.log(pessoa.bio());
pessoa.engordar(1.5);
pessoa.envelhecer(20);

console.log();
console.log(pessoa.bio());