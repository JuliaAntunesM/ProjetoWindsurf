// Script para controlar a navegação dos depoimentos

document.addEventListener('DOMContentLoaded', function() {
    // Elementos do slider de depoimentos
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonials-dots .dot');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    let currentIndex = 0;
    const totalSlides = testimonialCards.length;
    
    // Função para mostrar um slide específico
    function showSlide(index) {
        // Remover classe active de todos os slides
        testimonialCards.forEach(card => {
            card.classList.remove('active');
        });
        
        // Remover classe active de todos os dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Adicionar classe active ao slide atual
        testimonialCards[index].classList.add('active');
        
        // Adicionar classe active ao dot atual
        dots[index].classList.add('active');
        
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
    
    // Adicionar evento de clique aos dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Iniciar o slider com o primeiro slide
    showSlide(0);
    
    // Avançar automaticamente a cada 5 segundos
    setInterval(nextSlide, 5000);
});
