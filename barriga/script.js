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

    // Imagens para cada opção de resposta (usando as imagens da pasta 'images')
    const optionImages = {
        0: { // Pergunta 1: "Qual dessas frases representa melhor como você se sente ao colocar uma roupa mais justa?"
            0: "images/1-1.jpg", // "Me sinto desconfortável, como se algo estivesse marcando"
            1: "images/1-2.jpg", // "Gosto, mas sempre tento disfarçar a barriguinha"
            2: "images/1-3.jpg", // "Fico insegura, prefiro roupas mais largas"
            3: "images/1-4.jpg" // "Me sinto bem, mas adoraria ver minha cintura mais fina"
        },
        1: { // Pergunta 2: "+42.357 mulheres descobriram como afinar a cintura e causar admiração no espelho e no olhar do parceiro"
            0: "images/2.jpg", // "EU TAMBÉM QUERO ISSO!"
            1: "images/2-2.jpg", // Imagem adicional disponível
            2: "images/2-3.jpg"  // Imagem adicional disponível
        },
        2: { // Pergunta 3: "Qual dessas frases representa melhor o que você sente quando se olha no espelho?"
            0: "images/2-1.jpg", // "Me sinto frustrada, queria um corpo mais bonito"
            1: "images/2-2.jpg", // "Evito espelhos porque sempre me comparo com meninas das redes sociais"
            2: "images/2-3.jpg", // "Sinto que poderia estar bem melhor, mas não sei por onde começar"
        },
        3: { // Pergunta 4: "Já deixou de usar uma roupa por vergonha da barriga?"
            0: "images/3-1.jpg", // "Sim, tenho vergonha de usar biquini em lugares com muita gente"
            1: "images/3-2.jpg", // "Sim, sempre me incomodo com vestido coladinhos que ficam marcando"
            2: "images/3-3.jpg", // "As vezes isso me deixa insegura, acabo sempre achando que não tenho nenhuma roupa boa"
            3: "images/1-4.jpg" // "Todas as opções anteriores"
        },
        4: { // Pergunta 5: "Como você se sentiria ao ver o olhar de admiração do seu marido/namorado quando você coloca uma roupa mais justa?"
            0: "images/4-1.jpg", // "Poderosa"
            1: "images/4-2.jpg", // "Desejada"
            2: "images/4-3.jpg", // "Confiante"
            3: "images/4-4.jpg" // "Tudo isso junto!"
        },
        5: { // Pergunta 6: "Você já tentou alguma dessas estratégias para perder barriga e nenhuma delas funcionou como eu queria?"
            0: "images/5-1.jpg", // "Dietas restritivas"
            1: "images/5-2.jpg", // "Termogênicos"
            2: "images/5-3.jpg", // "Academia"
            3: "images/5-4.jpg" // "Drenagem linfática"
        },
        6: { // Pergunta 7: "Cansada de fazer mil coisas e não ver resultados reais?"
            0: "images/8-1.jpg", // "QUERO ENTENDER POR QUÊ"
            1: "images/8-2.jpg", // "SIM, ESTOU CANSADA"
            2: "images/8-3.jpg"  // "PRECISO DE UMA SOLUÇÃO"
        },
        7: { // Pergunta 8: "Quanto tempo você está tentando mudar isso?"
            0: "images/6-1.jpg", // "Menos de 1 mês"
            1: "images/6-2.jpg", // "De 1 a 6 meses"
            2: "images/6-3.jpg", // "Mais de 6 meses"
            3: "images/6-4.jpg"  // "Já desisti várias vezes"
        },
        8: { // Pergunta 9: "Imagina você daqui a alguns dias com a barriga visivelmente mais fina, sem precisar fazer academia..."
            0: "images/7-1.jpg", // "Eu PRECISO disso"
            1: "images/7-2.jpg", // "Seria um sonho"
            2: "images/7-3.jpg"  // "Eu topo tentar"
        },
        9: { // Pergunta 10: "Mulheres comuns, com rotinas reais, já estão conseguindo resultados visíveis com essa técnica"
            0: "images/9.jpg" // "PARECE UM SONHO!"
        }
    };
    
    // Perguntas do quiz
    const questions = [
        {
            question: "Qual dessas frases representa melhor como você se sente ao colocar uma roupa mais justa?",
            options: [
                "Me sinto desconfortável, como se algo estivesse marcando",
                "Gosto, mas sempre tento disfarçar a barriguinha",
                "Fico insegura, prefiro roupas mais largas",
                "Me sinto bem, mas adoraria ver minha cintura mais fina"
            ]
        },
        {
            question: "✨ +42.357 mulheres descobriram como afinar a cintura e causar admiração no espelho e no olhar do parceiro",
            options: [
                "EU TAMBÉM QUERO ISSO!"
            ]
        },
        {
            question: "Qual dessas frases representa melhor o que você sente quando se olha no espelho?",
            options: [
                "Me sinto frustrada, queria um corpo mais bonito",
                "Evito espelhos porque sempre me comparo com meninas das redes sociais",
                "Sinto que poderia estar bem melhor, mas não sei por onde começar"
            ]
        },
        {
            question: "Já deixou de usar uma roupa por vergonha da barriga?",
            options: [
                "Sim, tenho vergonha de usar biquini em lugares com muita gente",
                "Sim, sempre me incomodo com vestido coladinhos que ficam marcando",
                "As vezes isso me deixa insegura, acabo sempre achando que não tenho nenhuma roupa boa",
                "Todas as opções anteriores"
            ]
        },
        {
            question: "Como você se sentiria ao ver o olhar de admiração do seu marido/namorado quando você coloca uma roupa mais justa?",
            options: [
                "Poderosa",
                "Desejada",
                "Confiante",
                "Tudo isso junto!"
            ]
        },
        {
            question: "Você já tentou alguma dessas estratégias para perder barriga e nenhuma delas funcionou como eu queria?",
            options: [
                "Dietas restritivas",
                "Termogênicos",
                "Academia",
                "Drenagem linfática"
            ]
        },
        {
            question: "Cansada de fazer mil coisas e não ver resultados reais?",
            options: [
                "QUERO ENTENDER POR QUÊ",
                "SIM, ESTOU CANSADA",
                "PRECISO DE UMA SOLUÇÃO"
            ]
        },
        {
            question: "Quanto tempo você está tentando mudar isso?",
            options: [
                "Menos de 1 mês",
                "De 1 a 6 meses",
                "Mais de 6 meses",
                "Já desisti várias vezes"
            ]
        },
        {
            question: "Imagina você daqui a alguns dias com a barriga visivelmente mais fina, sem precisar fazer academia...",
            options: [
                "Eu PRECISO disso",
                "Seria um sonho",
                "Eu topo tentar"
            ]
        },
        {
            question: "Mulheres comuns, com rotinas reais, já estão conseguindo resultados visíveis com essa técnica",
            options: [
                "PARECE UM SONHO!"
            ]
        }
    ];

    // Variáveis de controle
    let currentQuestionIndex = 0;
    let userAnswers = [];
    let userScore = 0;

    // Adicionar elementos decorativos flutuantes
    function addFloatingElements() {
        const floatingContainer = document.querySelector('.floating-vegetables');
        
        // Emojis de verduras para usar como elementos flutuantes
        const vegetableEmojis = ['🥦', '🥬', '🥒', '🥗', '🍃', '🌿', '🍀', '🥑', '🥝', '🫑'];
        
        for (let i = 0; i < 12; i++) {
            const vegetable = document.createElement('div');
            vegetable.textContent = vegetableEmojis[Math.floor(Math.random() * vegetableEmojis.length)];
            vegetable.classList.add('vegetable');
            vegetable.style.fontSize = '80px'; // Tamanho do emoji
            vegetable.style.opacity = '0.3';   // Opacidade conforme solicitado
            
            // Posicionamento aleatório
            vegetable.style.top = `${Math.random() * 100}%`;
            vegetable.style.left = `${Math.random() * 100}%`;
            
            // Atraso na animação
            vegetable.style.animationDelay = `${Math.random() * 5}s`;
            
            floatingContainer.appendChild(vegetable);
        }
    }

    // Iniciar o quiz
    function startQuiz() {
        welcomeScreen.classList.remove('active');
        questionScreen.classList.add('active');
        showQuestion(currentQuestionIndex);
        
        // Reproduzir som de início
        if (window.playSound) {
            window.playSound('start');
        }
    }

    // Mostrar a pergunta atual
    function showQuestion(index) {
        questionText.textContent = questions[index].question;
        optionsContainer.innerHTML = '';
        
        // Atualizar barra de progresso
        const progressPercentage = (index / questions.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        
        // Verificar se há apenas uma opção de resposta
        const singleOption = questions[index].options.length === 1;
        
        // Adicionar classe especial ao container quando há apenas uma opção
        if (singleOption) {
            optionsContainer.classList.add('single-option');
        } else {
            optionsContainer.classList.remove('single-option');
        }
        
        // Criar opções de resposta
        questions[index].options.forEach((option, optionIndex) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            
            // Adicionar classe especial quando há apenas uma opção
            if (singleOption) {
                optionElement.classList.add('single');
            }
            
            // Estrutura da opção
            let optionContent = '';
            
            // Verificar se temos uma imagem para esta opção
            if (optionImages[index] && optionImages[index][optionIndex]) {
                optionContent += `
                    <div class="option-image-container">
                        <img src="${optionImages[index][optionIndex]}" alt="${option}" class="option-image">
                    </div>
                `;
            }
            
            optionContent += `<div class="option-text">${option}</div>`;
            optionElement.innerHTML = optionContent;
            
            // Adicionar evento de clique
            optionElement.addEventListener('click', () => selectOption(optionIndex));
            
            optionsContainer.appendChild(optionElement);
        });
    }

    // Selecionar uma opção
    function selectOption(optionIndex) {
        // Armazenar resposta
        userAnswers.push(optionIndex);
        
        // Adicionar pontos
        userScore += 10;
        updateScoreDisplay();
        
        // Adicionar efeito de seleção
        const options = document.querySelectorAll('.option');
        options.forEach((option, index) => {
            if (index === optionIndex) {
                option.classList.add('selected');
                addConfettiEffect(option);
            }
        });
        
        // Reproduzir som de moeda
        if (window.playSound) {
            window.playSound('coin');
        }
        
        // Avançar para a próxima pergunta após um breve atraso
        setTimeout(() => {
            currentQuestionIndex++;
            
            if (currentQuestionIndex < questions.length) {
                showQuestion(currentQuestionIndex);
            } else {
                showLoadingScreen();
            }
        }, 800);
    }

    // Adicionar efeito de confete
    function addConfettiEffect(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const colors = ['#ffccd5', '#ff9eb6', '#d63384', '#ff5bae', '#ff80ab'];
        
        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            // Tamanho aleatório
            const size = Math.random() * 8 + 4;
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            
            // Cor aleatória
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Posição inicial
            confetti.style.left = `${centerX}px`;
            confetti.style.top = `${centerY}px`;
            
            // Destino final
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 100 + 50;
            const endX = Math.cos(angle) * distance;
            const endY = Math.sin(angle) * distance;
            
            confetti.style.setProperty('--end-x', `${endX}px`);
            confetti.style.setProperty('--end-y', `${endY}px`);
            
            document.body.appendChild(confetti);
            
            // Remover após a animação
            setTimeout(() => {
                confetti.remove();
            }, 1000);
        }
    }

    // Mostrar tela de carregamento
    function showLoadingScreen() {
        questionScreen.classList.remove('active');
        loadingScreen.classList.add('active');
        
        // Simulação de carregamento
        setTimeout(() => {
            loadingScreen.classList.remove('active');
            showResults();
        }, 3000);
    }

    // Mostrar resultados
    function showResults() {
        resultsScreen.classList.add('active');
        
        // Atualizar pontuação final
        document.getElementById('final-score').textContent = userScore;
        
        // Animar seções de resultado
        setTimeout(() => {
            const resultSections = document.querySelectorAll('.result-section');
            resultSections.forEach((section, index) => {
                setTimeout(() => {
                    section.classList.add('animated');
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }, index * 300);
            });
        }, 500);
    }

    // Função para atualizar o display de pontuação
    function updateScoreDisplay() {
        const scoreDisplay = document.getElementById('score-display');
        
        // Animação de atualização
        scoreDisplay.classList.add('score-updated');
        setTimeout(() => {
            scoreDisplay.classList.remove('score-updated');
        }, 500);
        
        // Atualizar valor
        scoreDisplay.textContent = userScore;
    }

    // Adicionar estilos dinâmicos
    function addDynamicStyles() {
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            .container.fade-in {
                opacity: 1;
                transform: translateY(0);
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .bubble {
                position: absolute;
                border-radius: 50%;
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(100, 180, 100, 0.2));
                box-shadow: 0 0 10px rgba(100, 180, 100, 0.3);
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
            
            .score-container {
                position: absolute;
                top: 10px;
                right: 20px;
                background-color: rgba(255, 255, 255, 0.9);
                border-radius: 20px;
                padding: 5px 15px;
                font-weight: bold;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                z-index: 10;
                display: flex;
                align-items: center;
                gap: 5px;
            }
            
            .score-container i {
                color: #4caf50;
            }
            
            .final-score-container {
                position: relative;
                margin: 0 auto 20px;
                background-color: rgba(255, 255, 255, 0.9);
                border-radius: 20px;
                padding: 10px 20px;
                font-weight: bold;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                z-index: 10;
                display: inline-flex;
                align-items: center;
                gap: 5px;
                font-size: 1.2em;
                color: #333;
                animation: fade-in-bounce 1s ease;
            }
            
            .final-score-container i {
                color: gold;
                font-size: 1.5em;
            }
            
            #final-score {
                font-size: 1.3em;
                color: #4caf50;
                font-weight: 700;
            }
            
            @keyframes fade-in-bounce {
                0% { opacity: 0; transform: scale(0.5); }
                70% { opacity: 1; transform: scale(1.1); }
                100% { opacity: 1; transform: scale(1); }
            }
            
            .score-updated {
                animation: score-pulse 0.5s ease;
            }
            
            @keyframes score-pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.3); color: #4caf50; }
                100% { transform: scale(1); }
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
