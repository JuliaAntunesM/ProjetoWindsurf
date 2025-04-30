// Quiz functionality for NatáliaFit - Treinos na Cadeira

// Variáveis para armazenar as respostas do usuário
let userAnswers = {
    question1: null,
    question3: [],
    question4: null,
    question5: null,
    question6: null,
    question7: null,
    userName: ''
};

// Função para navegar entre as páginas
function nextPage(screenId) {
    // Esconde todas as telas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Mostra a tela selecionada
    document.getElementById(screenId).classList.add('active');
    
    // Adiciona animação de entrada para os elementos
    animateElements(screenId);
    
    // Rola para o topo da página
    window.scrollTo(0, 0);
}

// Função para animar os elementos da página
function animateElements(screenId) {
    const screen = document.getElementById(screenId);
    const animatedElements = screen.querySelectorAll('.animate__animated');
    
    // Remove as classes de animação para reiniciar
    animatedElements.forEach(element => {
        const animationClass = Array.from(element.classList).find(cls => cls.startsWith('animate__') && cls !== 'animate__animated' && !cls.startsWith('animate__delay'));
        if (animationClass) {
            element.classList.remove(animationClass);
            void element.offsetWidth; // Força um reflow para reiniciar a animação
            element.classList.add(animationClass);
        }
    });
    
    // Anima as opções sequencialmente
    animateOptionsSequentially(screen);
}

// Função para animar as opções sequencialmente (efeito cascata)
function animateOptionsSequentially(screen) {
    const options = screen.querySelectorAll('.quiz-options .option');
    if (options.length === 0) return;
    
    // Esconde todas as opções inicialmente
    options.forEach(option => {
        option.style.opacity = '0';
        option.style.transform = 'translateY(20px)';
    });
    
    // Mostra cada opção sequencialmente
    options.forEach((option, index) => {
        setTimeout(() => {
            option.style.opacity = '1';
            option.style.transform = 'translateY(0)';
            option.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }, 200 * index); // 200ms de atraso entre cada opção
    });
}

// Função para selecionar/desselecionar opções do quiz (opção única)
function selectOption(option) {
    const screenId = option.closest('.screen').id;
    const questionNumber = screenId.replace('question-', '');
    
    // Remove a classe 'selected' de todas as opções na mesma tela
    option.closest('.quiz-options').querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Adiciona a classe 'selected' apenas à opção clicada
    option.classList.add('selected');
    
    // Atualiza a resposta do usuário
    const optionText = option.querySelector('.option-text').textContent.trim();
    userAnswers['question' + questionNumber] = optionText;
    
    console.log('Respostas atuais:', userAnswers);
    
    // Avança automaticamente para a próxima página após um curto delay
    setTimeout(() => {
        // Obtém o número atual da questão e calcula o próximo
        const currentQuestionNumber = parseInt(questionNumber);
        const nextQuestionNumber = currentQuestionNumber + 1;
        
        // Se for a última questão, mostra a tela de carregamento
        if (nextQuestionNumber > 8) {
            showLoading();
        } else {
            // Caso contrário, avança para a próxima questão
            nextPage('question-' + nextQuestionNumber);
        }
    }, 500); // Delay de 500ms para dar tempo do usuário ver a seleção
}

// Função para selecionar/desselecionar opções de checkbox (múltipla escolha)
function toggleCheckbox(option) {
    const screenId = option.closest('.screen').id;
    const questionNumber = screenId.replace('question-', '');
    
    // Alterna a classe 'selected' na opção clicada
    option.classList.toggle('selected');
    
    // Atualiza o estado visual do checkbox
    const checkbox = option.querySelector('.checkbox');
    if (option.classList.contains('selected')) {
        checkbox.classList.add('checked');
    } else {
        checkbox.classList.remove('checked');
    }
    
    // Atualiza a resposta do usuário
    const optionText = option.querySelector('.option-text').textContent.trim();
    if (option.classList.contains('selected')) {
        if (!userAnswers['question' + questionNumber].includes(optionText)) {
            userAnswers['question' + questionNumber].push(optionText);
        }
    } else {
        userAnswers['question' + questionNumber] = userAnswers['question' + questionNumber].filter(text => text !== optionText);
    }
    
    console.log('Respostas atuais:', userAnswers);
}

