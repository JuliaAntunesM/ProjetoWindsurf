// Efeitos visuais dopaminérgicos para estimular recompensa e engajamento

// Função para adicionar partículas de recompensa
function createRewardParticles(element, color = '#FFD700', count = 15) {
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'reward-particle';
        
        // Posição aleatória ao redor do elemento
        const posX = Math.random() * 100 - 50;
        const posY = Math.random() * 100 - 50;
        
        // Tamanho aleatório
        const size = Math.random() * 10 + 5;
        
        // Velocidade e direção aleatórias
        const speedX = Math.random() * 6 - 3;
        const speedY = Math.random() * -6 - 2; // Sempre para cima
        
        // Estilo base
        particle.style.position = 'absolute';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.borderRadius = '50%';
        particle.style.opacity = '0.8';
        particle.style.zIndex = '1000';
        
        // Posição inicial relativa ao elemento
        const rect = element.getBoundingClientRect();
        particle.style.left = `${rect.left + rect.width/2 + posX}px`;
        particle.style.top = `${rect.top + rect.height/2 + posY}px`;
        
        document.body.appendChild(particle);
        
        // Animação
        let opacity = 0.8;
        let positionX = rect.left + rect.width/2 + posX;
        let positionY = rect.top + rect.height/2 + posY;
        
        const animate = () => {
            positionX += speedX;
            positionY += speedY;
            opacity -= 0.01;
            
            particle.style.left = `${positionX}px`;
            particle.style.top = `${positionY}px`;
            particle.style.opacity = opacity.toString();
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                document.body.removeChild(particle);
            }
        };
        
        requestAnimationFrame(animate);
    }
}

// Função para criar efeito de pulso
function createPulseEffect(element, color = 'rgba(255, 215, 0, 0.3)') {
    const pulse = document.createElement('div');
    pulse.className = 'pulse-effect';
    
    // Estilo base
    pulse.style.position = 'absolute';
    pulse.style.width = '100%';
    pulse.style.height = '100%';
    pulse.style.top = '0';
    pulse.style.left = '0';
    pulse.style.backgroundColor = color;
    pulse.style.borderRadius = 'inherit';
    pulse.style.zIndex = '1';
    pulse.style.opacity = '0';
    
    // Adiciona ao elemento (preservando posição relativa)
    const currentPosition = window.getComputedStyle(element).position;
    if (currentPosition === 'static') {
        element.style.position = 'relative';
    }
    
    element.appendChild(pulse);
    
    // Animação
    let scale = 0.8;
    let opacity = 0;
    let growing = true;
    
    const animate = () => {
        if (growing) {
            scale += 0.01;
            opacity += 0.05;
            if (scale >= 1) {
                growing = false;
            }
        } else {
            scale += 0.01;
            opacity -= 0.05;
        }
        
        pulse.style.transform = `scale(${scale})`;
        pulse.style.opacity = opacity.toString();
        
        if (opacity > 0) {
            requestAnimationFrame(animate);
        } else {
            element.removeChild(pulse);
        }
    };
    
    requestAnimationFrame(animate);
}

// Efeito de brilho em elementos
function addShineEffect(element) {
    // Adiciona overlay de brilho
    const shine = document.createElement('div');
    shine.className = 'shine-effect';
    
    // Estilo base
    shine.style.position = 'absolute';
    shine.style.top = '0';
    shine.style.left = '-100%';
    shine.style.width = '50%';
    shine.style.height = '100%';
    shine.style.background = 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)';
    shine.style.transform = 'skewX(-25deg)';
    shine.style.zIndex = '2';
    
    // Adiciona ao elemento (preservando posição relativa)
    const currentPosition = window.getComputedStyle(element).position;
    if (currentPosition === 'static') {
        element.style.position = 'relative';
    }
    element.style.overflow = 'hidden';
    
    element.appendChild(shine);
    
    // Animação
    let position = -100;
    
    const animate = () => {
        position += 2;
        shine.style.left = `${position}%`;
        
        if (position <= 100) {
            requestAnimationFrame(animate);
        } else {
            element.removeChild(shine);
        }
    };
    
    requestAnimationFrame(animate);
}

