const prompt = require("prompt-sync")();

console.clear()
console.log("Módulo 01 - Semana 01\n")
console.log("Projeto 01 - A Jornada do Herói")
console.log()
console.log("Bem-vindo a BLUE")
console.log()
console.log("Você escolheu se tornar um DEV. Será uma aventura e tanto, hein?")
console.log("No entanto, nada é impossível para quem está determinado e tem as condições necessárias, não é mesmo?")
console.log("Para suas aventuras nos estudos, é muito importante completar todos os desafios propostos. Assim, teremos certeza que estará pronto para começar a navegar na imensidão do mercado de trabalho de tecnologia.")
console.log()
console.log("Vamos checar se você aproveitou os seus estudos no Módulo 0?")
prompt()
console.log()
console.log("Para saber o seu aproveitamento e se deve seguir a jornada, vamos fazer 05 perguntas de respostas sim ou não.")
console.log()
console.log("Responda S para SIM")
console.log("Responda N para NÃO")
console.log()

const perguntas = [
    "Você conheceu o SCRATCH e escreveu o Jogo do Dinossauro? ",
    "Assistiu a todos os vídeos sobre JavaScript? ",
    "Instalou a IDE e os complementos necessários? ",
    "Resolveu mais da metade dos exercícios propostos? ",
    "Finalizou o desafio Jogo do Detetive em JavaScript? "
]

let quantidadeSim = 0

for (let i = 0; i < perguntas.length; i++) {
    console.log(perguntas[i])
    let respostas = prompt('').toUpperCase()
    while (respostas != 'S' && respostas != 'N') {
        console.log('Responda S para SIM')
        console.log('Responda N para NÃO')
        console.log(perguntas[i])
        respostas = prompt('').toUpperCase()
    }
    if (respostas == "S") {
        quantidadeSim++
    }
    console.log()
}

console.log(`${quantidadeSim} de 5`)
console.log()

switch (quantidadeSim) {
    case 5:
        console.log(`Uau! Você completou tudo e está pronto para seguir a sua jornada!`);
        break;
    case 4:
        console.log(`Você está preparado, mas seria importante cumprir todos os desafios para seguir detonando!`);
        break;
    case 3:
        console.log(`Quase lá! Complete mais uma missão para seguir a jornada.`);
        break;
    case 2: case 1:
        console.log(`Você apenas começou e deve cumprir mais missões para avançar.`);
        break;
    default:
        console.log(`Ainda não deu o pontapé inicial, não é? Força na peruca e não fique para trás!`)
}