// Função para salvar o nome do usuário
function saveName() {
    const nameInput = document.getElementById('user-name');
    if (nameInput && nameInput.value.trim() !== '') {
        userAnswers.userName = nameInput.value.trim();
        // Atualiza o nome na tela de carregamento
        const nameDisplay = document.getElementById('user-name-display');
        if (nameDisplay) {
            nameDisplay.textContent = userAnswers.userName;
        }
        
        // Avança automaticamente para a tela de carregamento
        showLoading();
    }
}

// Função para mostrar a tela de carregamento e depois redirecionar
function showLoading() {
    // Mostra a tela de carregamento
    nextPage('loading-screen');
    
    // Após 4 segundos, redireciona para a página de resultados (vendas)
    setTimeout(() => {
        nextPage('results-screen');
    }, 4000);
}

// Função para carregar dados do quiz do arquivo JSON
async function loadQuizData() {
    try {
        const response = await fetch('quiz-cadeira-data.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao carregar dados do quiz:', error);
        return null;
    }
}

// Inicializa o quiz quando a página carrega
document.addEventListener('DOMContentLoaded', async () => {
    // Carrega os dados do quiz
    const quizData = await loadQuizData();
    if (quizData) {
        console.log('Dados do quiz carregados com sucesso:', quizData);
    }
    
    // Adiciona efeitos de hover para as imagens
    document.querySelectorAll('.rounded-image').forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.02)';
        });
        
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });
    
    // Adiciona botões "CONTINUAR" nas telas de múltipla escolha (tela 3)
    const multipleChoiceScreens = ['question-3'];
    
    multipleChoiceScreens.forEach(screenId => {
        const screen = document.getElementById(screenId);
        if (screen) {
            const content = screen.querySelector('.content');
            if (content) {
                // Verifica se já existe um botão
                const existingButton = content.querySelector('.btn.primary-btn');
                if (!existingButton) {
                    // Cria o botão CONTINUAR
                    const button = document.createElement('button');
                    button.className = 'btn primary-btn pulse';
                    button.textContent = 'CONTINUAR';
                    button.style.opacity = '0';
                    button.style.transform = 'translateY(20px)';
                    
                    // Configura o evento de clique para avançar para a próxima tela
                    const nextScreenNumber = parseInt(screenId.replace('question-', '')) + 1;
                    button.onclick = () => nextPage('question-' + nextScreenNumber);
                    
                    // Adiciona o botão à tela
                    content.appendChild(button);
                    
                    // Mostra o botão após um atraso para que apareça depois das opções
                    setTimeout(() => {
                        button.style.opacity = '1';
                        button.style.transform = 'translateY(0)';
                        button.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    }, 1200); // Atraso maior para aparecer depois das opções
                }
            }
        }
    });

    // Adiciona elementos decorativos de cadeira no fundo
    addChairDecorations();
});

// Função para adicionar decorações de cadeira no fundo
function addChairDecorations() {
    const quizContainer = document.querySelector('.quiz-container');
    
    // Cria 5 cadeiras decorativas
    for (let i = 0; i < 5; i++) {
        const chair = document.createElement('div');
        chair.className = 'chair-decoration';
        
        // Posiciona aleatoriamente
        chair.style.top = Math.random() * 100 + '%';
        chair.style.left = Math.random() * 100 + '%';
        
        // Tamanho aleatório (dentro de limites)
        const size = 30 + Math.random() * 20;
        chair.style.width = size + 'px';
        chair.style.height = size + 'px';
        
        // Rotação aleatória
        const rotation = Math.random() * 360;
        chair.style.transform = `rotate(${rotation}deg)`;
        
        // Adiciona ao container
        quizContainer.appendChild(chair);
        
        // Animação flutuante
        animateChair(chair);
    }
}

// Função para animar as cadeiras decorativas
function animateChair(chair) {
    // Valores iniciais
    let posX = parseFloat(chair.style.left);
    let posY = parseFloat(chair.style.top);
    let dirX = Math.random() > 0.5 ? 1 : -1;
    let dirY = Math.random() > 0.5 ? 1 : -1;
    
    // Função de animação
    function moveChair() {
        // Altera posição
        posX += dirX * 0.1;
        posY += dirY * 0.1;
        
        // Verifica limites e inverte direção se necessário
        if (posX > 95 || posX < 5) dirX *= -1;
        if (posY > 95 || posY < 5) dirY *= -1;
        
        // Aplica nova posição
        chair.style.left = posX + '%';
        chair.style.top = posY + '%';
        
        // Continua animação
        requestAnimationFrame(moveChair);
    }
    
    // Inicia animação
    moveChair();
}
