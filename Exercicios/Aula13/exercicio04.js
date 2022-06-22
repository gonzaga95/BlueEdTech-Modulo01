console.clear();
const prompt = require("prompt-sync")();

// Faça um programa de agenda telefônica que deve ter as funções: Adicionar, Alterar, Deletar e Consultar.
// Ao adicionar um novo contato, ele deve criar um objeto com os atributos nome e telefone,
// e adicionar esse objeto à uma lista com todos os contatos.
// Ao alterar, ele deve receber o nome do contato a ser alterado e o novo telefone.
// Exiba uma mensagem de erro caso o contato não exista.
// Ao deletar, ele deve apagar o objeto com o nome passado.
// Ao consultar, ele deve receber um nome e procurar esse contato na agenda exibindo o número.
// Exiba uma mensagem de erro caso o contato não exista.

const listaContatos = [];

function checarTelefoneValido() {
    let resposta = +prompt("");
    while (isNaN(resposta) || resposta.length < 9) {
        if (isNaN(resposta)) {
            console.log("Telefone inserido inválido.");
            console.log("Você deve digitar apenas números: ");
            resposta = +prompt("Insira o número do telefone ");
        } else {
            console.log("Telefone inserido inválido.");
            console.log("O número de telefone deve conter 9 dígitos");
            resposta = +prompt("Insira o número do telefone ");
        }
    }
    return resposta;
}

function adicionarContato() {
    let nome = prompt("Qual é o nome do novo contato? ");
    console.log("Qual é o telefone do novo contato?");
    let telefone = checarTelefoneValido();

    let novoContato = {
        nome: nome,
        telefone: telefone,
    };

    listaContatos.push(novoContato);
}

function alterarContato(a) {
    for (let nomes of listaContatos) {
        if (nomes.nome === a) {
            let indice = listaContatos.indexOf(nomes);
            // if (indice === -1) {
            //     console.log('Nome não encontrado');
            // } else {
            console.log("Qual é novo número de telefone do contato? ");
            listaContatos[indice].telefone = checarTelefoneValido();
            // }
        }
    }
}

function consultarContato(a) {
    for (let contato of listaContatos) {
        if (listaContatos.nome === a) {
            let indice = listaContatos.indexOf(contato);
            // if (indice === -1) {
            //     console.log('Nome não encontrado');
            // } else {
            console.log(contato[indice]);
            // }
        }
    }
}

function deletarContato(a) {
    for (let nomes of listaContatos) {
        if (listaContatos.nome === a) {
            let indice = listaContatos.indexOf(nomes);
            // if (indice === -1) {
            //     console.log('Nome não encontrado');
            // } else {
            listaContatos.splice(indice, 1);
            // }
        }
    }
}
