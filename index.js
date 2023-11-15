function SimuladorParcelamento() {
  this.valorTotal = 0;
  this.quantidadeParcelas = 0;
  this.taxaJuros = 0;
  this.periodoEmMeses = 0;
}

SimuladorParcelamento.prototype.solicitarValorTotal = function () {
  while (true) {
    this.valorTotal = parseFloat(prompt("Digite o valor total a ser financiado (use ponto para separar os milhares e vírgula para os decimais, se necessário). Exemplo: 10000,50 para dez mil reais e cinquenta centavos:"));
    if (!isNaN(this.valorTotal) && this.valorTotal > 0) {
      break;
    } else {
      alert("Valor inválido. Por favor, digite um número válido maior que zero.");
    }
  }
};

SimuladorParcelamento.prototype.solicitarQuantidadeParcelas = function () {
  while (true) {
    this.quantidadeParcelas = parseInt(prompt("Digite a quantidade de parcelas desejada (apenas números inteiros). Exemplo: 12 para doze parcelas:"));
    if (!isNaN(this.quantidadeParcelas) && this.quantidadeParcelas > 0) {
      break;
    } else {
      alert("Quantidade de parcelas inválida. Por favor, digite um número válido maior que zero.");
    }
  }
};

SimuladorParcelamento.prototype.solicitarTaxaJuros = function () {
  while (true) {
    this.taxaJuros = parseFloat(prompt("Digite a taxa de juros mensal (em %). Use ponto para decimais. Exemplo: 1.5 para uma taxa de 1,5%:"));
    if (!isNaN(this.taxaJuros) && this.taxaJuros > 0) {
      break;
    } else {
      alert("Taxa de juros inválida. Por favor, digite um número válido maior que zero.");
    }
  }
};

SimuladorParcelamento.prototype.calcularParcelamento = function () {
  const taxaMensal = this.taxaJuros / 100;
  let valorParcela = this.valorTotal / this.quantidadeParcelas;

  alert("Simulação de parcelamento:");
  for (let i = 1; i <= this.quantidadeParcelas; i++) {
    valorParcela += valorParcela * taxaMensal;
    alert(`Parcela ${i}: R$ ${valorParcela.toFixed(2)}`);
  }
};

const simulador = new SimuladorParcelamento();
alert("Bem-vindo ao simulador de parcelamento de financiamento.");

simulador.solicitarValorTotal();
simulador.solicitarQuantidadeParcelas();
simulador.solicitarTaxaJuros();
simulador.calcularParcelamento();
