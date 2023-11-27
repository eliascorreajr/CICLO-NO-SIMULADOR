function SimuladorParcelamento() {
  this.valorTotal = 0;
  this.quantidadeParcelas = 0;
  this.taxaJuros = 0;
  this.bancos = [
      { nome: "SINOSSERRA S/A - SCFI", taxaMensal: 0.21 },
      { nome: "DEUTSCHE SPARKASSEN LEASING DO BRASIL BM S.A.", taxaMensal: 0.73 },
      { nome: "BCO CATERPILLAR S.A.", taxaMensal: 1.05 },
      { nome: "BCO DE LAGE LANDEN BRASIL S.A.", taxaMensal: 1.09 },
      { nome: "BCO VOLVO BRASIL S.A.", taxaMensal: 1.33 },
      { nome: "BCO. J.SAFRA S.A.", taxaMensal: 1.35 },
      { nome: "BCO VOLKSWAGEN S.A", taxaMensal: 1.39 },
      { nome: "BANCO SICOOB S.A.", taxaMensal: 1.40 },
      { nome: "FINANC ALFA S.A. CFI", taxaMensal: 1.44 },
      { nome: "BRB - CFI S/A", taxaMensal: 1.49 },
      { nome: "BCO DO EST. DO PA S.A.", taxaMensal: 1.59 },
      { nome: "BCO XCMG BRASIL S.A.", taxaMensal: 1.60 },
      { nome: "BANCO CNH INDUSTRIAL CAPITAL S.A", taxaMensal: 1.66 },
      { nome: "BCO BANESTES S.A.", taxaMensal: 1.79 },
      { nome: "AYMORÉ CFI S.A.", taxaMensal: 1.81 },
      { nome: "BCO BRADESCO S.A.", taxaMensal: 1.86 },
      { nome: "BCO SANTANDER (BRASIL) S.A.", taxaMensal: 1.95 },
      { nome: "BCO DO ESTADO DO RS S.A.", taxaMensal: 2.05 },
      { nome: "TODESCREDI S/A - CFI", taxaMensal: 2.05 },
      { nome: "PINTOS S.A. CFI", taxaMensal: 2.08 },
      { nome: "BCO VOTORANTIM S.A.", taxaMensal: 2.14 },
      { nome: "BCO DO BRASIL S.A.", taxaMensal: 2.20 },
      { nome: "BCO BRASILEIRO DE CRÉDITO S.A.", taxaMensal: 2.27 },
      { nome: "BCO SENFF S.A.", taxaMensal: 2.86 },
      { nome: "BCO RENDIMENTO S.A.", taxaMensal: 3.52 },
      { nome: "BCO BRADESCO FINANC. S.A.", taxaMensal: 3.86 },
      { nome: "BCO HONDA S.A.", taxaMensal: 4.16 },
      { nome: "CENTROCRED S.A. CFI", taxaMensal: 4.17 },
      { nome: "KREDILIG S.A. - CFI", taxaMensal: 4.39 },
      { nome: "HS FINANCEIRA", taxaMensal: 4.41 }
  ];
}

SimuladorParcelamento.prototype.solicitarValorTotal = function () {
  while (true) {
      this.valorTotal = parseFloat(prompt("Digite o valor total a ser financiado (use ponto para separar os milhares e vírgula para os decimais, se necessário). Exemplo: 10000.50 para dez mil reais e cinquenta centavos:"));
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

SimuladorParcelamento.prototype.selecionarBanco = function () {
  let opcoesBancos = this.bancos.map((banco, index) => `${index + 1} - ${banco.nome}`).join("\n");
  let escolha;
  do {
      escolha = parseInt(prompt(`Selecione o banco para o financiamento:\n${opcoesBancos}`));
  } while (isNaN(escolha) || escolha < 1 || escolha > this.bancos.length);

  const { taxaMensal } = this.bancos[escolha - 1];
  this.taxaJuros = taxaMensal;
};

SimuladorParcelamento.prototype.calcularParcelamento = function () {
  const taxaMensal = this.taxaJuros / 100; // A taxa de juros deve ser convertida em decimal.
  const fator = Math.pow(1 + taxaMensal, this.quantidadeParcelas);
  const valorParcela = this.valorTotal * ((taxaMensal * fator) / (fator - 1));

  alert("Simulação de parcelamento:");
  for (let i = 1; i <= this.quantidadeParcelas; i++) {
      alert(`Parcela ${i}: R$ ${valorParcela.toFixed(2)}`);
  }
};



const simulador = new SimuladorParcelamento();
alert("Bem-vindo ao simulador de parcelamento de financiamento.");

simulador.solicitarValorTotal();
simulador.solicitarQuantidadeParcelas();
simulador.selecionarBanco();
simulador.calcularParcelamento();
