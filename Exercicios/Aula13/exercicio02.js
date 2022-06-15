console.clear();
const prompt = require('prompt-sync')();

// Crie um sistema de cadastro de funcionários que deve criar um objeto novo para cada funcionário cadastrado 
// com as informações: nome, cargo e salário. Ele deve armazenar todos esses objetos em uma lista.
//  Ao final de cada cadastro ele deve perguntar se deseja cadastrar um novo funcionário e recomeçar o processo,
//   e caso não haja mais funcionários para cadastrar, ele deve chamar uma função que deve apresentar 
//   a quantidade de funcionários com cada cargo e os nomes deles. 
// (Você pode limitar as opções de cargo para facilitar.)

let cadastrarNovo = true;
const ListaFuncionarios = [];
const listaCargos = ['Senior', 'Pleno', 'Junior'];
let listaSenior = [];
let listaPleno = [];
let listaJunior = [];

function mostrarFuncionarios() {
    console.log(`A lista de funcionários tem ${ListaFuncionarios.length} cadastros.`);
    if (listaSenior.length >= 1) {
        if (listaSenior.length === 1) {
            console.log('Foi cadastrado 1 funcionário Senior:');
            console.log(listaSenior.toString());
        } else {
            console.log(`Foram cadastrados ${listaSenior.length} funcionários Seniores:`);
            console.log(listaSenior.join(', '));
        }
    }
    if (listaPleno.length >= 1) {
        if (listaPleno.length === 1) {
            console.log('Foi cadastrado 1 funcionário Pleno:');
            console.log(listaPleno.toString());
        } else {
            console.log(`Foram cadastrados ${listaPleno.length} funcionários Plenos:`);
            console.log(listaPleno.join(', '));
        }
    }
    if (listaJunior.length >= 1) {
        if (listaJunior.length === 1) {
            console.log('Foi cadastrado 1 funcionário Júnior:');
            console.log(listaJunior.toString());
        } else {
            console.log(`Foram cadastrados ${listaJunior.length} funcionários Júnior:`);
            console.log(listaJunior.join(', '));
        }
    }
}

while (cadastrarNovo) {
    console.clear();
    console.log('Cadastro de novo funcionário');

    console.log();
    let nome = prompt('Qual é o nome do funcionário? ');
    
    console.log('Qual é o cargo do funcionário?')
    console.log({listaCargos});
    let cargo = prompt('').toLowerCase();

    let salario = +prompt('Qual é o salário do funcionário? ');
    let funcionario = {
        nome: nome,
        cargo: cargo,
        salario: salario
    }
    ListaFuncionarios.push(funcionario);
    switch (cargo) {
        case 'senior':
            listaSenior.push(funcionario.nome);
            break;
        case 'pleno':
            listaPleno.push(funcionario.nome);
            break;
        case 'junior':
            listaJunior.push(funcionario.nome);
            break;
    }
    
    console.log();
    console.log(`Funcionário ${funcionario.nome} cadastrado com sucesso`);

    console.log();
    let sair = prompt('Deseja cadastrar outro funcionário? [sim] [nao] ').toLowerCase();
    if (sair === 'nao') {
        cadastrarNovo = false;
    }
}
// console.log(ListaFuncionarios)
mostrarFuncionarios();