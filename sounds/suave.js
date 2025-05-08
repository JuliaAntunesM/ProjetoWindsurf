// Função para reproduzir um som suave e agradável
function playSuaveSound() {
  // Criar um novo elemento de áudio a cada vez
  const audio = new Audio();
  
  // Sons suaves e agradáveis
  const sonsSuaves = [
    // Som de sino suave
    'https://assets.mixkit.co/sfx/preview/mixkit-bell-notification-933.mp3',
    // Som de interface elegante
    'https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3',
    // Som de pop suave
    'https://assets.mixkit.co/sfx/preview/mixkit-cool-interface-click-tone-2568.mp3',
    // Som de notificação delicada
    'https://assets.mixkit.co/sfx/preview/mixkit-software-interface-remove-2576.mp3',
    // Som de clique elegante
    'https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3'
  ];
  
  // Escolher um som aleatório da lista
  const somEscolhido = sonsSuaves[Math.floor(Math.random() * sonsSuaves.length)];
  audio.src = somEscolhido;
  
  // Configurar o volume para um nível agradável
  audio.volume = 0.4;
  
  // Reproduzir o som
  const playPromise = audio.play();
  
  // Tratar possíveis erros
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      console.log('Erro ao reproduzir o som:', error);
      
      // Tentar uma alternativa de som suave sintético se falhar
      try {
        // Criar contexto de áudio
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Criar oscilador para o som suave
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        // Configurar tipo de onda (som mais suave)
        oscillator.type = 'sine';
        
        // Conectar
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Configurar volume inicial
        gainNode.gain.value = 0.0;
        
        // Iniciar oscilador
        oscillator.start();
        
        // Criar o efeito suave
        oscillator.frequency.setValueAtTime(880, audioContext.currentTime); // Lá5
        gainNode.gain.setValueAtTime(0.0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.05);
        gainNode.gain.linearRampToValueAtTime(0.0, audioContext.currentTime + 0.3);
        
        // Parar o oscilador após o efeito
        setTimeout(() => {
          oscillator.stop();
        }, 400);
        
      } catch (e) {
        console.log('Falha na alternativa de som suave:', e);
      }
    });
  }
}
