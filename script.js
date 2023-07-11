$(document).ready(function() {
    // Configurações do carrossel
    var carousel = $(".carousel-inner");
    var itemWidth = $(".carousel-item").outerWidth();
    var currentPosition = 0;
    var totalItems = $(".carousel-item").length;

    // Define a largura total do carrossel
    carousel.width(itemWidth * totalItems);

    // Função para rolar o carrossel para a esquerda
    function carouselScrollLeft() {
    if (currentPosition > 0) {
        currentPosition -= itemWidth;
        carousel.css("transform", "translateX(-" + currentPosition + "px)");
    }
    }

    // Função para rolar o carrossel para a direita
    function carouselScrollRight() {
      if (currentPosition < (totalItems - 1) * itemWidth) {
        currentPosition += itemWidth;
        carousel.css("transform", "translateX(-" + currentPosition + "px)");
    }
    }

    // Eventos de clique nos botões de rolagem
    $(".carousel-scroll-left").click(function() {
    carouselScrollLeft();
    });

    $(".carousel-scroll-right").click(function() {
    carouselScrollRight();
    });
});