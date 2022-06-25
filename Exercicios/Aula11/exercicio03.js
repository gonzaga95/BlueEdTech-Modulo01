const prompt = require("prompt-sync")();
console.clear();

// Escreva uma função para conversão de temperatura.
// Ela deve receber 2 argumentos: um número e um caracter 'C', 'F' ou 'K',
// indicando que a temperatura está em Celsius, Fahrenheit ou Kelvin.
// A função deve exibir a temperatura nas 3 escalas e perguntar qual valor quer retornar.

function conversaoTemperatura(temp, unity) {
    let temperaturaEmCelsius;
    let temperaturaEmFahrenheit;
    let temperaturaEmKelvin;

    if (unity == "C") {
        temperaturaEmCelsius = temp;
        temperaturaEmFahrenheit = temp * (9 / 5) + 32;
        temperaturaEmKelvin = temp + 273.15;
    } else if (unity == "F") {
        temperaturaEmCelsius = (temp - 32) * (5 / 9);
        temperaturaEmFahrenheit = temp;
        temperaturaEmKelvin = (temp - 32) * (5 / 9) + 273.15;
    } else if (unity == "K") {
        temperaturaEmCelsius = temp - 273.15;
        temperaturaEmFahrenheit = (temp - 273.15) * (9 / 5) + 32;
        temperaturaEmKelvin = temp;
    }

    console.log();
    console.log(temperaturaEmCelsius.toFixed(1) + " graus Celsius");
    console.log(parseInt(temperaturaEmFahrenheit) + " graus Fahrenheit");
    console.log(temperaturaEmKelvin.toFixed(1) + " graus Kelvin");
    console.log();
    console.log('Em qual unidade deseja retonar? ["C", "F" ou "K"]');
    let escolha = prompt("").toUpperCase();
    switch (escolha) {
        case "C":
            return temperaturaEmCelsius.toFixed(1) + " ºC";
        case "F":
            return parseInt(temperaturaEmFahrenheit) + " ºF";
        case "K":
            return temperaturaEmKelvin.toFixed(2) + " K";
        default:
            console.log("Unidade inválida");
    }
}

let temperaturaInserida = +prompt("Insira a temperatura: ");
let unidadeInserida = prompt(
    'Em qual unidade a temperatura está? ["C", "F" ou "K"] '
).toUpperCase();

console.log(conversaoTemperatura(temperaturaInserida, unidadeInserida));
