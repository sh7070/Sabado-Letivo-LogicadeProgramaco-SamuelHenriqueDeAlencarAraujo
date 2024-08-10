let valor, rendimento, final
const juros = 0.0007

valor = parseFloat(prompt("Qual valor que deverá ser depositado?"))

rendimento = valor * juros
final = valor + rendimento

document.write(`após um mês, você terá o total de R$ ${final.toFixed(2)}`)