// Som de moeda para seleção de opções
(function() {
    const originalPlaySound = window.playSound || function() {};
    
    window.playSound = function(type) {
        if (type === 'coin') {
            // Som de moeda ao selecionar opção
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Criar oscilador para o som de "ping"
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(1200, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(2400, audioContext.currentTime + 0.1);
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.05);
            gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.3);
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.3);
        } else {
            // Chamar a função original para outros tipos de som
            originalPlaySound(type);
        }
    };
})();
