document.addEventListener('DOMContentLoaded', function() {
    // Função para animar os gráficos na tela de carregamento
    function animateLoadingCharts() {
        const chartBars = document.querySelectorAll('.chart-bar');
        
        // Animar cada barra do gráfico
        chartBars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.opacity = '1';
            }, index * 200);
        });
        
        // Animar os valores das estatísticas
        const statValues = document.querySelectorAll('.stat-value');
        statValues.forEach((stat) => {
            const finalValue = parseInt(stat.getAttribute('data-value'));
            animateNumber(stat, 0, finalValue, 2000);
        });
        
        // Avançar automaticamente para a página de resultados após 5 segundos
        setTimeout(() => {
            nextPage('results-screen');
        }, 5000);
    }
    
    // Função para animar números crescentes
    function animateNumber(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentValue = Math.floor(progress * (end - start) + start);
            element.textContent = currentValue;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.textContent = end;
            }
        };
        window.requestAnimationFrame(step);
    }
    
    // Iniciar animação quando a tela de carregamento for exibida
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class' && 
                    loadingScreen.classList.contains('active')) {
                    animateLoadingCharts();
                    observer.disconnect();
                }
            });
        });
        
        observer.observe(loadingScreen, { attributes: true });
    }
});
