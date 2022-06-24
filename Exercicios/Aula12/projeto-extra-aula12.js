console.clear();
const prompt = require("prompt-sync")();

// A ideia deste projeto é criar um programa que simule uma votação com todo o conteúdo visto no módulo
// até este momento.
// O programa deve:
// Receber votos até que o usuário diga que não tem mais ninguém para votar;
// Ter uma função chamada autorizaVoto (anoNascimento) retornando: “Negado”, “Facultativo” ou “Obrigatório”;
// Ter uma função chamada votação (autorização, voto) que valida e contabiliza o voto (número entre 1 e 4 ou anulado)
// ou retorna a mensagem: “Você não pode votar”, caso o voto não possa ser contabilizado;
// Contabilizar os votos conforme os significados:
// 1 = Candidato 1
// 2 = Candidato 2
// 3 = Candidato 3
// 4 = Voto em branco
// Outro = voto nulo
// Ter uma função chamada exibirResultados() que deve mostrar:
// O total de votos para cada candidato
// O total de votos em branco
// O total de votos nulos
// Qual candidato venceu a votação

let votacaoAberta = true;
let permissao;

let candidatos = [
    ["Candidato 1", 1],
    ["Candidato 2", 2],
    ["Candidato 3", 3],
    ["Branco", 4],
];

let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;
let votoBranco = 0;
let votoAnulado = 0;

function autorizaVoto(ano) {
    let idade = 2022 - ano;
    if (idade < 16) {
        permissao = false;
        return "Voto negado";
    } else {
        permissao = true;
        if (idade < 18) {
            return "Voto facultativo";
        }
        return "Voto obrigatório";
    }
}

function votacao(autorizacao, voto) {
    if (autorizacao) {
        switch (voto) {
            case 1:
                candidato1++;
                break;
            case 2:
                candidato2++;
                break;
            case 3:
                candidato3++;
                break;
            case 4:
                votoBranco++;
                break;
            default:
                votoAnulado++;
                break;
        }
        console.log("Registrado");
    } else {
        console.log("Você não pode votar");
    }
}

function exibirResultados(){
    console.log(`O Candidato 1 teve ${candidato1} votos`);
    console.log(`O Candidato 2 teve ${candidato2} votos`);
    console.log(`O Candidato 3 teve ${candidato3} votos`);
    console.log(`Tiveram ${votoBranco} votos em branco`);
    console.log(`Tiveram ${votoAnulado} votos nulos`);
    console.log();
    if (candidato1 > candidato2 && candidato1 > candidato3){
        console.log(`O Candidato 1 venceu a eleição`);
    } else if (candidato2 > candidato1 && candidato2 > candidato3){
        console.log(`O Candidato 2 venceu a eleição`);
    } else if (candidato3 > candidato1 && candidato3 > candidato2){
        console.log(`O Candidato 3 venceu a eleição`);
    } else {
        console.log('Houve um empate.');
    }
}

while (votacaoAberta) {
    console.log('Para votar, é necessário apresentar o seu ano de nascimento (AAAA)');
    console.log('Em seguida, escolher uma opção');

    let nascimento = +prompt('Insira seu ano de nascimento (AAAA): ');

    console.log(
        "Você tem a opção de tais canditatos, seguidos de seus respectivos números na urna"
    );
    console.table(candidatos);
    console.log();
    
    let escolha = +prompt('Insira o seu voto: ');

    autorizaVoto(nascimento);
    votacao(permissao, escolha);

    while (true) {
        let continuar = prompt(
            "Deseja inserir mais um voto? [S/N] "
        ).toUpperCase();
        if (continuar === "S") {
            break;
        } else if (continuar === "N") {
            votacaoAberta = false;
            break;
        }
        console.log("Responda S para SIM");
        console.log("Responda N para NÃO");
    }
}

exibirResultados();

