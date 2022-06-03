console.clear();
const prompt = require('prompt-sync')();

// Faça um programa que carregue uma lista com os modelos de cinco carros. 
// Carregue uma outra lista com o consumo desses carros, isto é, 
// quantos quilômetros cada um desses carros faz com um litro de combustível. Calcule e mostre:
// O modelo do carro mais econômico;
// Quantos litros de combustível cada um dos carros cadastrados consome para 
// percorrer uma distância de 1000 quilômetros e quanto isto custará, 
// considerando um que a gasolina custe R$ 6,50 o litro.

let carros = ['Fiat Argo', 'Honda City', 'Jeep Renegade', 'Chevrolet Equinox', 'Volvo S60'];
let consumoCarros = [16.5, 14.6, 11.3, 10.7, 19.1];
let precoGasolina = 6.5;
let distanciaKM = 1000;
let gastoReais = [];
let gastoLitros = [];

for (let i = 0; i < carros.length; i++){
    gastoLitros[i] = (distanciaKM / consumoCarros[i]).toFixed(2);
    gastoReais[i] = (gastoLitros[i] * precoGasolina).toFixed(2);
    console.log(`O carro ${carros[i]} consome ${gastoLitros[i]} litros de gasolina para percorrer ${distanciaKM} KM, ao custo de R$ ${gastoReais[i]}.`);
}
let maisEconomico = consumoCarros.indexOf(Math.max(...consumoCarros));

console.log();
console.log(`O veículo mais econômico é o ${carros[maisEconomico]}.`);