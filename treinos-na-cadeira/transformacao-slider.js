// Script para controlar o novo carrossel de transformação
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do slider
    const sliderTrack = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    
    // Configurações iniciais
    let currentIndex = 0;
    const slideWidth = 100; // 100% da largura
    let autoplayInterval;
    
    // Configurar o slider inicialmente
    updateSlider();
    startAutoplay();
    
    // Função para atualizar a posição do slider
    function updateSlider() {
        // Atualizar a posição do track
        sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
        
        // Atualizar os dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Função para ir para o slide anterior
    function goToPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
        resetAutoplay();
    }
    
    // Função para ir para o próximo slide
    function goToNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
        resetAutoplay();
    }
    
    // Função para ir para um slide específico
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
        resetAutoplay();
    }
    
    // Iniciar autoplay
    function startAutoplay() {
        autoplayInterval = setInterval(goToNextSlide, 4000); // Trocar slide a cada 4 segundos
    }
    
    // Resetar autoplay
    function resetAutoplay() {
        clearInterval(autoplayInterval);
        startAutoplay();
    }
    
    // Event listeners para os botões
    prevBtn.addEventListener('click', goToPrevSlide);
    nextBtn.addEventListener('click', goToNextSlide);
    
    // Event listeners para os dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
    
    // Pausar autoplay quando o mouse estiver sobre o slider
    const sliderContainer = document.querySelector('.antes-depois-slider');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    // Retomar autoplay quando o mouse sair do slider
    sliderContainer.addEventListener('mouseleave', () => {
        startAutoplay();
    });
    
    // Adicionar suporte para gestos de swipe em dispositivos móveis
    let touchStartX = 0;
    let touchEndX = 0;
    
    sliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    sliderContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        // Swipe esquerda (próximo slide)
        if (touchEndX < touchStartX - 50) {
            goToNextSlide();
        }
        // Swipe direita (slide anterior)
        if (touchEndX > touchStartX + 50) {
            goToPrevSlide();
        }
    }
});
