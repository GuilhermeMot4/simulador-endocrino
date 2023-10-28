document.addEventListener('DOMContentLoaded', function () {

    const DOSE_INICIAL = 0;
    const ORGAO_INICIAL = 50;

    const HIPOFISE_INICIAL = 12.9;
    const TIREOIDE_INICIAL = 250;
    const TIMO_INICIAL = 475;
    const ADRENAIS_INICIAL = 40;
    const VESICULASSEMIN_INICIAL = 500;
    const PROSTATA_INICIAL = 425;
    const TESTICULOS_INICIAL = 3200;
    const PESOCORP_INICIAL = 300;


    // Selecione todos os radiobuttons pelo nome do grupo (neste caso, "hormonio")
    const radiobuttons = document.querySelectorAll('input[name="hormonio"]');

    const conteudoConclusao1 = document.getElementById('conteudo-conclusao1');
    const conteudoConclusao2 = document.getElementById('conteudo-conclusao2');

    const hormonioLabel = document.getElementById('hormonio-label');
    const doseInput = document.getElementById('dose');
    const doseValue = document.getElementById('dose-value');
    const hipofiseInput = document.getElementById('hipofise');
    const hipofiseValue = document.getElementById('hipofise-value');
    const tireoideInput = document.getElementById('tireoide');
    const tireoideValue = document.getElementById('tireoide-value');
    const timoInput = document.getElementById('timo');
    const timoValue = document.getElementById('timo-value');
    const adrenaisInput = document.getElementById('adrenais');
    const adrenaisValue = document.getElementById('adrenais-value');
    const vesiculasSeminInput = document.getElementById('vesiculasSemin');
    const vesiculasSeminValue = document.getElementById('vesiculasSemin-value');
    const prostataInput = document.getElementById('prostata');
    const prostataValue = document.getElementById('prostata-value');
    const testiculosInput = document.getElementById('testiculos');
    const testiculosValue = document.getElementById('testiculos-value');
    const pesoCorpInput = document.getElementById('pesoCorp');
    const pesoCorpValue = document.getElementById('pesoCorp-value');

    const videoHormonio = document.getElementById('video-hormonio');
    const videoConclusao = document.getElementById('video-conclusao');

    // Adicione um ouvinte de evento a cada radiobutton
    radiobuttons.forEach(function (radiobutton) {
        radiobutton.addEventListener('change', function () {
            if (radiobutton.checked) {
                atualizarConteudo(radiobutton.value);
            }
        });
    });

    // Atualize o conteúdo com base no valor do hormônio padrão (ACTH) ao carregar a página
    const hormonioPadrao = document.querySelector('input[name="hormonio"]:checked');
    if (hormonioPadrao) {
        atualizarConteudo(hormonioPadrao.value);
    }

    // Função para atualizar o conteúdo com base no valor do hormônio selecionado
    function atualizarConteudo(valorHormonio) {

        // Defina a URL do vídeo do YouTube com base na seleção do hormônio
        let videoHormonioURL = '';
        let videoConclusaoURL = '';

        switch (valorHormonio) {
            case 'acth':
                videoHormonioURL = 'videos/video-acth.mp4';
                videoConclusaoURL = 'videos/Síndrome de Cuching.mp4';
                conteudoConclusao1.textContent = "O ACTH, Hormônio Adrenocorticotrófico, é uma substância essencial no complexo sistema endócrino do corpo. Produzido na glândula pituitária anterior, ele desempenha um papel crucial na regulação da produção de cortisol pelas glândulas suprarrenais. O cortisol é conhecido como o hormônio do estresse e desempenha diversas funções no organismo, incluindo a regulação do sistema imunológico e a resposta ao estresse.";
                conteudoConclusao2.textContent = "O ACTH apresenta um ritmo de secreção circadiano, com valores mais elevados no início da manhã e mais baixos à tarde, sendo responsável pelo ritmo de secreção característico do cortisol. Quando os níveis de ACTH estão desregulados, como na doença de Cushing, ocorre um excesso de produção de cortisol. Isso resulta em sintomas como ganho de peso, hipertensão arterial, fragilidade óssea e pele fina. A doença de Cushing é apenas um exemplo dos muitos distúrbios hormonais que podem afetar a produção e os níveis de ACTH no organismo.";
                break;
            case 'cortisol':
                videoHormonioURL = 'videos/video-cortisol.mp4';
                videoConclusaoURL = 'videos/Síndrome de Cuching.mp4';
                conteudoConclusao1.textContent = "O cortisol, frequentemente chamado de hormônio do estresse, é uma substância poderosa e necessária para o funcionamento do corpo. Quando enfrentamos situações de estresse, o corpo libera cortisol, preparando-o para a ação. No entanto, altos níveis crônicos de cortisol devido ao estresse prolongado podem resultar em problemas de saúde. ";
                conteudoConclusao2.textContent = "Esses problemas incluem aumento do risco de doenças cardiovasculares, distúrbios do sono, ganho de peso, pressão arterial elevada, diminuição da imunidade e distúrbios metabólicos.";
                break;
            case 'lh':
                videoHormonioURL = 'videos/video-lh.mp4';
                videoConclusaoURL = 'videos/LH x saúde reprodutiva.mp4';
                conteudoConclusao1.textContent = "O LH, ou Hormônio Luteinizante, desempenha um papel crucial na regulação dos ciclos menstruais em mulheres e na produção de testosterona em homens. Nas mulheres, o aumento dos níveis de LH desencadeia a ovulação, permitindo a liberação de um óvulo maduro dos ovários. Nos homens, o LH estimula as células de Leydig nos testículos a produzirem testosterona.";
                conteudoConclusao2.textContent = "Desequilíbrios nos níveis de LH podem resultar em problemas de fertilidade em ambos os sexos. Em mulheres, a ausência de um pico de LH pode indicar anovulação, enquanto em homens, a deficiência de LH pode afetar a produção de testosterona.";
                break;
            case 'testosterona':
                videoHormonioURL = 'videos/video-testosterona.mp4';
                videoConclusaoURL = 'videos/anabolizantes.mp4';
                conteudoConclusao1.textContent = "A testosterona, muitas vezes considerada o \"hormônio masculino\", possui um papel significativo no desenvolvimento sexual masculino e na manutenção da saúde geral. Além das características sexuais secundárias, ela influencia a densidade óssea, a massa muscular e o desejo sexual nos homens. Nas mulheres, a testosterona também é presente, desempenhando funções essenciais na regulação do humor, energia e libido.";
                conteudoConclusao2.textContent = "O uso indevido de esteroides anabolizantes, que contêm testosterona sintética, é um tópico importante a ser discutido. O uso indiscriminado dessas substâncias pode levar a uma série de problemas de saúde, incluindo alterações de humor, dano ao fígado e problemas cardíacos. A testosterona é um lembrete de que, embora os hormônios desempenhem um papel crucial na saúde, o equilíbrio é essencial.";
                break;
            case 'trh':
                videoHormonioURL = 'videos/video-trh.mp4';
                videoConclusaoURL = 'videos/hipotireoidismo_hipertireoidismo.mp4';
                conteudoConclusao1.textContent = "O TRH, Hormônio Liberador de Tireotropina, é um componente vital da complexa regulação hormonal. Ele é responsável por estimular a glândula pituitária a liberar o TSH (Hormônio Estimulante da Tireoide). O TSH, por sua vez, regula a produção dos hormônios tireoidianos pela glândula tireoide.";
                conteudoConclusao2.textContent = "Os hormônios tireoidianos têm um impacto significativo no controle do metabolismo, temperatura corporal e crescimento. Desregulações no TRH ou no TSH podem levar a distúrbios da tireoide, como hipotireoidismo e hipertireoidismo.";
                break;
            case 'tsh':
                videoHormonioURL = 'videos/video-tsh.mp4';
                videoConclusaoURL = 'videos/hipotireoidismo_hipertireoidismo.mp4';
                conteudoConclusao1.textContent = "O TSH, ou Hormônio Estimulante da Tireoide, é um regulador essencial do metabolismo e do crescimento. Ele age estimulando a tireoide a produzir hormônios tireoidianos, que controlam a taxa metabólica do corpo.";
                conteudoConclusao2.textContent = "Níveis anormais de TSH podem ser indicativos de distúrbios da tireoide, como hipertireoidismo, caracterizado por níveis excessivamente altos de hormônios tireoidianos, ou hipotireoidismo, que ocorre quando a tireoide não produz hormônios em quantidade suficiente.";
                break;
        }

        videoHormonio.src = videoHormonioURL;
        videoConclusao.src = videoConclusaoURL;
        
        resetaHormonio(valorHormonio);
       
        
    }

    function resetaHormonio(valorHormonio){
        hormonioLabel.textContent = valorHormonio.toUpperCase();
        doseInput.value = DOSE_INICIAL;
        doseValue.textContent = DOSE_INICIAL + "%";

        hipofiseInput.value = ORGAO_INICIAL;
        hipofiseValue.textContent = HIPOFISE_INICIAL.toFixed(2) + " mg" + " (Controle)";
        tireoideInput.value = ORGAO_INICIAL;
        tireoideValue.textContent = TIREOIDE_INICIAL.toFixed(2) + " mg" + " (Controle)";
        timoInput.value = ORGAO_INICIAL;
        timoValue.textContent = TIMO_INICIAL.toFixed(2) + " mg" + " (Controle)";
        adrenaisInput.value = ORGAO_INICIAL;
        adrenaisValue.textContent = ADRENAIS_INICIAL.toFixed(2) + " mg" + " (Controle)";
        vesiculasSeminInput.value = ORGAO_INICIAL;
        vesiculasSeminValue.textContent = VESICULASSEMIN_INICIAL.toFixed(2) + " mg" + " (Controle)";
        prostataInput.value = ORGAO_INICIAL;
        prostataValue.textContent = PROSTATA_INICIAL.toFixed(2) + " mg" + " (Controle)";
        testiculosInput.value = ORGAO_INICIAL;
        testiculosValue.textContent = TESTICULOS_INICIAL.toFixed(2) + " mg" + " (Controle)";
        pesoCorpInput.value = ORGAO_INICIAL;
        pesoCorpValue.textContent = PESOCORP_INICIAL.toFixed(2) + " g" + " (Controle)";
    }

});
