// Função para reproduzir um som de "tcharam"
function playComemoracaoSound() {
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
      
      // Tentar uma alternativa de som de jogo sintético se falhar
      try {
        // Criar contexto de áudio
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Criar sequência de notas ascendentes (como em jogos quando passa de fase)
        const notas = [523.25, 659.25, 783.99, 1046.50]; // Notas C5, E5, G5, C6
        const duracao = 0.15; // Duração de cada nota em segundos
        
        // Criar oscilador e controle de volume
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        // Configurar tipo de onda (som mais de videogame)
        oscillator.type = 'square';
        
        // Conectar
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Configurar volume inicial
        gainNode.gain.value = 0.2;
        
        // Iniciar oscilador
        oscillator.start();
        
        // Programar a sequência de notas
        notas.forEach((nota, index) => {
          // Definir a frequência da nota no momento certo
          oscillator.frequency.setValueAtTime(nota, audioContext.currentTime + index * duracao);
          
          // Pulso de volume para cada nota
          gainNode.gain.setValueAtTime(0.05, audioContext.currentTime + index * duracao);
          gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + index * duracao + 0.05);
          gainNode.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + index * duracao + duracao - 0.05);
        });
        
        // Parar o oscilador após a última nota
        setTimeout(() => {
          gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.1);
          setTimeout(() => oscillator.stop(), 100);
        }, notas.length * duracao * 1000);
        
      } catch (e) {
        console.log('Falha na alternativa de som de jogo:', e);
      }
    });
  }
}