// Efeito de confete quando atinge uma pontuação alta
function createConfetti(x, y, count = 50) {
    const colors = ['#FFD700', '#FF5BAE', '#A3D7A7', '#E83E8C', '#C3E6CB'];
    
    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Tamanho aleatório
        const size = Math.random() * 8 + 4;
        
        // Velocidade e direção aleatórias
        const speedX = Math.random() * 10 - 5;
        const speedY = Math.random() * -10 - 5; // Sempre para cima inicialmente
        
        // Rotação aleatória
        const rotation = Math.random() * 360;
        const rotationSpeed = Math.random() * 10 - 5;
        
        // Cor aleatória do array
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Forma aleatória (quadrado ou círculo)
        const isCircle = Math.random() > 0.5;
        
        // Estilo base
        confetti.style.position = 'fixed';
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.backgroundColor = color;
        confetti.style.borderRadius = isCircle ? '50%' : '2px';
        confetti.style.opacity = '0.9';
        confetti.style.zIndex = '9999';
        confetti.style.transform = `rotate(${rotation}deg)`;
        
        // Posição inicial
        confetti.style.left = `${x}px`;
        confetti.style.top = `${y}px`;
        
        document.body.appendChild(confetti);
        
        // Animação
        let positionX = x;
        let positionY = y;
        let currentRotation = rotation;
        let opacity = 0.9;
        let gravity = 0.1;
        let velocityY = speedY;
        
        const animate = () => {
            positionX += speedX;
            velocityY += gravity;
            positionY += velocityY;
            currentRotation += rotationSpeed;
            opacity -= 0.005;
            
            confetti.style.left = `${positionX}px`;
            confetti.style.top = `${positionY}px`;
            confetti.style.transform = `rotate(${currentRotation}deg)`;
            confetti.style.opacity = opacity.toString();
            
            if (opacity > 0 && positionY < window.innerHeight) {
                requestAnimationFrame(animate);
            } else {
                document.body.removeChild(confetti);
            }
        };
        
        requestAnimationFrame(animate);
    }
}

// Efeito de micro-recompensas visuais
function microReward(element, type = 'pulse') {
    switch(type) {
        case 'pulse':
            createPulseEffect(element);
            break;
        case 'particles':
            createRewardParticles(element);
            break;
        case 'shine':
            addShineEffect(element);
            break;
        case 'confetti':
            const rect = element.getBoundingClientRect();
            createConfetti(rect.left + rect.width/2, rect.top + rect.height/2, 30);
            break;
        default:
            createPulseEffect(element);
    }
}

// Adicionar efeitos aos elementos da página
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar efeitos aos botões
    const buttons = document.querySelectorAll('button, .cta-button, .option');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            microReward(this, 'pulse');
        });
        
        button.addEventListener('click', function() {
            microReward(this, 'particles');
            // Reproduzir som de recompensa
            if (window.playSound) {
                window.playSound();
            }
        });
    });
    
    // Adicionar efeitos às imagens
    const images = document.querySelectorAll('.results-container img, .testimonial-image, .bonus-image');
    images.forEach(image => {
        image.addEventListener('mouseenter', function() {
            microReward(this, 'shine');
        });
    });
    
    // Efeito especial para o display de pontuação
    const scoreDisplay = document.getElementById('score-display');
    if (scoreDisplay) {
        const originalUpdateScore = window.updateScore;
        window.updateScore = function(points) {
            originalUpdateScore(points);
            microReward(scoreDisplay.parentElement, 'particles');
            
            // Efeito especial para pontuações altas
            if (parseInt(scoreDisplay.textContent) >= 15) {
                const rect = scoreDisplay.getBoundingClientRect();
                createConfetti(rect.left + rect.width/2, rect.top + rect.height/2, 20);
            }
        };
    }
    
    // Efeito para o resultado final
    const finalScore = document.getElementById('final-score');
    if (finalScore) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' || mutation.type === 'characterData') {
                    const score = parseInt(finalScore.textContent);
                    if (score > 0) {
                        const rect = finalScore.getBoundingClientRect();
                        createConfetti(rect.left + rect.width/2, rect.top, 50);
                    }
                }
            });
        });
        
        observer.observe(finalScore, { 
            childList: true,
            characterData: true,
            subtree: true
        });
    }
    
    // Adicionar efeitos aos elementos de preço
    const priceElements = document.querySelectorAll('.price, [style*="R$97"]');
    priceElements.forEach(element => {
        setInterval(() => {
            microReward(element, 'shine');
        }, 3000);
    });
    
    // Efeitos para os elementos de bônus
    const bonusElements = document.querySelectorAll('.bonus-item');
    bonusElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            microReward(this, 'pulse');
        });
    });
    
    // Efeito para as imagens antes/depois
    const transformationImages = document.querySelectorAll('[alt*="antes"], [alt*="depois"]');
    transformationImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            const rect = this.getBoundingClientRect();
            createRewardParticles(this, '#FFD700', 10);
        });
    });
    
    // Efeito para o cabeçalho
    const header = document.querySelector('h1, .header');
    if (header) {
        setTimeout(() => {
            microReward(header, 'shine');
        }, 1000);
    }
});

