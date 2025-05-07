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

    // Adicionar imagens de verduras flutuantes
    function addFloatingVegetables() {
        const vegetablesContainer = document.querySelector('.floating-vegetables');
        const vegetables = [
            'https://cdn-icons-png.flaticon.com/512/2909/2909787.png', // brócolis
            'https://cdn-icons-png.flaticon.com/512/2909/2909841.png', // espinafre
            'https://cdn-icons-png.flaticon.com/512/2909/2909838.png', // alface
            'https://cdn-icons-png.flaticon.com/512/2909/2909830.png', // cenoura
            'https://cdn-icons-png.flaticon.com/512/2909/2909812.png'  // pepino
        ];

        // Criar 10 verduras aleatórias
        for (let i = 0; i < 10; i++) {
            const vegetable = document.createElement('img');
            vegetable.src = vegetables[Math.floor(Math.random() * vegetables.length)];
            vegetable.classList.add('vegetable');
            
            // Posição aleatória
            vegetable.style.left = `${Math.random() * 100}%`;
            vegetable.style.top = `${Math.random() * 100}%`;
            
            // Atraso aleatório na animação
            vegetable.style.animationDelay = `${Math.random() * 5}s`;
            
            vegetablesContainer.appendChild(vegetable);
        }
    }

    // Iniciar o quiz
    function startQuiz() {
        welcomeScreen.classList.remove('active');
        questionScreen.classList.add('active');
        showQuestion(currentQuestionIndex);
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
        
        // Adicionar opções
        questions[index].options.forEach((option, i) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => selectOption(i));
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
        
        // Avançar para a próxima pergunta após um breve atraso
        setTimeout(() => {
            currentQuestionIndex++;
            
            if (currentQuestionIndex < questions.length) {
                showQuestion(currentQuestionIndex);
            } else {
                showLoadingScreen();
            }
        }, 500);
    }

    // Mostrar tela de carregamento
    function showLoadingScreen() {
        questionScreen.classList.remove('active');
        loadingScreen.classList.add('active');
        
        // Simular tempo de processamento
        setTimeout(showResults, 3000);
    }

    // Mostrar resultados
    function showResults() {
        loadingScreen.classList.remove('active');
        resultsScreen.classList.add('active');
    }

    // Event listeners
    startQuizBtn.addEventListener('click', startQuiz);

    // Inicializar verduras flutuantes
    addFloatingVegetables();
});
