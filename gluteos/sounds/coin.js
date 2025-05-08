// Função para reproduzir um som de moedinha
function playCoinSound() {
  // Criar um novo elemento de áudio a cada vez
  const audio = new Audio();
  
  // Sons divertidos que remetem a dinheiro
  const coinSounds = [
    // Som de caixa registradora
    'https://assets.mixkit.co/sfx/preview/mixkit-cash-register-open-and-close-1630.mp3',
    // Som de moedas caindo
    'https://assets.mixkit.co/sfx/preview/mixkit-coins-handling-1939.mp3',
    // Som de dinheiro recebido
    'https://assets.mixkit.co/sfx/preview/mixkit-slot-machine-win-1929.mp3',
    // Som de jackpot
    'https://assets.mixkit.co/sfx/preview/mixkit-casino-bling-achievement-2067.mp3',
    // Som de moedas em máquina caça-níquel
    'https://assets.mixkit.co/sfx/preview/mixkit-coins-falling-from-a-slot-machine-2997.mp3'
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
