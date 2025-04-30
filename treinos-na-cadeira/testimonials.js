// Script para controlar o carrossel de depoimentos
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do carrossel
    const slider = document.querySelector('.testimonials-slider');
    const dots = document.querySelectorAll('.testimonials-dots .dot');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    // Verificar se os elementos existem
    if (!slider || !dots.length || !cards.length) return;
    
    // Configurar o carrossel
    let currentIndex = 0;
    const totalCards = cards.length;
    let isAnimating = false;
    
    // Função para mostrar um depoimento específico
    function showTestimonial(index, direction = null) {
        if (isAnimating) return;
        isAnimating = true;
        
        // Garantir que o índice esteja dentro dos limites
        if (index < 0) index = totalCards - 1;
        if (index >= totalCards) index = 0;
        
        // Atualizar o índice atual
        const previousIndex = currentIndex;
        currentIndex = index;
        
        // Definir classes para animação
        if (direction === null) {
            direction = index > previousIndex ? 'next' : 'prev';
        }
        
        // Remover classes ativas de todos os cards
        cards.forEach(card => {
            card.classList.remove('active', 'prev', 'next');
        });
        
        // Configurar o card atual
        cards[currentIndex].classList.add('active');
        
        // Configurar o próximo card
        const nextIndex = (currentIndex + 1) % totalCards;
        cards[nextIndex].classList.add('next');
        
        // Configurar o card anterior
        const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
        cards[prevIndex].classList.add('prev');
        
        // Atualizar os dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
        
        // Permitir nova animação após um tempo
        setTimeout(() => {
            isAnimating = false;
        }, 600);
    }
    
    // Função para ir para o próximo depoimento
    function nextTestimonial() {
        showTestimonial((currentIndex + 1) % totalCards, 'next');
    }
    
    // Função para ir para o depoimento anterior
    function prevTestimonial() {
        showTestimonial((currentIndex - 1 + totalCards) % totalCards, 'prev');
    }
    
    // Adicionar eventos de clique aos botões de navegação
    if (nextButton) {
        nextButton.addEventListener('click', nextTestimonial);
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', prevTestimonial);
    }
    
    // Adicionar eventos de clique aos dots
    dots.forEach((dot) => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            if (index !== currentIndex) {
                const direction = index > currentIndex ? 'next' : 'prev';
                showTestimonial(index, direction);
            }
        });
    });
    
    // Adicionar navegação por teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextTestimonial();
        } else if (e.key === 'ArrowLeft') {
            prevTestimonial();
        }
    });
    
    // Adicionar navegação por toque (swipe)
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe para a esquerda - próximo depoimento
            nextTestimonial();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe para a direita - depoimento anterior
            prevTestimonial();
        }
    }
    
    // Inicializar o carrossel
    showTestimonial(0);
    
    // Rotacionar automaticamente os depoimentos a cada 5 segundos
    let autoplayInterval = setInterval(nextTestimonial, 5000);
    
    // Pausar a rotação automática quando o mouse estiver sobre o carrossel
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    // Retomar a rotação automática quando o mouse sair do carrossel
    slider.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextTestimonial, 5000);
    });
});
