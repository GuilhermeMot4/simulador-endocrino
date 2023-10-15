// Função para calcular os novos valores com base na dose e nas taxas de variação
function calcularNovosValores(dose, taxas) {
    const novosValores = {};
    for (let orgao in taxas) {
      if(taxas[orgao] === '+'){
        novosValores[orgao] = 50 + parseInt(dose / 2 );
      }else if(taxas[orgao] === '-'){
        novosValores[orgao] = 50 - parseInt(dose / 2 );
      }
    }
    return novosValores;
  }
  
  // Função para atualizar a exibição dos valores nos elementos HTML
  function atualizarExibicaoValores(novosValores) {
    for (let orgao in novosValores) {
      const elemento = document.getElementById(orgao);
      const valor = novosValores[orgao]; // Formata o valor com duas casas decimais
      elemento.value = valor;
      document.getElementById(`${orgao}-value`).textContent = valor;
    }
  }
  
  // Exemplo de uso da função com as regras de taxas para cada hormônio
  document.getElementById('dose').addEventListener('input', function() {
    const dose = parseInt(this.value);
    document.getElementById("dose-value").textContent = dose;

    const regrasHormonios = {
      acth: { hipofise: '-', tireoide: '', timo: '-', adrenais: '+', vesiculasSemin: '', prostata: '', testiculos: '', pesoCorp: '-' },
      cortisol: { hipofise: '-', tireoide: '', timo: '-', adrenais: '-', vesiculasSemin: '', prostata: '', testiculos: '', pesoCorp: '-' },
      lh: { hipofise: '-', tireoide: '', timo: '', adrenais: '', vesiculasSemin: '+', prostata: '+', testiculos: '+', pesoCorp: '+' },
      testosterona: { hipofise: '-', tireoide: '', timo: '', adrenais: '', vesiculasSemin: '+', prostata: '+', testiculos: '-', pesoCorp: '+' },
      trh: { hipofise: '+', tireoide: '+', timo: '', adrenais: '', vesiculasSemin: '', prostata: '', testiculos: '', pesoCorp: '-' },
      tsh: { hipofise: '-', tireoide: '+', timo: '', adrenais: '', vesiculasSemin: '', prostata: '', testiculos: '', pesoCorp: '-' }
    };
  
    const hormonioSelecionado = document.querySelector('input[name="hormonio"]:checked').value;
    console.log(hormonioSelecionado)
  
    const novosValores = calcularNovosValores(dose, regrasHormonios[hormonioSelecionado]);
    console.log(novosValores);
  
    atualizarExibicaoValores(novosValores);
  });
  