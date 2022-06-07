console.clear();
const prompt = require('prompt-sync')();

function operacoes (a, b, c) {
    let resultado;
    if (c == '+') {
        resultado = a + b;
        // console.log(resultado);
    } else if (c == '-'){
        resultado = a - b;
        // console.log(resultado);
    } else if (c == '*'){
        resultado = a * b;
        // console.log(resultado);
    } else if (c == '/'){
        resultado = a / b;
        // console.log(resultado);
    }
    return resultado;
}

let numero1 = +prompt('Insira o primeiro número: ');
let operador = prompt('Escolha uma operação (+, -, * ou / ');
let numero2 = +prompt('Insira o segundo número: ');

let resultado = operacoes(numero1, numero2, operador);
console.log(resultado);