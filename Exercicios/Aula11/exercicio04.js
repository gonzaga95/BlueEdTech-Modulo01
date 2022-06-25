console.clear();
const prompt = require("prompt-sync")();

// Faça um programa que solicite o total gasto pelo cliente de uma loja,
// imprima as opções de pagamento com os valores totais, solicite a opção desejada
// e imprima o valor total das prestações (se houverem).
// Ao final ele deve retornar o valor total da opção escolhida,
// guardar em uma lista e recomeçar a operação perguntando o valor total gasto pelo próximo cliente.
// Quando o valor informado for 0, significa que não há mais clientes,
// então ele chamar uma nova função que vai mostrar quantas compras foram feitas em cada opção,
// e a soma do valor total de todas elas.
// Opção: a vista com 10% de desconto;
// Opção: em duas vezes (preço da etiqueta);
// Opção: de 3 até 10 vezes com 3% de juros ao mês (somente para compras acima de R$ 100,00).

let valor;
let opcaoDesejada;
let opcaoAVista = 0;
let opcaoParcela2Vezes = 0;
let opcaoParcelaMaisVezes = 0;
const listaValoresPagos = [];

function retornaValorTotal(valor) {
    let valor1x = (valor - valor * 0.1).toFixed(2);
    console.log("Você pode pagar em 1x (a vista) com 10% de desconto");
    console.log(`Total: R$ ${valor1x}`);
    prompt("");

    let valor2x = valor.toFixed(2);
    console.log("Pagar em 2x no valor da etiqueta");
    console.log(`Total: R$ ${valor2x}`);
    prompt("");

    if (valor > 100) {
        console.log("Ou pagar em até 10x com juros 3% a.m.");
        for (i = 3; i <= 10; i++) {
            valorMaisX = (valor * (1 + 0.03) ** i).toFixed(2);
            console.log(`Total: R$ ${valorMaisX} em ${i}x `);
        }
        prompt("");
    }
}

function opcoesPagamento(valor, vezes = 1) {
    let valorPago;
    switch (vezes) {
        case 1:
            opcaoAVista++;
            let desconto = valor * 0.1;
            valorPago = valor - desconto;
            listaValoresPagos.push(valorPago);
            console.log("Compra registrada");
            return true;
        case 2:
            opcaoParcela2Vezes++;
            listaValoresPagos.push(valor);
            console.log("Compra registrada");
            return true;
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            if (valor < 100) {
                console.log(
                    "Acima de 3 parcelas disponível apenas para compras acima de R$ 100,00;"
                );
                console.log("Reiniciar pagamento");
                prompt();
                return false;
            } else {
                opcaoParcelaMaisVezes++;
                valorPago = valor * (1 + 0.03) ** vezes;
                listaValoresPagos.push(valorPago);
                console.log("Compra registrada");
                return true;
            }
        default:
            console.log("Número de parcelas inválido. Reiniciar pagamento.");
            prompt();
            return false;
    }
}

function exibirTotal() {
    if (opcaoAVista > 0) {
        if (opcaoAVista > 1) {
            console.log(`Foram feitas ${opcaoAVista} compras à vista.`);
        } else {
            console.log("Foi feita uma compra à vista.");
        }
    }
    if (opcaoParcela2Vezes > 0) {
        if (opcaoParcela2Vezes > 1) {
            console.log(`Foram feitas ${opcaoParcela2Vezes} compras em 2x.`);
        } else {
            console.log("Foi feita uma compra em 2x.");
        }
    }
    if (opcaoParcelaMaisVezes > 0) {
        if (opcaoParcelaMaisVezes > 1) {
            console.log(
                `Foram feitas ${opcaoParcelaMaisVezes} compras entre 3x e 10x.`
            );
        } else {
            console.log("Foi feita uma compra entre 3x e 10x.");
        }
    }
    console.log("O valor total das compras registradas foi de:");
    const somaTotal = (a, b) => a + b;
    console.log("R$ " + listaValoresPagos.reduce(somaTotal).toFixed(2));
}

while (true) {
    console.log("NOVA COMPRA");
    valor = +prompt("Qual foi o valor total gasto? ");
    if (valor < 1) {
        break;
    }

    retornaValorTotal(valor);

    opcaoDesejada = +prompt("Insira o número de parcelas desejado: ");

    if (!opcoesPagamento(valor, opcaoDesejada)) {
        continue;
    }
    console.log();
}

console.clear();
exibirTotal();
console.log();
