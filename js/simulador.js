// Função para calcular os novos valores com base na dose e nas taxas de variação
function calcularNovosValores(dose, taxas) {
    const novosValores = {};
    for (let orgao in taxas) {
      novosValores[orgao] = 50 + (taxas[orgao] * dose);
    }
    return novosValores;
  }
  
  // Função para atualizar a exibição dos valores nos elementos HTML
  function atualizarExibicaoValores(novosValores) {
    for (let orgao in novosValores) {
      const elemento = document.getElementById(orgao);
      const valor = novosValores[orgao].toFixed(2); // Formata o valor com duas casas decimais
      elemento.value = valor;
      document.getElementById(`${orgao}-value`).textContent = valor;
    }
  }
  
  // Exemplo de uso da função com as regras de taxas para cada hormônio
  document.getElementById('dose').addEventListener('input', function() {
    const dose = parseFloat(this.value);
    document.getElementById("dose-value").textContent = dose;

    const regrasHormonios = {
      acth: { hipofise: -0.3, tireoide: 0.0, timo: 0.3, adrenais: 0.3, vesiculasSemin: 0.0, prostata: 0.0, testiculos: 0.0, pesoCorp: -0.3 },
      cortisol: { hipofise: 0.01, tireoide: 0.0, timo: -0.01, adrenais: 0.02, vesiculasSemin: 0.0, prostata: 0.0, testiculos: 0.0, pesoCorp: -0.02 }
    };
  
    const hormonioSelecionado = document.querySelector('input[name="hormonio"]:checked').value;
  
    const novosValores = calcularNovosValores(dose, regrasHormonios[hormonioSelecionado]);
  
    atualizarExibicaoValores(novosValores);
  });
  