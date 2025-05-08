// Função para reproduzir um som bem bonito de comemoração
function playPlinSound() {
  // Criar um novo elemento de áudio a cada vez
  const audio = new Audio();
  
  // Sons bonitos de comemoração
  const sonsComemorativos = [
    'https://assets.mixkit.co/sfx/preview/mixkit-cheering-and-applause-512.mp3',
    'https://assets.mixkit.co/sfx/preview/mixkit-animated-small-group-applause-523.mp3',
    'https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3',
    'https://assets.mixkit.co/sfx/preview/mixkit-medieval-show-fanfare-announcement-226.mp3',
    'https://assets.mixkit.co/sfx/preview/mixkit-crowd-in-applause-and-cheering-510.mp3',
    'https://assets.mixkit.co/sfx/preview/mixkit-audience-light-applause-513.mp3',
    'https://assets.mixkit.co/sfx/preview/mixkit-cartoon-positive-sound-2255.mp3'
  ];
  
  // Escolher um som aleatório da lista
  const somEscolhido = sonsComemorativos[Math.floor(Math.random() * sonsComemorativos.length)];
  audio.src = somEscolhido;
  
  // Configurar o volume para um nível agradável
  audio.volume = 0.3;
  
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

// Não é necessário inicializar o som antecipadamente
// A função playPlinSound cria um novo elemento de áudio a cada vez
