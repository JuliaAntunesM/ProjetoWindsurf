// Script para controlar o carrossel de resultados
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do carrossel
    const carousel = document.querySelector('.results-carousel');
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.results-slide');
    const indicators = carousel.querySelectorAll('.results-indicator');
    const prevButton = carousel.querySelector('.results-control.prev');
    const nextButton = carousel.querySelector('.results-control.next');
    
    let currentIndex = 0;
    let intervalId;
    
    // Função para mostrar um slide específico
    function showSlide(index) {
        // Limitar o índice ao número de slides
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        // Atualizar o índice atual
        currentIndex = index;
        
        // Atualizar classes ativas
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        slides[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');
    }
    
    // Configurar os botões de navegação
    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
        resetAutoplay();
    });
    
    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
        resetAutoplay();
    });
    
    // Configurar os indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            resetAutoplay();
        });
    });
    
    // Configurar autoplay
    function startAutoplay() {
        intervalId = setInterval(() => {
            showSlide(currentIndex + 1);
        }, 4000); // Trocar slide a cada 4 segundos
    }
    
    function resetAutoplay() {
        clearInterval(intervalId);
        startAutoplay();
    }
    
    // Iniciar o carrossel
    startAutoplay();
    
    // Pausar o autoplay quando o mouse estiver sobre o carrossel
    carousel.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });
    
    // Retomar o autoplay quando o mouse sair do carrossel
    carousel.addEventListener('mouseleave', () => {
        startAutoplay();
    });
});
