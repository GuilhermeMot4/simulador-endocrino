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
  function atualizarExibicaoValores(novosValores, medidas, hormonioSelecionado) {
    for (let orgao in novosValores) {
      const elemento = document.getElementById(orgao);
      const valor = novosValores[orgao];
      elemento.value = valor;

      // Obtenha os valores correspondentes ao órgão com base no hormônio selecionado
      const valorMinimo = medidas[orgao].minimo[hormonioSelecionado];
      const valorMaximo = medidas[orgao].maximo[hormonioSelecionado];
      const valorBasal = medidas[orgao].basal;

      // Calcule o fator para determinar quanto a dose aplicada afeta o órgão
      const fator = (valor - 50) / 50; // Varia de -1 (máximo de diminuição) a 1 (máximo de aumento)

      // Calcule a nova medida com base nos valores mínimo, máximo e basal, e aplique o fator
      const novaMedida = valorBasal + fator * (valorMaximo - valorMinimo);
      console.log(valorBasal + " " + fator + " " + valorMaximo + " " + valorMinimo)
      console.log(orgao +" " +novaMedida);
      const unidade = medidas[orgao].unidade;

      let exibicao = novaMedida.toFixed(2) + unidade;

      if (valor === 50) {
        exibicao += " (Controle)";
      }else if(valor === 100 || valor === 0){
        exibicao += " (Experimento)";
      }

      document.getElementById(`${orgao}-value`).textContent = exibicao;
    }
  }
  
  // Exemplo de uso da função com as regras de taxas para cada hormônio
  document.getElementById('dose').addEventListener('input', function() {
    const dose = parseInt(this.value);
    document.getElementById("dose-value").textContent = dose + "%";

    const regrasHormonios = {
      acth: {
        hipofise: '-',
        tireoide: '',
        timo: '-',
        adrenais: '+',
        vesiculasSemin: '',
        prostata: '',
        testiculos: '',
        pesoCorp: '-'
      },
      cortisol: {
        hipofise: '-',
        tireoide: '',
        timo: '-',
        adrenais: '-',
        vesiculasSemin: '',
        prostata: '',
        testiculos: '',
        pesoCorp: '-'
      },
      lh: {
        hipofise: '-',
        tireoide: '',
        timo: '',
        adrenais: '',
        vesiculasSemin: '+',
        prostata: '+',
        testiculos: '+',
        pesoCorp: '+'
      },
      testosterona: {
        hipofise: '-',
        tireoide: '',
        timo: '',
        adrenais: '',
        vesiculasSemin: '+',
        prostata: '+',
        testiculos: '-',
        pesoCorp: '+'
      },
      trh: {
        hipofise: '+',
        tireoide: '+',
        timo: '',
        adrenais: '',
        vesiculasSemin: '',
        prostata: '',
        testiculos: '',
        pesoCorp: '-'
      },
      tsh: {
        hipofise: '-',
        tireoide: '+',
        timo: '',
        adrenais: '',
        vesiculasSemin: '',
        prostata: '',
        testiculos: '',
        pesoCorp: '-'
      }
    };

    const medidas = {
      hipofise: { 
        basal: 12.9, 
        minimo: { acth: 10.9, cortisol: 9.8, lh: 9.8, testosterona: 10.2, trh: 12.9, tsh: 8 },
        maximo: { acth: 12.9, cortisol: 12.9, lh: 12.9, testosterona: 12.9, trh: 25, tsh: 12.9 },
        unidade: " mg"
      },
      tireoide: { 
        basal: 250, 
        minimo: { acth: 245, cortisol: 245, lh: 250, testosterona: 250, trh: 250, tsh: 250 },
        maximo: { acth: 250, cortisol: 250, lh: 250, testosterona: 252, trh: 490, tsh: 500 },
        unidade: " mg"
      },
      timo: { 
        basal: 475, 
        minimo: { acth: 250, cortisol: 150, lh: 475, testosterona: 470, trh: 462, tsh: 455 },
        maximo: { acth: 475, cortisol: 475, lh: 480, testosterona: 475, trh: 475, tsh: 475 },
        unidade: " mg"
      },
      adrenais: { 
        basal: 40, 
        minimo: { acth: 40, cortisol: 30, lh: 40, testosterona: 38, trh: 39, tsh: 37 },
        maximo: { acth: 100, cortisol: 40, lh: 40, testosterona: 40, trh: 40, tsh: 40 },
        unidade: " mg"
      },
      vesiculasSemin: { 
        basal: 500, 
        minimo: { acth: 490, cortisol: 475, lh: 500, testosterona: 500, trh: 160, tsh: 480 },
        maximo: { acth: 500, cortisol: 500, lh: 900, testosterona: 1400, trh: 300, tsh: 500 },
        unidade: " mg"
      },
      prostata: { 
        basal: 425, 
        minimo: { acth: 425, cortisol: 410, lh: 425, testosterona: 425, trh: 425, tsh: 405 },
        maximo: { acth: 430, cortisol: 425, lh: 900, testosterona: 900, trh: 480, tsh: 425 },
        unidade: " mg"
      },
      testiculos: { 
        basal: 3200, 
        minimo: { acth: 3000, cortisol: 3200, lh: 3200, testosterona: 2400, trh: 3150, tsh: 2790 },
        maximo: { acth: 3200, cortisol: 3200, lh: 5700, testosterona: 3200, trh: 3200, tsh: 3200 },
        unidade: " mg"
      },
      pesoCorp: { 
        basal: 300, 
        minimo: { acth: 200, cortisol: 150, lh: 300, testosterona: 300, trh: 160, tsh: 152 },
        maximo: { acth: 300, cortisol: 300, lh: 385, testosterona: 490, trh: 300, tsh: 300 },
        unidade: " g"
      },
    };
  
    const hormonioSelecionado = document.querySelector('input[name="hormonio"]:checked').value;
  
    const novosValores = calcularNovosValores(dose, regrasHormonios[hormonioSelecionado]);
  
    atualizarExibicaoValores(novosValores, medidas, hormonioSelecionado);
  });
  