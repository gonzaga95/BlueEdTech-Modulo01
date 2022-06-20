console.clear();
const prompt = require('prompt-sync')();

console.log("Módulo 01 - Semana 04");
console.log("Projeto 04 - Ficção Interativa");
console.log();
console.log('O diário de um bodybuilder');
prompt('ENTER para começar');
console.clear();

let repeticoesSemana = 0;
let repetir = true;

function validaSim() {
    let resposta = prompt('').toLowerCase();
    while (resposta != 'sim' && resposta != 'nao') {
        console.log('Por gentileza, responda "sim" ou "nao"');
        resposta = prompt('').toLowerCase();
    }
    return resposta;
}

let mainCharacter = {
    nome: 'Julinho',
    profissão: 'Piloto',
    peso: 59.1,
    ganharMassa: function(a = 0.1){
        if (this.peso < 75) {
        this.peso += a;
        }
    },
    perderMassa: function(a = 0.15){
        if (this.peso > 52) {
        this.peso -= a;
        }
    },
    checaPeso: function(){
        if (this.peso < 62){
            console.log('Frango!!');
            console.log('Tem que malhar mais, p**ra!');
        } else if (this.peso >= 70) {
            console.log('BIIIIRRLL');
            console.log('Fica monstro, p**ra!');
        }
    },
    hidratado: true,
    diaFeliz: 0,
    fadiga: false,
    refeicoes: 0, //Uma por turno - 0 a 3.
    hidratacao: 0, //Um copo por turno - 0 a 3.
    treino: 0, //Uma vez por semana.
    trabalhou: function(a) {
        if (a = 'sim') {
            return true;
        } else {
            return false;
        }
    },
}

function roteiros(){
    let indice;
    let sorte = Math.ceil(Math.random() * 10);
    if (sorte >= 6) {
        indice = 0;
    } else if (sorte >= 3) {
        indice = 1;
    } else {
        indice = 2;
    }
    return indice;
}

const roteirosManha = [
    {roteiro: 'Bom dia, bodybuilder. Você dormiu bem e está descansado para ir trabalhar e aproveitar bem a sua manhã.', trabalhou: mainCharacter.trabalhou('sim'), diaFeliz: mainCharacter.diaFeliz += 2},
    {roteiro: 'Bom dia, Julinho. A noite anterior não foi das mais fáceis, não é? Você não está tão descansado mas deve ir trabalhar', trabalhou: mainCharacter.trabalhou('sim'), diaFeliz: mainCharacter.diaFeliz += 1},
    {roteiro: 'Apenas dia, Julinho. Após uma péssima noite de sono, você perdeu a manhã de trabalho... pelo menos tem a tarde toda para recuperar.', trabalhou: mainCharacter.trabalhou('nao'), diaFeliz: mainCharacter.diaFeliz -= 1}
]

const roteirosTarde = [
    {roteiro: 'Que tarde bacana! Muitos clientes a serem transportados em sua van e a grana tá entrando. Você nem precisou se esforçar, não é maneiro?', trabalhou: mainCharacter.trabalhou('sim'), diaFeliz: mainCharacter.diaFeliz += 2},
    {roteiro: 'Tarde de muito suor, hein? Nem chegamos na academia mas o dia parece que já teve 20 horas. Dias de luta e dias de luta, camarada...', trabalhou: mainCharacter.trabalhou('sim'), diaFeliz: mainCharacter.diaFeliz += 1},
    {roteiro: 'Hoje tá f****. Trânsito horrível, van não anda. Uma tarde perdida!! Não vemos a hora da noite chegar para aliviar o estresse com muitas repetições no treino.', trabalhou: mainCharacter.trabalhou('nao'), diaFeliz: mainCharacter.diaFeliz -= 1}
]

const roteirosNoite = [
    {roteiro: 'A noite chegou e, com ela, a hora de ficar monstro! Muita dedicação e compromisso fazem seu grande objetivo ficar cada vez mais próximo.', diaFeliz: mainCharacter.diaFeliz += 2},
    {roteiro: 'É... mesmo com os ânimos mais pra baixo, você mantém firme o compromisso com o corpo e o projeto.', diaFeliz: mainCharacter.diaFeliz += 1},
    {roteiro: 'Quase arrastado mas você foi ao treino. Entretanto, precisa estar de olho em tudo à sua volta para cumprir o objetivo de ficar grande!!', diaFeliz: mainCharacter.diaFeliz -= 1}
]

const semana = [
    'segunda-feira',
    'terça-feira',
    'quarta-feira',
    'quinta-feira',
    'sexta-feira',
    'sábado',
    'domingo'
];

const turno = [
    'manhã',
    'tarde',
    'noite'
]

while (repetir) {
    repeticoesSemana++;

    for (let dia of semana){
        mainCharacter.hidratacao = 0;
        mainCharacter.refeicoes = 0;
        console.log(`Hoje é ${dia}`);
        for (let hora of turno){
            let indice;
            switch (hora) {
                case 'manhã':
                    indice = roteiros();
                    console.log(`${roteirosManha[indice].roteiro}`);
                    break;
                case 'tarde':
                    indice = roteiros();
                    console.log(`${roteirosTarde[indice].roteiro}`);
                    break;
                case 'noite':
                    indice = roteiros();
                    console.log(`${roteirosNoite[indice].roteiro}`);
                    break;
            }
            prompt();
            console.log(`Fim da ${hora}`);
            console.log('Hora de repor as energias!!');
            console.log('Deseja tomar água?');
            let hidratar = validaSim();
            if (hidratar == 'sim') {
                mainCharacter.hidratacao++;
            }
            console.log('Deseja fazer uma refeição?');
            let comer = validaSim();
            if (comer == 'sim') {
                mainCharacter.refeicoes++;
            }
            console.log(mainCharacter)
        }
    }

    console.log(repeticoesSemana);

    console.log('Deseja experienciar outra semana rotineira do nosso bodybuilder? ');
    let quit = validaSim();
    if (quit == 'sim') {
        repetir = true;
    } else if (quit == 'nao') {
        repetir = false;
    }
}