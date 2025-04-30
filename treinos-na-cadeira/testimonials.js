// Script para controlar o slider de depoimentos
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do slider
    const slider = document.querySelector('.testimonials-slider');
    const dots = document.querySelectorAll('.testimonials-dots .dot');
    const cards = document.querySelectorAll('.testimonial-card');
    
    // Verificar se os elementos existem
    if (!slider || !dots.length || !cards.length) return;
    
    // Configurar o slider
    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth + 25; // Largura do card + gap
    
    // Função para mostrar um depoimento específico
    function showTestimonial(index) {
        // Atualizar o índice atual
        currentIndex = index;
        
        // Rolar para o depoimento selecionado
        if (window.innerWidth < 1024) {
            slider.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth'
            });
        }
        
        // Atualizar os dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    // Adicionar eventos de clique aos dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
    });
    
    // Detectar rolagem do slider para atualizar os dots
    let isScrolling;
    slider.addEventListener('scroll', () => {
        // Limpar o timeout anterior
        window.clearTimeout(isScrolling);
        
        // Definir um timeout para verificar quando a rolagem parar
        isScrolling = setTimeout(() => {
            // Calcular qual card está mais visível
            const scrollPosition = slider.scrollLeft;
            const index = Math.round(scrollPosition / cardWidth);
            
            // Atualizar os dots
            if (index !== currentIndex) {
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });
                currentIndex = index;
            }
        }, 100);
    });
    
    // Inicializar o slider
    showTestimonial(0);
    
    // Adicionar navegação por toque (swipe)
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        
        if (touchEndX < touchStartX - swipeThreshold && currentIndex < cards.length - 1) {
            // Swipe para a esquerda - próximo depoimento
            showTestimonial(currentIndex + 1);
        } else if (touchEndX > touchStartX + swipeThreshold && currentIndex > 0) {
            // Swipe para a direita - depoimento anterior
            showTestimonial(currentIndex - 1);
        }
    }
});
