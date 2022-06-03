console.clear();
const prompt = require("prompt-sync")();

console.log("Módulo 01 - Semana 02");
console.log("Projeto 02 - Jo Ken Pô!");
console.log();
console.log('A máquina VS você: quem ganha? ');
prompt('ENTER para começar');

let continuar = 'S';
while (continuar == 'S') {
  console.clear();
  const jokenpo = [
    "PEDRA", 
    "PAPEL", 
    "TESOURA"
  ];
  let tentativas = +prompt("Escolha o número de tentativas: ");
  while (isNaN(tentativas)){
    tentativas = +prompt("Escolha o NÚMERO de tentativas: ");
  }

  let vitoriasMinhas = 0;
  let vitoriasPC = 0;

  for (let i=0; i < tentativas; i++) {
    console.log();
    console.log("PEDRA, PAPEL ou TESOURA");
    let escolhaMinha = prompt("Qual você escolhe? ").toUpperCase();
    while (escolhaMinha != 'PEDRA' && escolhaMinha != 'PAPEL' && escolhaMinha != 'TESOURA'){
      console.log('Entrada inválida');
      console.log("Escreva: PEDRA, PAPEL ou TESOURA");
      escolhaMinha = prompt('').toUpperCase();
    }
    const escolhaPC = jokenpo[Math.floor(Math.random()*3)];
    console.clear();
    console.log("JO KEN PÔ");
    console.log(`Você foi de ${escolhaMinha}`);
    console.log(`O computador foi de ${escolhaPC}`);
    console.log();

    switch (escolhaPC) {
      case 'PEDRA':
      switch (escolhaMinha) {
        case "PEDRA":
          console.log("Deu EMPATE");
          break;
        case "PAPEL":
          console.log("Você GANHOU!");
          vitoriasMinhas++;
          break;
        case "TESOURA":
          console.log("O computador GANHOU!");
          vitoriasPC++;
          break;
      }
      break;
    } switch (escolhaPC) {
      case 'PAPEL':
        switch (escolhaMinha) {
        case 'PEDRA':
          console.log("O computador GANHOU!");
          vitoriasPC++;
          break;
        case 'PAPEL':
          console.log("Deu EMPATE");
          break;
        case 'TESOURA':
          console.log("Você GANHOU!");
          vitoriasMinhas++;
          break;
      }
      break;
    } switch (escolhaPC) {
      case 'TESOURA':
      switch (escolhaMinha) {
        case 'PEDRA':
          console.log("Você GANHOU!");
          vitoriasMinhas++;
          break;
        case 'PAPEL':
          console.log("O computador GANHOU!");
          vitoriasPC++;
          break;
        case 'TESOURA':
          console.log("Deu EMPATE");
          break;
      }
      break;
    }    
  }
  console.log();
  prompt('ENTER para ver o resultado final');
  console.clear();
  
  console.log(`Você ganhou ${vitoriasMinhas} rodadas e o computador ganhou ${vitoriasPC}`)

  if (vitoriasMinhas>vitoriasPC) {
    console.log(`Você foi o campeão`)
  } else if (vitoriasPC>vitoriasMinhas) {
    console.log(`O computador foi o campeão`)
  } else {
    console.log("Houve um empate. Jogue novamente!")
  }

  console.log();
  continuar = prompt("Deseja continuar [S/N]? ").toUpperCase()
  while (continuar != "S" && continuar != "N") {
    continuar = prompt("Deseja continuar [S/N]? ").toUpperCase()
    }
}