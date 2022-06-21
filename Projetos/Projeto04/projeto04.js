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
    profissao: 'Piloto',
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
        console.log(`Você está com ${this.peso} KG`);
        if (this.peso < 62){
            console.log('Frango!!');
            console.log('Tem que malhar mais, p**ra!');
        } else if (this.peso >= 70) {
            console.log('BIIIIRRLL');
            console.log('Fica monstro, p**ra!');
        }
    },
    diaFeliz: 0,
    refeicoes: 0,
    hidratacao: 0,
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
    {roteiro: 'Tarde de muito suor, hein? Nem chegamos na academia mas o dia parece que já teve 20 horas. Dias de luta e dias de luta, camarada...'},
    {roteiro: 'Hoje tá f****. Trânsito horrível, van não anda. Uma tarde perdida!! Não vemos a hora da noite chegar para aliviar o estresse com muitas repetições no treino.'}
]

const roteirosNoite = [
    {roteiro: 'A noite chegou e, com ela, a hora de ficar monstro! Muita dedicação e compromisso fazem seu grande objetivo ficar cada vez mais próximo.'},
    {roteiro: 'É... mesmo com os ânimos mais pra baixo, você mantém firme o compromisso com o corpo e o projeto.'},
    {roteiro: 'Quase arrastado mas você foi ao treino. Entretanto, precisa estar de olho em tudo à sua volta para cumprir o objetivo de ficar grande!!'}
]

const roteirosFds = [
    {roteiro: 'FDS chegou! Hoje você dormiu até tarde e tem a opção de como vai querer curtir o dia. Aproveite!!'},
    {roteiro: 'FDS chegou e é dia de maratonar aquela lista de filmes que encontrou no livro "50 filmes para assistir enquanto dirige"... Mas vê se presta atenção no trânsito, hein?'},
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

console.log(`Essa é a vida do ${mainCharacter.nome}`);
console.log(`Durante o dia você tenta ser o melhor ${mainCharacter.profissao} possível.`);
console.log(`Já a noite, ${mainCharacter.nome} tem muita dedicação na academia.`);
console.log('O objetivo é se tornar um bodybuilder fenomenal! Monstro! Gigante!');
prompt();
console.clear();

console.log('Você precisa ter muito foco na dieta e na hidratação');
console.log('O objetivo é, apesar dessa loucura que pode ser o seu dia a dia, pensar sempre no seu projeto');
console.log(`Entre os períodos do dia, você vai precisar responder 'sim' ou 'não' durante as pausas`);
console.log(`Caso opte por responder 'não', saiba que seu objetivo fica mais distante`);
console.log('Ao final da semana você poderá conferir se evoluiu ou regrediu.');
console.log('Também poderá decidir se quer ou não continuar na rotina da semana.');
console.log('Vamos?');
prompt('ENTER para começar');
console.clear();

while (repetir) {
    repeticoesSemana++;
    mainCharacter.diaFeliz = 0;

    for (let dia of semana){
        mainCharacter.hidratacao = 0;
        mainCharacter.refeicoes = 0;
        let indice;
        console.log(`Hoje é ${dia}`);

        if (dia == 'sábado' || dia == 'domingo') {
            indice = roteiros();
            console.log(`${roteirosFds[indice].roteiro}`);
            prompt();
            break;
        } else {
            for (let hora of turno){
                console.log();
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
                console.log('Hora de recompor as energias!!');
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
        console.clear();
        if (mainCharacter.refeicoes === 3 && mainCharacter.hidratacao === 3) {
            console.log('Ontem você se alimentou bem e bebeu bastante água.');
            console.log('Foco no projeto bodybuilder!!');
            mainCharacter.diaFeliz += 2;
        } else if (mainCharacter.refeicoes === 2 || mainCharacter.hidratacao === 2) {
            if (mainCharacter.refeicoes === 2) {
                console.log('Faltou comer direitinho no dia anterior');
                console.log('Cadê o foco no projeto?');
            } else if (mainCharacter.hidratacao === 2) {
                console.log('Faltou beber água ontem, hein?');
                console.log('Cadê o foco no projeto?');
            }
            mainCharacter.diaFeliz++;
        } else if (mainCharacter.refeicoes < 2 || mainCharacter.hidratacao < 2) {
            console.log('É, ontem faltou equilíbrio na alimentação e hidratação.');
            console.log('Desse jeito nosso projeto fica mais distante.');
        }
        console.log();
    }

    prompt();
    console.clear();
    if (mainCharacter.diaFeliz > 4) {
        if (mainCharacter.diaFeliz > 6) {
            mainCharacter.ganharMassa(0.25);
            console.log('Semana boa, hein!');
        }
        else {
            mainCharacter.ganharMassa();
            console.log('Devagar mas sempre! Bora ficar grande!');
        }
        console.log('Você vai crescer pra caralho, p****!');
    } else {
        mainCharacter.perderMassa();
        console.log('Essa semana foi difícil, não é?');
        console.log('Você emagreceu um pouco, mas nada como uma próxima semana para tentar novamente...');
    }

    prompt();
    console.clear();
    console.log('Mais uma longa semana chegou ao fim.');
    console.log('Deseja conferir os status do nosso bodybuilder?');
    let conferir = validaSim();
    if (conferir === 'sim') {
        mainCharacter.checaPeso();
    }

    console.log('Deseja experienciar outra semana rotineira do nosso bodybuilder? ');
    let quit = validaSim();
    if (quit === 'sim') {
        repetir = true;
    } else if (quit === 'nao') {
        repetir = false;
    }
}