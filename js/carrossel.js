const swiper = new Swiper('.swiper', {
    loop: true, // Se deseja que o slider seja em loop
    autoplay: {
        delay: 3000, // Defina o intervalo em milissegundos entre os slides (exemplo: 3000ms ou 3 segundos)
        disableOnInteraction: true, // Se você quiser que o autoplay continue após interações do usuário, defina isso como true
      },
    navigation: {
      nextEl: ".swiper-button-next", // Botão de próximo
      prevEl: ".swiper-button-prev", // Botão de anterior
    },
    pagination: {
        el: ".swiper-pagination", // Elemento HTML onde a paginação será exibida
        clickable: true, // Permite que você clique nos pontos para navegar
      },
  });

