document.addEventListener('DOMContentLoaded', function() {
    // Função para criar animações na página de vendas
    function initSalesAnimations() {
        // Animar elementos da página de resultados
        const resultsScreen = document.getElementById('results-screen');
        
        if (resultsScreen && resultsScreen.classList.contains('active')) {
            // Animar elementos com fade-in sequencial
            const elements = resultsScreen.querySelectorAll('.simplified-header, .ratings-section, .benefits-tagline');
            
            elements.forEach((element, index) => {
                setTimeout(() => {
                    element.style.opacity = '0';
                    element.style.transform = 'translateY(20px)';
                    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }, 100);
                }, index * 300);
            });
            
            // Adicionar efeito de pulsação nos botões
            const buttons = resultsScreen.querySelectorAll('.cta-button');
            buttons.forEach(button => {
                button.classList.add('pulse-animation');
            });
        }
    }
    
    // Função para adicionar efeitos de hover nos cards
    function addCardHoverEffects() {
        const cards = document.querySelectorAll('.testimonial-card, .benefit-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
                this.style.boxShadow = '0 15px 30px rgba(100, 180, 100, 0.2)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
            });
        });
    }
    
    // Função para animar os depoimentos
    function animateTestimonials() {
        const testimonials = document.querySelectorAll('.testimonial-slide');
        if (testimonials.length === 0) return;
        
        let currentIndex = 0;
        
        // Esconder todos os depoimentos exceto o primeiro
        testimonials.forEach((testimonial, index) => {
            if (index !== 0) {
                testimonial.style.display = 'none';
            }
        });
        
        // Função para mostrar o próximo depoimento
        function showNextTestimonial() {
            testimonials[currentIndex].style.opacity = '0';
            testimonials[currentIndex].style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                testimonials[currentIndex].style.display = 'none';
                
                currentIndex = (currentIndex + 1) % testimonials.length;
                
                testimonials[currentIndex].style.display = 'block';
                testimonials[currentIndex].style.opacity = '0';
                testimonials[currentIndex].style.transform = 'translateX(20px)';
                
                setTimeout(() => {
                    testimonials[currentIndex].style.opacity = '1';
                    testimonials[currentIndex].style.transform = 'translateX(0)';
                }, 50);
            }, 500);
        }
        
        // Alternar depoimentos a cada 5 segundos
        setInterval(showNextTestimonial, 5000);
    }
    
    // Função para adicionar efeito de destaque nos botões de CTA
    function addCtaButtonEffects() {
        const ctaButtons = document.querySelectorAll('.cta-button');
        
        ctaButtons.forEach(button => {
            // Adicionar efeito de brilho
            const shine = document.createElement('span');
            shine.classList.add('button-shine');
            button.appendChild(shine);
            
            // Adicionar efeito de pulsação
            button.classList.add('pulse-effect');
        });
    }
    
    // Executar animações quando a página estiver totalmente carregada
    window.addEventListener('load', function() {
        initSalesAnimations();
        addCardHoverEffects();
        animateTestimonials();
        addCtaButtonEffects();
        
        // Adicionar observador para animar elementos quando entrarem na viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        // Observar seções que devem ser animadas
        document.querySelectorAll('.result-section, .cta-section').forEach(section => {
            observer.observe(section);
        });
    });
    
    // Adicionar estilos dinâmicos para as animações
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .pulse-effect {
            animation: pulse-button 2s infinite;
        }
        
        @keyframes pulse-button {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .button-shine {
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.3);
            transform: skewX(-25deg);
            animation: button-shine 3s infinite;
        }
        
        @keyframes button-shine {
            0% { left: -100%; }
            20%, 100% { left: 100%; }
        }
        
        .testimonial-slide {
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .benefit-card, .testimonial-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
    `;
    document.head.appendChild(styleElement);
});
