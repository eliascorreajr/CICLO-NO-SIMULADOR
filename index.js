const valorTotal = 100000; // Valor total de R$ 100.000

alert("Bem-vindo ao simulador de parcelamento em 5 anos.");
alert(`Você tem um valor total de R$ ${valorTotal.toFixed(2)}`);

let quantidadeParcelas;

while (true) {
  quantidadeParcelas = parseInt(prompt("Digite a quantidade de parcelas desejada:"));

  if (!isNaN(quantidadeParcelas) && quantidadeParcelas > 0) {
    break; // Sai do loop se a entrada for válida
  } else {
    alert("Quantidade de parcelas inválida. Por favor, digite um número válido maior que zero.");
  }
}

const valorParcela = valorTotal / quantidadeParcelas;

for (let i = 1; i <= quantidadeParcelas; i++) {
  alert(`Parcela ${i}: R$ ${valorParcela.toFixed(2)}`);
}

