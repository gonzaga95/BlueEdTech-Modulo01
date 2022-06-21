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
    diaFeliz: 0,
    refeicoes: 0, //Uma por turno - 0 a 3.
    hidratacao: 0, //Um copo por turno - 0 a 3.
    condicoesIdeais: 0, 
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
    {roteiro: 'Bom dia, bodybuilder. Você dormiu bem e está descansado para ir trabalhar e aproveitar bem a sua manhã.'},
    {roteiro: 'Bom dia, Julinho. A noite anterior não foi das mais fáceis, não é? Você não está tão descansado mas deve ir trabalhar'},
    {roteiro: 'Apenas dia, Julinho. Após uma péssima noite de sono, você perdeu a manhã de trabalho... pelo menos tem a tarde toda para recuperar.'}
]

const roteirosTarde = [
    {roteiro: 'Que tarde bacana! Muitos clientes a serem transportados em sua van e a grana tá entrando. Você nem precisou se esforçar, não é maneiro?'},
    {roteiro: 'Hoje tá f****. Trânsito horrível, van não anda. Uma tarde perdida!! Não vemos a hora da noite chegar para aliviar o estresse com muitas repetições no treino.'}
]

const roteirosNoite = [
    {roteiro: 'A noite chegou e, com ela, a hora de ficar monstro! Muita dedicação e compromisso fazem seu grande objetivo ficar cada vez mais próximo.'},
    {roteiro: 'É... mesmo com os ânimos mais pra baixo, você mantém firme o compromisso com o corpo e o projeto.'},
    {roteiro: 'Quase arrastado mas você foi ao treino. Entretanto, precisa estar de olho em tudo à sua volta para cumprir o objetivo de ficar grande!!'}
]

const roteirosFds = [
    {roteiro: 'FDS chegou! Hoje você dormiu até tarde e tem a opção de como vai querer curtir o dia. Aproveite!!'},
    {roteiro: 'FDS chegou e é dia de maratonar aquela lista de filmes que encotrou no livro "50 filmes para assistir enquanto dirige"... Mas vê se presta atenção no trânsito, hein?'},
    {roteiro: 'Apesar do FDS, você tá com algumas contas atrasadas e vai ter que trabalhar hoje. Dias de luta, amigo...'}
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
        mainCharacter.diaFeliz = 0;
        mainCharacter.hidratacao = 0;
        mainCharacter.refeicoes = 0;
        let indice;
        console.log(`Hoje é ${dia}`);

        if (dia == 'sábado' || dia == 'domingo') {
            indice = roteiros();
            console.log(`${roteirosFds[indice].roteiro}`);
        } else {
            for (let hora of turno){
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
            }
        }
        if (mainCharacter.refeicoes === 3 && mainCharacter.hidratacao === 3) {
            console.log('Hoje você se alimentou bem e bebeu bastante água.');
            console.log('Foco no projeto bodybuilder!!');
            mainCharacter.diaFeliz += 2;
        } else if (mainCharacter.refeicoes === 2 || mainCharacter.hidratacao === 2) {
            if (mainCharacter.refeicoes === 2) {
                console.log('Faltou comer direitinho');
                console.log('Cadê o foco no projeto?');
            } else if (mainCharacter.hidratacao === 2) {
                console.log('Faltou beber água, hein?');
                console.log('Cadê o foco no projeto?');
            }
            mainCharacter.diaFeliz++;
        } else if (mainCharacter.refeicoes < 2 || mainCharacter.hidratacao < 2) {
            console.log('É, hoje faltou equilíbrio na alimentação e hidratação.');
            console.log('Desse jeito nosso projeto fica mais distante.');
        }
    }
    prompt();
    console.clear();
    if (mainCharacter.diaFeliz > 6) {
        mainCharacter.ganharMassa(0.2);
        console.log('Semana boa, hein!');
        console.log('Você vai crescer pra caralho, p****!');
    } else if (mainCharacter.diaFeliz > 4) {
        mainCharacter.ganharMassa();
        console.log('Devagar mas sempre! Bora ficar grande!');
    } else {
        mainCharacter.perderMassa();
        console.log('Essa semana foi difícil, não é?');
        console.log('Você emagreceu um pouco, mas nada como uma próxima semana para tentar novamente...')
    }

    // console.log(repeticoesSemana);
    prompt();
    console.clear();
    console.log('Mais uma longa semana chegou ao fim.');
    console.log('Deseja conferir os status do nosso bodybuilder?');
    let conferir = validaSim();
    if (conferir === 'sim') {
        checaPeso();
    }

    console.log('Deseja experienciar outra semana rotineira do nosso bodybuilder? ');
    let quit = validaSim();
    if (quit === 'sim') {
        repetir = true;
    } else if (quit === 'nao') {
        repetir = false;
    }
}