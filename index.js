// Função para formatar o valor para o formato esperado (200000.00)
function formatarValor(valor) {
  // Remove todos os caracteres não numéricos, exceto ponto e vírgula
  const valorFormatado = valor.replace(/[^0-9,.]/g, "");
  // Substitui vírgulas por pontos para usar um formato numérico adequado
  const valorComPonto = valorFormatado.replace(",", ".");
  // Converte para float
  return parseFloat(valorComPonto);
}

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
  const valorTotalInput = document.getElementById("valorTotal").value;
  this.valorTotal = formatarValor(valorTotalInput);

  if (isNaN(this.valorTotal) || this.valorTotal <= 0) {
    alert("Valor inválido. Por favor, digite um número válido maior que zero.");
    return false;
  }

  return true;
};


SimuladorParcelamento.prototype.solicitarQuantidadeParcelas = function () {
  const quantidadeParcelasInput = document.getElementById("quantidadeParcelas");
  this.quantidadeParcelas = parseInt(quantidadeParcelasInput.value);

  if (isNaN(this.quantidadeParcelas) || this.quantidadeParcelas <= 0) {
      alert("Quantidade de parcelas inválida. Por favor, digite um número válido maior que zero.");
      return false;
  }

  return true;
};

SimuladorParcelamento.prototype.selecionarBanco = function () {
  const selectBanco = document.getElementById("selectBanco");
  const escolha = selectBanco.value;
  
  const { taxaMensal } = this.bancos[escolha - 1];
  this.taxaJuros = taxaMensal;
};

SimuladorParcelamento.prototype.calcularParcelamento = function () {
  const taxaMensal = this.taxaJuros / 100; // A taxa de juros deve ser convertida em decimal.
  const n = this.quantidadeParcelas;
  let q0 = this.valorTotal;

  const resultadoParcelamento = document.getElementById("resultadoParcelamento");
  resultadoParcelamento.innerHTML = ""; // Limpa o conteúdo anterior, se houver.

  resultadoParcelamento.innerHTML += "<h3>Simulação de parcelamento:</h3>";
  const p = (q0 * taxaMensal) / (1 - Math.pow(1 + taxaMensal, -n));
  for (let i = 1; i <= n; i++) {
    const jurosParcela = q0 * taxaMensal;
    const amortizacaoParcela = p - jurosParcela;
    resultadoParcelamento.innerHTML += `<p>Parcela ${i}: R$ ${p.toFixed(2)} (Juros: R$ ${jurosParcela.toFixed(2)}, Amortização: R$ ${amortizacaoParcela.toFixed(2)})</p>`;
    q0 -= amortizacaoParcela;
  }
};



function iniciarSimulacao() {
  const simulador = new SimuladorParcelamento();
  if (simulador.solicitarValorTotal() && simulador.solicitarQuantidadeParcelas()) {
      simulador.selecionarBanco();
      simulador.calcularParcelamento();
  }
}
