document.addEventListener('DOMContentLoaded', function() {
    // Animar seções quando entrarem no viewport
    const animatedSections = document.querySelectorAll('.animated-section');
    
    function checkScroll() {
        animatedSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.85) {
                section.classList.add('visible');
            }
        });
    }
    
    // Verificar posição inicial
    checkScroll();
    
    // Verificar ao rolar a página
    window.addEventListener('scroll', checkScroll);
    
    // Contador regressivo
    function startCountdown() {
        // Definir tempo inicial (2 horas, 45 minutos e 18 segundos)
        let hours = 2;
        let minutes = 45;
        let seconds = 18;
        
        const hoursElement = document.querySelector('.timer-unit:nth-child(1) .timer-number');
        const minutesElement = document.querySelector('.timer-unit:nth-child(3) .timer-number');
        const secondsElement = document.querySelector('.timer-unit:nth-child(5) .timer-number');
        
        if (!hoursElement || !minutesElement || !secondsElement) return;
        
        const countdown = setInterval(() => {
            seconds--;
            
            if (seconds < 0) {
                seconds = 59;
                minutes--;
                
                if (minutes < 0) {
                    minutes = 59;
                    hours--;
                    
                    if (hours < 0) {
                        clearInterval(countdown);
                        return;
                    }
                }
            }
            
            // Atualizar elementos
            hoursElement.textContent = hours.toString().padStart(2, '0');
            minutesElement.textContent = minutes.toString().padStart(2, '0');
            secondsElement.textContent = seconds.toString().padStart(2, '0');
            
        }, 1000);
    }
    
    // Iniciar contador
    startCountdown();
    
    // Adicionar efeito de pulsação ao badge de desconto
    const discountBadge = document.querySelector('.discount-badge');
    if (discountBadge) {
        setInterval(() => {
            discountBadge.classList.add('pulse-effect');
            
            setTimeout(() => {
                discountBadge.classList.remove('pulse-effect');
            }, 1000);
        }, 3000);
    }
});
