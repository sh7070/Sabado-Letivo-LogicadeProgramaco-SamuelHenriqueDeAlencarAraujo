let venda, percentual, produto, decimalpercentual

produto = parseFloat(prompt("Qual o valor do produto que você deseja vender?"))
percentual = parseFloat(prompt("Digite o percentual que deseja adicionar ao produto na venda "))

decimalpercentual = percentual / 100
venda = produto + (produto * decimalpercentual)

document.write(`esse produto deve ser vendido por R$ ${venda.toFixed(2)}`)