// Função para criar efeito de flutuação suave
function addFloatingEffect(element, amplitude = 10, period = 3000) {
    let startY = 0;
    let startTime = Date.now();
    
    // Salvar posição inicial
    const computedStyle = window.getComputedStyle(element);
    if (computedStyle.transform !== 'none') {
        // Se já tem transform, extrair valores existentes
        const matrix = new DOMMatrix(computedStyle.transform);
        startY = matrix.m42; // Valor de translateY na matriz
    }
    
    function animate() {
        const now = Date.now();
        const elapsed = now - startTime;
        const offset = amplitude * Math.sin((elapsed / period) * (2 * Math.PI));
        
        element.style.transform = `translateY(${startY + offset}px)`;
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Adicionar efeitos de flutuação a elementos específicos
document.addEventListener('DOMContentLoaded', function() {
    // Elementos que devem flutuar
    const floatingElements = document.querySelectorAll('.bonus-icon, .crown-icon, .trophy-icon');
    floatingElements.forEach(element => {
        addFloatingEffect(element, 5, 2000);
    });
    
    // Adicionar efeito de flutuação mais sutil aos botões CTA
    const ctaButtons = document.querySelectorAll('.cta-button-large');
    ctaButtons.forEach(button => {
        addFloatingEffect(button, 3, 4000);
    });
});

// Adicionar efeito de destaque pulsante para elementos importantes
function addPulsatingHighlight(element, color = 'rgba(255, 215, 0, 0.3)', period = 2000) {
    // Criar elemento de destaque
    const highlight = document.createElement('div');
    highlight.className = 'pulsating-highlight';
    
    // Estilo base
    highlight.style.position = 'absolute';
    highlight.style.top = '-10px';
    highlight.style.left = '-10px';
    highlight.style.right = '-10px';
    highlight.style.bottom = '-10px';
    highlight.style.borderRadius = '20px';
    highlight.style.backgroundColor = 'transparent';
    highlight.style.border = `2px solid ${color}`;
    highlight.style.zIndex = '0';
    highlight.style.pointerEvents = 'none';
    
    // Adicionar ao elemento
    const currentPosition = window.getComputedStyle(element).position;
    if (currentPosition === 'static') {
        element.style.position = 'relative';
    }
    
    element.appendChild(highlight);
    
    // Animação
    let startTime = Date.now();
    
    function animate() {
        const now = Date.now();
        const elapsed = now - startTime;
        const scale = 1 + 0.05 * Math.sin((elapsed / period) * (2 * Math.PI));
        
        highlight.style.transform = `scale(${scale})`;
        highlight.style.opacity = (0.5 + 0.5 * Math.sin((elapsed / period) * (2 * Math.PI))).toString();
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Adicionar efeito de destaque a elementos importantes
document.addEventListener('DOMContentLoaded', function() {
    // Destacar preço e botão CTA principal
    setTimeout(() => {
        const priceElements = document.querySelectorAll('[style*="R$97"]');
        priceElements.forEach(element => {
            addPulsatingHighlight(element, 'rgba(255, 91, 174, 0.5)');
        });
        
        const ctaButtons = document.querySelectorAll('.cta-button-large, .cta-button');
        ctaButtons.forEach(button => {
            addPulsatingHighlight(button, 'rgba(163, 215, 167, 0.5)');
        });
    }, 2000);
});
