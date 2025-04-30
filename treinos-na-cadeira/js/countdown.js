// Script para o contador regressivo

document.addEventListener('DOMContentLoaded', function() {
    // Definir a data final para 24 horas a partir de agora
    const now = new Date();
    const deadline = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    
    // Atualizar o contador a cada segundo
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = deadline - now;
        
        // Cálculos de tempo
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Atualizar os elementos HTML
        document.querySelector('.countdown-item:nth-child(1) .countdown-number').textContent = hours.toString().padStart(2, '0');
        document.querySelector('.countdown-item:nth-child(2) .countdown-number').textContent = minutes.toString().padStart(2, '0');
        document.querySelector('.countdown-item:nth-child(3) .countdown-number').textContent = seconds.toString().padStart(2, '0');
        
        // Se o contador chegar a zero
        if (distance < 0) {
            clearInterval(countdown);
            document.querySelector('.countdown-title').textContent = "OFERTA EXPIRADA!";
            
            // Manter o contador em zeros
            document.querySelector('.countdown-item:nth-child(1) .countdown-number').textContent = "00";
            document.querySelector('.countdown-item:nth-child(2) .countdown-number').textContent = "00";
            document.querySelector('.countdown-item:nth-child(3) .countdown-number').textContent = "00";
        }
    }, 1000);
});
