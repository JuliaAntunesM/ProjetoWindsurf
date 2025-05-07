// Função para reproduzir um som mais bonito e elegante
function playPlinSound() {
  // Criar um novo elemento de áudio a cada vez
  const audio = new Audio();
  
  // Lista de sons bonitos para usar aleatoriamente
  const bonitos = [
    'https://assets.mixkit.co/sfx/preview/mixkit-software-interface-back-2575.mp3',
    'https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3',
    'https://assets.mixkit.co/sfx/preview/mixkit-positive-ui-select-2313.mp3',
    'https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3',
    'https://assets.mixkit.co/sfx/preview/mixkit-light-select-2568.mp3'
  ];
  
  // Escolher um som aleatório da lista
  const somEscolhido = bonitos[Math.floor(Math.random() * bonitos.length)];
  audio.src = somEscolhido;
  
  // Configurar o volume para um nível agradável
  audio.volume = 0.5;
  
  // Reproduzir o som
  const playPromise = audio.play();
  
  // Tratar possíveis erros
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      console.log('Erro ao reproduzir o som:', error);
      
      // Tentar uma alternativa mais sofisticada se falhar
      try {
        // Criar um oscilador (som sintético mais elegante)
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Criar oscilador principal
        const oscillator = audioContext.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.value = 880; // Nota A5
        
        // Criar segundo oscilador para harmonia
        const oscillator2 = audioContext.createOscillator();
        oscillator2.type = 'sine';
        oscillator2.frequency.value = 1320; // Nota E6
        
        // Controle de volume
        const gainNode = audioContext.createGain();
        gainNode.gain.value = 0.2;
        
        // Conectar os osciladores ao controle de volume
        oscillator.connect(gainNode);
        oscillator2.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Configurar envelope de som (ataque e decaimento suaves)
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.05);
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.3);
        
        // Tocar os osciladores
        oscillator.start();
        oscillator2.start();
        
        // Parar após 300ms
        setTimeout(() => {
          oscillator.stop();
          oscillator2.stop();
        }, 300);
      } catch (e) {
        console.log('Falha na alternativa de som:', e);
      }
    });
  }
}

// Não é necessário inicializar o som antecipadamente
// A função playPlinSound cria um novo elemento de áudio a cada vez
