console.clear()
const prompt = require("prompt-sync")();

// 7) E os 10% do garçom? - Defina uma variável para o valor de uma refeição que custou R$ 42,54. Na sequência, defina uma variável para o valor da taxa de serviço que é de 10%. Por fim defina uma variável que será responsável pelo cálculo do valor total da conta e exiba-o no console com a seguinte formatação: R$99.99 (valor com duas casas decimais).

let valorRefeicao = 42.54
let taxaServico = 0.1

let valorTotal = valorRefeicao * taxaServico + valorRefeicao
console.log(`Sua refeição de R$ ${valorRefeicao} foi acrescidade ${taxaServico*100}% referente ao serviço.
O valor total é de R$ ${valorTotal.toFixed(2)}.`)