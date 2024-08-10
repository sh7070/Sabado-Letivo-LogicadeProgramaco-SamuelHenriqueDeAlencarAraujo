let cotacao, real, conversao

cotacao = parseFloat(prompt("Qual a cotacao do dolar hoje em dia?"))
real = parseFloat(prompt("Digite a quantidade em reais que você tem disponivel"))

conversao = real/cotacao

document.write(`R$ ${real.toFixed(2)} convertido em dolares equivale a U$ ${conversao.toFixed(2)}`)