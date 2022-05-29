const prompt = require("prompt-sync")();

console.clear();
console.log("Módulo 0\n");
console.log("O Jogo do Detetive");
console.log();
console.log("Na última semana, um horrível acidente ocorreu em nossa cidade. Por esse motivo, todos os cidadãos precisam responder a um pequeno questionário. Assim, os envolvidos podem ser identificados mais rapidamente.");
console.log();
console.log("O questionário tem 05 perguntas.");
console.log("Responda S para SIM");
console.log("Responda N para NÃO");
console.log();

const questionario = [
    "Você sabe o que aconteceu na semana passada? ",
    "Você estava em sua residência todos os dias entre 08pm e 06am? ",
    "Você é vegetariano ou vegano? ",
    "Você joga ou já jogou League of Legends? ",
    "Você sabe manusear objetos cortantes? "
];

let numeroDeSim = 0;

for (let i = 0; i < questionario.length; i++) {
    console.log(questionario[i]);
    let respostas = prompt('').toUpperCase();
    while (respostas != "S" && respostas != 'N') {
        console.log("Responda S para SIM");
        console.log("Responda N para NÃO");
        console.log(questionario[i]);
        respostas = prompt('').toUpperCase();
    }
    if (respostas == "S") {
        numeroDeSim++
    }
    console.log()
};

if (numeroDeSim >= 4) {
    console.log("Preso em nome da lei!");
    console.log("De acordo com o Art. 5º da Constituição Federal, você tem o direito de permanecer calado e o direito a um advogado.");
    console.log("Sua contribuição com as investigações será retribuída.");
} else if (numeroDeSim == 3) {
    console.log("Suspeito... Você será monitorado por um tempo.");
    console.log("Não saia da cidade.");
} else {
    console.log("Por hoje você está liberado. \nGratos pela sua colaboração!");
}