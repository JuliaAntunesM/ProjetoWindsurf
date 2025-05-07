// Função para reproduzir um som de "tcharam"
function playTcharamSound() {
  // Criar um novo elemento de áudio a cada vez
  const audio = new Audio();
  
  // Sons de "tcharam"
  const sonsTcharam = [
    // Som clássico de "ta-da" (tcharam)
    'https://www.soundjay.com/misc/sounds/tada-1.mp3',
    // Som de revelação
    'https://www.soundjay.com/misc/sounds/magic-chime-01.mp3',
    // Outro som de "ta-da"
    'https://www.soundjay.com/misc/sounds/tada-fanfare-a.mp3',
    // Som de fanfarra
    'https://www.soundjay.com/misc/sounds/fanfare-1.mp3'
  ];
  
  // Escolher um som aleatório da lista
  const somEscolhido = sonsTcharam[Math.floor(Math.random() * sonsTcharam.length)];
  audio.src = somEscolhido;
  
  // Configurar o volume para um nível agradável
  audio.volume = 0.4;
  
  // Reproduzir o som
  const playPromise = audio.play();
  
  // Tratar possíveis erros
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      console.log('Erro ao reproduzir o som:', error);
      
      // Tentar uma alternativa de som de "tcharam" sintético se falhar
      try {
        // Criar contexto de áudio
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Criar oscilador para o som de "tcharam"
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        // Configurar tipo de onda (som mais de "tcharam")
        oscillator.type = 'triangle';
        
        // Conectar
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Configurar volume inicial
        gainNode.gain.value = 0.0;
        
        // Iniciar oscilador
        oscillator.start();
        
        // Criar o efeito "tcharam"
        // Primeira nota (mais grave)
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // Lá4
        gainNode.gain.setValueAtTime(0.0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.1);
        gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.3);
        
        // Segunda nota (mais aguda - o "tcharam" propriamente dito)
        setTimeout(() => {
          oscillator.frequency.setValueAtTime(880, audioContext.currentTime); // Lá5
          gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
          gainNode.gain.linearRampToValueAtTime(0.4, audioContext.currentTime + 0.1);
          gainNode.gain.linearRampToValueAtTime(0.0, audioContext.currentTime + 0.5);
        }, 300);
        
        // Parar o oscilador após o efeito
        setTimeout(() => {
          oscillator.stop();
        }, 800);
        
      } catch (e) {
        console.log('Falha na alternativa de som de tcharam:', e);
      }
    });
  }
}
