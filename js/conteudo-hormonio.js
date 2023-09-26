document.addEventListener('DOMContentLoaded', function () {
    // Selecione todos os radiobuttons pelo nome do grupo (neste caso, "hormonio")
    const radiobuttons = document.querySelectorAll('input[name="hormonio"]');
    const conteudoHormonio = document.getElementById('conteudo-hormonio');
    const tituloHormonio = document.getElementById('titulo-hormonio');

    // Obtenha uma referência ao elemento iframe
    const videoIframe = document.getElementById('video-iframe');

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
        let videoURL = '';

        switch (valorHormonio) {
            case 'acth':
                videoURL = 'https://www.youtube.com/embed/hFFhjulcs_o?si=1KJ7DUEI71VBWtfc';
                tituloHormonio.textContent = "ACTH";
                conteudoHormonio.textContent = "O ACTH, ou Hormônio Adrenocorticotrófico, é uma substância essencial no sistema endócrino humano. Ele é produzido pela glândula pituitária anterior e desempenha um papel fundamental na regulação do hormônio cortisol nas glândulas adrenais. O cortisol, por sua vez, é conhecido como o \"hormônio do estresse\" e influencia uma ampla variedade de funções fisiológicas. Ele desempenha um papel crucial na resposta ao estresse, regula o metabolismo, controla os níveis de glicose no sangue e tem efeitos anti-inflamatórios. Desvios na produção ou regulação do ACTH podem levar a distúrbios endócrinos significativos.";
                break;
            case 'cortisol':
                videoURL = 'https://www.youtube.com/embed/RVyvjvnCUn8?si=e51BNT6JjaMAccBm';
                tituloHormonio.textContent = "Cortisol";
                conteudoHormonio.textContent = "O cortisol é um hormônio produzido pelas glândulas adrenais em resposta ao estímulo do ACTH. Este hormônio é essencial para a homeostase do corpo, pois desempenha um papel multifacetado na regulação do metabolismo, resposta ao estresse e função imunológica. Quando os níveis de cortisol estão desequilibrados, seja devido a uma produção excessiva ou insuficiente, podem surgir condições médicas como a síndrome de Cushing (excesso de cortisol) ou a doença de Addison (deficiência de cortisol). Compreender o cortisol é fundamental para a gestão da saúde e do estresse.";
                break;
            case 'lh':
                videoURL = 'https://www.youtube.com/embed/vd2A_Q-Cf1M?si=WzZO4d1MLWfo0HNQ';
                tituloHormonio.textContent = "LH";
                conteudoHormonio.textContent = "O LH, ou Hormônio Luteinizante, é uma substância crítica na regulação do sistema reprodutivo humano, tanto em homens quanto em mulheres. Nas mulheres, o LH desempenha um papel fundamental no ciclo menstrual, desencadeando a ovulação e estimulando a produção de progesterona. Em homens, o LH atua nas células de Leydig dos testículos, estimulando a produção de testosterona. Essa regulação hormonal é essencial para a fertilidade e o funcionamento normal do sistema reprodutivo.";
                break;
            case 'testosterona':
                videoURL = 'https://www.youtube.com/embed/FDcE-zeu5Z8?si=SReaMr3N07S_GWEO';
                tituloHormonio.textContent = "Testosterona";
                conteudoHormonio.textContent = "A testosterona é um hormônio sexual masculino bem conhecido, embora também esteja presente nas mulheres, em quantidades menores. Ela desempenha um papel central no desenvolvimento de características sexuais masculinas, como voz profunda, crescimento de pelos faciais e aumento da massa muscular. Além disso, a testosterona influencia a libido, a saúde dos ossos e a saúde geral. O equilíbrio adequado desse hormônio é essencial para a saúde e o bem-estar em ambos os sexos.";
                break;
            case 'trh':
                videoURL = 'https://www.youtube.com/embed/Qu7sBfFAXz4?si=N-i8i_VPhKBbuJUF';
                tituloHormonio.textContent = "TRH";
                conteudoHormonio.textContent = "O TRH, ou Hormônio Liberador de Tireotropina, é produzido no hipotálamo e desempenha um papel crucial na regulação da glândula tireoide. Ele estimula a produção do Hormônio Estimulante da Tireoide (TSH) pela glândula pituitária. O TSH, por sua vez, regula a atividade da tireoide, influenciando diretamente o metabolismo, a temperatura corporal e o funcionamento geral do corpo. Distúrbios da tireoide podem ocorrer quando a regulação do TRH e do TSH está comprometida.";
                break;
            case 'tsh':
                videoURL = 'https://www.youtube.com/embed/B5eRzp2ZTr8?si=IZaSH7iPAy3WPaFf';
                tituloHormonio.textContent = "TSH";
                conteudoHormonio.textContent = "O TSH, ou Hormônio Estimulante da Tireoide, é produzido pela glândula pituitária e é essencial para a função da tireoide. Ele regula a produção dos hormônios tireoidianos T3 (triiodotironina) e T4 (tiroxina), que, por sua vez, desempenham um papel fundamental na regulação do metabolismo, do crescimento e da função cerebral. Níveis anormais de TSH podem levar a condições como hipotireoidismo (níveis baixos de hormônios tireoidianos) ou hipertireoidismo (níveis elevados de hormônios tireoidianos), afetando a saúde geral e o equilíbrio hormonal.";
                break;
        }

        // Atualize a src do iframe com a nova URL
        videoIframe.src = videoURL;
    }

});
