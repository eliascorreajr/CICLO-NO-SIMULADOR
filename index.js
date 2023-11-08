// Definindo o objeto SimuladorParcelamento
function SimuladorParcelamento(valorTotal) {
  this.valorTotal = valorTotal;
  this.quantidadeParcelas = 0;
}

// Método para solicitar a quantidade de parcelas ao usuário
SimuladorParcelamento.prototype.solicitarQuantidadeParcelas = function () {
  while (true) {
    this.quantidadeParcelas = parseInt(prompt("Digite a quantidade de parcelas desejada:"));

    if (!isNaN(this.quantidadeParcelas) && this.quantidadeParcelas > 0) {
      break;
    } else {
      alert("Quantidade de parcelas inválida. Por favor, digite um número válido maior que zero.");
    }
  }
};

// Método para calcular e exibir as parcelas
SimuladorParcelamento.prototype.calcularParcelamento = function () {
  const valorParcela = this.valorTotal / this.quantidadeParcelas;

  alert("Simulação de parcelamento:");
  for (let i = 1; i <= this.quantidadeParcelas; i++) {
    alert(`Parcela ${i}: R$ ${valorParcela.toFixed(2)}`);
  }
};

// Criando uma instância do SimuladorParcelamento com um valor total de R$ 100.000
const simulador = new SimuladorParcelamento(100000);

alert("Bem-vindo ao simulador de parcelamento em 5 anos.");
alert(`Você tem um valor total de R$ ${simulador.valorTotal.toFixed(2)}`);

// Solicitando a quantidade de parcelas ao usuário usando o método do objeto
simulador.solicitarQuantidadeParcelas();

// Calculando e exibindo as parcelas usando o método do objeto
simulador.calcularParcelamento();

