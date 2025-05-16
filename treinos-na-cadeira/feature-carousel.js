// Carrossel de recursos para a seção "O QUE VOCÊ VAI RECEBER"
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar o carrossel
    initFeatureCarousel();
    
    // Adicionar eventos de clique aos indicadores
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            showFeatureSlide(index);
        });
    });
});

// Variáveis globais
let currentFeatureIndex = 0;
const totalFeatures = document.querySelectorAll('.feature-slide').length;
let featureAutoplayInterval;

// Inicializar o carrossel
function initFeatureCarousel() {
    // Mostrar o primeiro slide
    showFeatureSlide(0);
    
    // Iniciar autoplay
    startFeatureAutoplay();
}

// Mostrar um slide específico
function showFeatureSlide(index) {
    // Atualizar o índice atual
    currentFeatureIndex = index;
    
    // Obter todos os slides e indicadores
    const slides = document.querySelectorAll('.feature-slide');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    
    // Esconder todos os slides e remover a classe ativa dos indicadores
    slides.forEach(slide => {
        slide.classList.remove('active');
        
        // Remover as classes de animação para reiniciar as animações
        const animatedElements = slide.querySelectorAll('.animate__animated');
        animatedElements.forEach(el => {
            el.classList.remove('animate__fadeInUp', 'animate__zoomIn');
        });
    });
    
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    // Mostrar o slide atual e ativar o indicador correspondente
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    
    // Reiniciar as animações
    setTimeout(() => {
        const currentSlide = slides[index];
        const animatedElements = currentSlide.querySelectorAll('.animate__animated');
        
        animatedElements.forEach(el => {
            // Verificar qual animação aplicar
            if (el.classList.contains('spotlight-icon')) {
                el.classList.add('animate__zoomIn');
            } else {
                el.classList.add('animate__fadeInUp');
            }
        });
    }, 50);
    
    // Reiniciar o autoplay
    resetFeatureAutoplay();
}

// Ir para o slide anterior
function prevFeature() {
    let newIndex = currentFeatureIndex - 1;
    if (newIndex < 0) {
        newIndex = totalFeatures - 1;
    }
    showFeatureSlide(newIndex);
}

// Ir para o próximo slide
function nextFeature() {
    let newIndex = currentFeatureIndex + 1;
    if (newIndex >= totalFeatures) {
        newIndex = 0;
    }
    showFeatureSlide(newIndex);
}

// Iniciar autoplay
function startFeatureAutoplay() {
    featureAutoplayInterval = setInterval(() => {
        nextFeature();
    }, 5000); // Mudar slide a cada 5 segundos
}

// Reiniciar autoplay
function resetFeatureAutoplay() {
    clearInterval(featureAutoplayInterval);
    startFeatureAutoplay();
}

// Expor funções para uso global
window.prevFeature = prevFeature;
window.nextFeature = nextFeature;
