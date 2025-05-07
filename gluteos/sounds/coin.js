// Função para reproduzir um som de moedinha
function playCoinSound() {
  // Criar um novo elemento de áudio a cada vez
  const audio = new Audio();
  
  // Sons de moedinha
  const coinSounds = [
    // Som de moeda 1
    'https://assets.mixkit.co/sfx/preview/mixkit-coin-win-notification-1992.mp3',
    // Som de moeda 2
    'https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-jump-coin-216.mp3',
    // Som de moeda 3
    'https://assets.mixkit.co/sfx/preview/mixkit-bonus-earned-in-video-game-2058.mp3',
    // Som de moeda 4
    'https://assets.mixkit.co/sfx/preview/mixkit-unlock-game-notification-253.mp3'
  ];
  
  // Escolher um som aleatório da lista
  const somEscolhido = coinSounds[Math.floor(Math.random() * coinSounds.length)];
  audio.src = somEscolhido;
  
  // Configurar o volume para um nível agradável
  audio.volume = 0.4;
  
  // Reproduzir o som
  const playPromise = audio.play();
  
  // Tratar possíveis erros
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      console.log('Erro ao reproduzir o som de moeda:', error);
      
      // Tentar uma alternativa de som sintético se falhar
      try {
        // Criar contexto de áudio
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Criar oscilador para o som de moeda
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        // Configurar tipo de onda
        oscillator.type = 'sine';
        
        // Conectar
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Configurar volume inicial
        gainNode.gain.value = 0.0;
        
        // Iniciar oscilador
        oscillator.start();
        
        // Criar o efeito de moeda
        oscillator.frequency.setValueAtTime(1200, audioContext.currentTime); // Som agudo
        oscillator.frequency.setValueAtTime(1500, audioContext.currentTime + 0.1); // Subir frequência
        gainNode.gain.setValueAtTime(0.0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.05);
        gainNode.gain.linearRampToValueAtTime(0.0, audioContext.currentTime + 0.2);
        
        // Parar o oscilador após o efeito
        setTimeout(() => {
          oscillator.stop();
        }, 300);
        
      } catch (e) {
        console.log('Falha na alternativa de som de moeda:', e);
      }
    });
  }
}
