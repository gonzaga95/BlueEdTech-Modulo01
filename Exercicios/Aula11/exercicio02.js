const prompt = require("prompt-sync")();
console.clear();

// Construa uma função que receba uma data no formato DD/MM/AAAA
// e devolva uma string no formato 'D de mesPorExtenso de AAAA'.
// Valide a data e retorne NULL caso a data seja inválida.

let dataInserida;

function retornaData(data) {
    let diaCompleto = data.split("/");
    if (diaCompleto[1] == 1) {
        console.log(`${diaCompleto[0]} de janeiro de ${diaCompleto[2]}`);
    } else if (diaCompleto[1] == 2) {
        console.log(`${diaCompleto[0]} de fevereiro de ${diaCompleto[2]}`);
    } else if (diaCompleto[1] == 3) {
        console.log(`${diaCompleto[0]} de março de ${diaCompleto[2]}`);
    } else if (diaCompleto[1] == 4) {
        console.log(`${diaCompleto[0]} de abril de ${diaCompleto[2]}`);
    } else if (diaCompleto[1] == 5) {
        console.log(`${diaCompleto[0]} de maio de ${diaCompleto[2]}`);
    } else if (diaCompleto[1] == 6) {
        console.log(`${diaCompleto[0]} de junho de ${diaCompleto[2]}`);
    } else if (diaCompleto[1] == 7) {
        console.log(`${diaCompleto[0]} de julho de ${diaCompleto[2]}`);
    } else if (diaCompleto[1] == 8) {
        console.log(`${diaCompleto[0]} de agosto de ${diaCompleto[2]}`);
    } else if (diaCompleto[1] == 9) {
        console.log(`${diaCompleto[0]} de setembro de ${diaCompleto[2]}`);
    } else if (diaCompleto[1] == 10) {
        console.log(`${diaCompleto[0]} de outubro de ${diaCompleto[2]}`);
    } else if (diaCompleto[1] == 11) {
        console.log(`${diaCompleto[0]} de novembro de ${diaCompleto[2]}`);
    } else if (diaCompleto[1] == 12) {
        console.log(`${diaCompleto[0]} de dezembro de ${diaCompleto[2]}`);
    }
}

function validaData(data) {
    let diaExtraido = dataInserida.slice(0, -8);
    let mesExtraido = dataInserida.slice(3, 5);
    let anoExtraido = dataInserida.slice(6);

    if (isNaN(diaExtraido) || isNaN(mesExtraido) || isNaN(anoExtraido)) {
        return false;
    }

    if (diaExtraido < 1 || diaExtraido > 31) {
        return false;
    } else if (mesExtraido < 1 || mesExtraido > 12) {
        return false;
    } else if (anoExtraido < 1000 || anoExtraido > 9999) {
        return false;
    } else {
        return true;
    }
}

while (true) {
    dataInserida = prompt("Insira uma data [DD/MM/AAAA] ");
    if (validaData(dataInserida)) {
        break;
    } else {
        console.log("NULL");
        console.log();
    }
}

console.log();
retornaData(dataInserida);
