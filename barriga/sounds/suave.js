// Som suave para transições
window.playSound = function(type) {
    if (type === 'start') {
        // Som de início do quiz
        const audio = new Audio();
        audio.volume = 0.3;
        
        // Criar um contexto de áudio
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Criar um oscilador para gerar um som suave
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // Nota Lá
        oscillator.frequency.exponentialRampToValueAtTime(880, audioContext.currentTime + 0.5); // Subir uma oitava
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.1);
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 1);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 1);
    }
};
