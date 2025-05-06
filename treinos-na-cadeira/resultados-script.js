// Script para controlar o carrossel de resultados

document.addEventListener('DOMContentLoaded', function() {
    // Elementos do carrossel de resultados
    const slides = document.querySelectorAll('.results-slide');
    const indicators = document.querySelectorAll('.results-indicator');
    const prevButton = document.querySelector('.prev-result');
    const nextButton = document.querySelector('.next-result');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    // Função para mostrar um slide específico
    function showSlide(index) {
        // Esconder todos os slides
        slides.forEach(slide => {
            slide.style.display = 'none';
            slide.classList.remove('active');
        });
        
        // Remover classe active de todos os indicadores
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
        
        // Mostrar o slide atual
        slides[index].style.display = 'block';
        slides[index].classList.add('active');
        
        // Atualizar o indicador ativo
        indicators[index].classList.add('active');
        
        // Atualizar o índice atual
        currentIndex = index;
    }
    
    // Função para ir para o próximo slide
    function nextSlide() {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= totalSlides) {
            nextIndex = 0;
        }
        showSlide(nextIndex);
    }
    
    // Função para ir para o slide anterior
    function prevSlide() {
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
            prevIndex = totalSlides - 1;
        }
        showSlide(prevIndex);
    }
    
    // Adicionar evento de clique aos botões de navegação
    if (prevButton) {
        prevButton.addEventListener('click', prevSlide);
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', nextSlide);
    }
    
    // Adicionar evento de clique aos indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Inicializar o carrossel
    showSlide(0);
    
    // Avançar automaticamente a cada 4 segundos
    setInterval(nextSlide, 4000);
});
