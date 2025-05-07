document.addEventListener('DOMContentLoaded', function() {
    // Elementos da interface
    const welcomeScreen = document.getElementById('welcome-screen');
    const questionScreen = document.getElementById('question-screen');
    const loadingScreen = document.getElementById('loading-screen');
    const resultsScreen = document.getElementById('results-screen');
    const startQuizBtn = document.getElementById('start-quiz');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const progressBar = document.querySelector('.progress');

    // Imagens geradas por IA para cada opção de resposta
    const optionImages = {
        0: { // Pergunta 1: "Já usou legging ou enchimento por baixo da calça jeans pra tentar parecer que tem mais bumbum?"
            0: "ImagensRespostas/1-1.jpg", // "Sim, direto! Me sinto melhor assim"
            1: "ImagensRespostas/1-2.jpg", // "Sim, e me senti bem até tirar a roupa"
            2: "ImagensRespostas/1-3.jpg", // "Sim, mas percebi que isso não resolve de verdade"
            3: "ImagensRespostas/1-4.jpg" // "Nunca usei, mas já pensei nisso"
        },
        1: { // Pergunta 2: "Como você gostaria de se sentir ao colocar uma calça jeans justinha?"
            0: "https://img.freepik.com/free-photo/confident-woman-wearing-tight-jeans-admiring-toned-buttocks-mirror_1150-45632.jpg", // "Confiante, com o bumbum durinho e redondinho"
            1: "https://img.freepik.com/free-photo/woman-walking-confidently-tight-jeans-attracting-attention_1150-45633.jpg", // "Poderosa, pronta pra atrair olhares"
            2: "https://img.freepik.com/free-photo/woman-admiring-herself-mirror-feeling-proud-her-body-jeans_1150-45634.jpg", // "Orgulhosa do meu corpo no espelho"
            3: "https://img.freepik.com/free-photo/woman-feeling-attractive-partner-wearing-jeans-romantic-setting_1150-45635.jpg" // "Me sentintindo bem comigo mesma, e atraente para meu marido/namorado"
        },
        2: { // Pergunta 3: "O que mais te incomoda no momento?"
            0: "https://img.freepik.com/free-photo/woman-looking-cellulite-through-tight-clothing-concerned_1150-45636.jpg", // "Celulite marcando demais nas roupas"
            1: "https://img.freepik.com/free-photo/woman-checking-sagging-buttocks-mirror-wanting-firmness_1150-45637.jpg", // "Flacidez, queria ter o bumbum redondinho e durinho"
            2: "https://img.freepik.com/free-photo/woman-looking-mirror-concerned-about-flat-buttocks-lack-volume_1150-45638.jpg", // "Falta de volume no bumbum"
            3: "https://img.freepik.com/free-photo/woman-looking-frustrated-mirror-multiple-buttocks-issues_1150-45639.jpg" // "Tudo isso junto 😩"
        },
        3: { // Pergunta 4: "Você já tentou algum treino pra glúteos antes?"
            0: "https://img.freepik.com/free-photo/disappointed-woman-measuring-buttocks-after-workout-no-results_1150-45640.jpg", // "Sim, mas desisti porque não vi resultado"
            1: "https://img.freepik.com/free-photo/exhausted-woman-sitting-floor-after-long-glutes-workout-tired_1150-45641.jpg", // "Sim, mas era cansativo e demorado"
            2: "https://img.freepik.com/free-photo/confused-woman-searching-online-glutes-workout-overwhelmed-information_1150-45642.jpg", // "Não, nunca soube por onde começar"
            3: "https://img.freepik.com/free-photo/frustrated-woman-surrounded-different-workout-equipment-nothing-worked_1150-45643.jpg" // "Já tentei de tudo, mas nada me ajudou de verdade"
        },
        4: { // Pergunta 5: "Já sentiu vergonha em usar biquinis em lugares com muitas pessoas ou na hora de namorar?"
            0: "https://img.freepik.com/free-photo/woman-beach-covering-buttocks-with-sarong-self-conscious_1150-45644.jpg", // "Sim, mas tento disfarçar com saída ou canga"
            1: "https://img.freepik.com/free-photo/insecure-woman-uncomfortable-bikini-beach-hiding-body_1150-45645.jpg", // "Sim, me sinto insegura e desconfortável"
            2: "https://img.freepik.com/free-photo/woman-receiving-compliments-beach-still-feeling-insecure-bikini_1150-45646.jpg", // "Já senti insegurança, mesmo com elogios"
            3: "https://img.freepik.com/free-photo/woman-declining-beach-invitation-looking-uncomfortable-avoiding-situation_1150-45647.jpg" // "Às vezes tento evitar esse momento constrangedor"
        },
        5: { // Pergunta 6: "Quanto tempo por dia você pode dedicar pra você?"
            0: "https://img.freepik.com/free-photo/busy-woman-looking-watch-setting-timer-10-minutes-quick-workout_1150-45648.jpg", // "10 minutos já seria um luxo"
            1: "https://img.freepik.com/free-photo/woman-home-setting-timer-20-minute-workout-living-room_1150-45649.jpg", // "15 a 20 minutos, em casa"
            2: "https://img.freepik.com/free-photo/determined-woman-ready-dedicate-time-herself-feel-beautiful-again_1150-45650.jpg" // "Qualquer tempo, contanto que me faça sentir linda de novo!"
        }
    };
    
    // Perguntas do quiz
    const questions = [
        {
            question: "Já usou legging ou enchimento por baixo da calça jeans pra tentar parecer que tem mais bumbum?",
            options: [
                "Sim, direto! Me sinto melhor assim",
                "Sim, e me senti bem até tirar a roupa",
                "Sim, mas percebi que isso não resolve de verdade",
                "Nunca usei, mas já pensei nisso"
            ]
        },
        {
            question: "Como você gostaria de se sentir ao colocar uma calça jeans justinha?",
            options: [
                "Confiante, com o bumbum durinho e redondinho",
                "Poderosa, pronta pra atrair olhares",
                "Orgulhosa do meu corpo no espelho",
                "Me sentintindo bem comigo mesma, e atraente para meu marido/namorado"
            ]
        },
        {
            question: "O que mais te incomoda no momento?",
            options: [
                "Celulite marcando demais nas roupas",
                "Flacidez, queria ter o bumbum redondinho e durinho",
                "Falta de volume no bumbum",
                "Tudo isso junto 😩"
            ]
        },
        {
            question: "Você já tentou algum treino pra glúteos antes?",
            options: [
                "Sim, mas desisti porque não vi resultado",
                "Sim, mas era cansativo e demorado",
                "Não, nunca soube por onde começar",
                "Já tentei de tudo, mas nada me ajudou de verdade"
            ]
        },
        {
            question: "Já sentiu vergonha em usar biquinis em lugares com muitas pessoas ou na hora de namorar?",
            options: [
                "Sim, mas tento disfarçar com saída ou canga",
                "Sim, me sinto insegura e desconfortável",
                "Já senti insegurança, mesmo com elogios",
                "Às vezes tento evitar esse momento constrangedor"
            ]
        },
        {
            question: "Quanto tempo por dia você pode dedicar pra você?",
            options: [
                "10 minutos já seria um luxo",
                "15 a 20 minutos, em casa",
                "Qualquer tempo, contanto que me faça sentir linda de novo!"
            ]
        }
    ];

    // Variáveis de controle
    let currentQuestionIndex = 0;
    let userAnswers = [];

    // Adicionar elementos decorativos flutuantes
    function addFloatingElements() {
        const vegetablesContainer = document.querySelector('.floating-vegetables');
        
        // Limpar qualquer elemento existente
        vegetablesContainer.innerHTML = '';
        
        // Usar o emoji de pêssego em vez de imagens
        const peachEmoji = 'https://em-content.zobj.net/thumbs/240/apple/354/peach_1f351.png';
        
        // Criar 8 pêssegos aleatórios
        for (let i = 0; i < 8; i++) {
            const peach = document.createElement('img');
            peach.src = peachEmoji;
            peach.classList.add('vegetable'); // mantendo a mesma classe para aproveitar os estilos
            peach.alt = 'Pêssego';
            
            // Posição aleatória
            peach.style.left = `${Math.random() * 90}%`;
            peach.style.top = `${Math.random() * 90}%`;
            
            // Atraso aleatório na animação
            peach.style.animationDelay = `${Math.random() * 5}s`;
            
            vegetablesContainer.appendChild(peach);
        }
    }

    // Iniciar o quiz
    function startQuiz() {
        welcomeScreen.classList.remove('active');
        setTimeout(() => {
            questionScreen.classList.add('active');
            showQuestion(currentQuestionIndex);
        }, 300);
    }

    // Mostrar a pergunta atual
    function showQuestion(index) {
        // Atualizar a barra de progresso
        const progressPercentage = (index / questions.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;

        // Mostrar a pergunta
        questionText.textContent = questions[index].question;
        
        // Limpar opções anteriores
        optionsContainer.innerHTML = '';
        
        // Adicionar opções com imagens
        questions[index].options.forEach((option, i) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            
            // Criar container para a imagem
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('option-image-container');
            
            // Adicionar imagem gerada por IA
            const image = document.createElement('img');
            image.src = optionImages[index][i];
            image.alt = option;
            image.classList.add('option-image');
            imageContainer.appendChild(image);
            
            // Adicionar texto da opção
            const textElement = document.createElement('div');
            textElement.classList.add('option-text');
            textElement.textContent = option;
            
            // Adicionar elementos à opção
            optionElement.appendChild(imageContainer);
            optionElement.appendChild(textElement);
            
            // Adicionar evento de clique
            optionElement.addEventListener('click', () => selectOption(i));
            
            // Adicionar ao container
            optionsContainer.appendChild(optionElement);
        });
    }

    // Selecionar uma opção
    function selectOption(optionIndex) {
        // Armazenar a resposta
        userAnswers[currentQuestionIndex] = optionIndex;
        
        // Destacar a opção selecionada
        const options = document.querySelectorAll('.option');
        options.forEach(option => option.classList.remove('selected'));
        options[optionIndex].classList.add('selected');
        
        // Adicionar efeito de confete na opção selecionada
        addConfettiEffect(options[optionIndex]);
        
        // Avançar para a próxima pergunta após um breve atraso
        setTimeout(() => {
            questionScreen.classList.remove('active');
            
            setTimeout(() => {
                currentQuestionIndex++;
                
                if (currentQuestionIndex < questions.length) {
                    showQuestion(currentQuestionIndex);
                    questionScreen.classList.add('active');
                } else {
                    showLoadingScreen();
                }
            }, 300);
        }, 800);
    }
    
    // Adicionar efeito de confete
    function addConfettiEffect(element) {
        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            // Cor aleatória
            const colors = ['#ff9a9e', '#e83e8c', '#fad0c4', '#ffc2d6'];
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Tamanho aleatório
            const size = 5 + Math.random() * 7;
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            
            // Posição inicial
            const rect = element.getBoundingClientRect();
            confetti.style.left = `${rect.left + rect.width/2}px`;
            confetti.style.top = `${rect.top + rect.height/2}px`;
            
            // Animação
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confetti.style.setProperty('--end-x', `${(Math.random() - 0.5) * 200}px`);
            confetti.style.setProperty('--end-y', `${(Math.random() - 0.5) * 200}px`);
            
            document.body.appendChild(confetti);
            
            // Remover após a animação
            setTimeout(() => {
                confetti.remove();
            }, 1000);
        }
    }

    // Mostrar tela de carregamento
    function showLoadingScreen() {
        loadingScreen.classList.add('active');
        
        // Adicionar efeito de digitação
        const loadingText = document.querySelector('#loading-screen h2');
        const originalText = loadingText.textContent;
        loadingText.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < originalText.length) {
                loadingText.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 50);
        
        // Simular tempo de processamento
        setTimeout(showResults, 3000);
    }

    // Mostrar resultados
    function showResults() {
        loadingScreen.classList.remove('active');
        resultsScreen.classList.add('active');
        
        // Animar as seções de resultado uma após a outra
        const sections = document.querySelectorAll('.result-section');
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.classList.add('animated');
            }, index * 300);
        });
    }

    // Função para adicionar estilos dinâmicos
    function addDynamicStyles() {
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            .fade-in {
                animation: fadeIn 0.8s ease forwards;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .bubble {
                position: absolute;
                border-radius: 50%;
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 154, 158, 0.2));
                box-shadow: 0 0 10px rgba(255, 154, 158, 0.3);
                animation: float 15s infinite ease-in-out;
                z-index: 1;
            }
            
            .confetti {
                position: fixed;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                animation: confetti-fall 1s forwards;
            }
            
            @keyframes confetti-fall {
                0% {
                    transform: translate(0, 0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translate(var(--end-x), var(--end-y)) rotate(360deg);
                    opacity: 0;
                }
            }
            
            .result-section {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.5s ease, transform 0.5s ease;
            }
            
            .result-section.animated {
                opacity: 1;
                transform: translateY(0);
            }
        `;
        document.head.appendChild(styleElement);
    }

    // Adicionar classe para animação de entrada
    setTimeout(() => {
        document.querySelector('.container').classList.add('fade-in');
    }, 300);

    // Event listeners
    startQuizBtn.addEventListener('click', startQuiz);

    // Inicializar elementos decorativos
    addFloatingElements();
    
    // Adicionar estilos dinâmicos
    addDynamicStyles();
});
