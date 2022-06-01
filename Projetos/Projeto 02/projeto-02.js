//

let continuar = "S"

while (continuar == "S") {
const jokenpo = ["\nPEDRA", "PAPEL", "TESOURA"]
let tentativas = +prompt("Escolha o número de tentativas: ")

let vitoriasMinhas = 0
let vitoriasPC = 0


for (let i=0; i<tentativas; i++) {
  console.log("[0] PEDRA \n[1] PAPEL \n[2] TESOURA")
  let escolhaMinha = prompt("Qual você escolhe? ")
  const escolhaPC = Math.floor(Math.random()*3)
  console.log("\nJO KEN PÔ\n")
  console.log(`Você foi de ${jokenpo[escolhaMinha]}`)
  console.log(`O computador foi de ${jokenpo[escolhaPC]}`)

  if (escolhaPC == 0) {
    if (escolhaMinha == 0) {
      console.log("Deu EMPATE")
    } else if (escolhaMinha == 1 ) {
      console.log("Você GANHOU!")
      vitoriasMinhas++
    } else if (escolhaMinha == 2) {
      console.log("O computador GANHOU!")
      vitoriasPC++
    } else {
      console.log("Opção inválida! Jogue [0] PEDRA,\n [1] PAPEL,\n ou [2] TESOURA")
    }
  } else if (escolhaPC == 1) {
    if (escolhaMinha == 0) {
      console.log("O computador GANHOU!")
      vitoriasPC++
    } else if (escolhaMinha == 1 ) {
      console.log("Deu EMPATE")
    } else if (escolhaMinha == 2) {
      console.log("Você GANHOU!")
      vitoriasMinhas++
    } else {
      console.log("Opção inválida! Jogue [0] PEDRA,\n [1] PAPEL,\n ou [2] TESOURA")
    }
  } else if (escolhaPC == 2) {
    if (escolhaMinha == 0) {
      console.log("Você GANHOU!")
      vitoriasMinhas++
    } else if (escolhaMinha == 1 ) {
      console.log("O computador GANHOU!")
      vitoriasPC++      
    } else if (escolhaMinha == 2) {
      console.log("Deu EMPATE")
    } else {
      console.log("Opção inválida! Jogue [0] PEDRA,\n [1] PAPEL,\n ou [2] TESOURA")
    }
  }
}
console.log(`\nVocê ganhou ${vitoriasMinhas} rodadas e o computador ganhou ${vitoriasPC}`)

if (vitoriasMinhas>vitoriasPC) {
  console.log(`\nVocê foi o campeão`)
} else if (vitoriasPC>vitoriasMinhas) {
  console.log(`\nO computador foi o campeão`)
} else {
  console.log("\nHouve um empate. Jogue novamente!")
}
  
  continuar = prompt("\nDeseja continuar [S/N]? ").toUpperCase()
  while (continuar != "S" && continuar != "N") {
    continuar = prompt("\nDeseja continuar [S/N]? ").toUpperCase()
  }
}