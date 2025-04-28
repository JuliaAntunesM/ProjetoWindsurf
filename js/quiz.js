// Quiz functionality for NatáliaFit

// Variáveis para armazenar as respostas do usuário
let userAnswers = {
    question1: null,
    question3: [],
    question4: null,
    question5: null,
    question6: null,
    question7: null,
    question8: null,
    question10: [],
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
}

// Função para selecionar/desselecionar opções do quiz (opção única)
function selectOption(option) {
    const screenId = option.closest('.screen').id;
    const questionNumber = screenId.split('-')[0];
    
    // Remove a classe 'selected' de todas as opções na mesma tela
    option.closest('.quiz-options').querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Adiciona a classe 'selected' apenas à opção clicada
    option.classList.add('selected');
    
    // Atualiza a resposta do usuário
    const optionText = option.querySelector('.option-text').textContent.trim();
    userAnswers[questionNumber] = optionText;
    
    console.log('Respostas atuais:', userAnswers);
}

// Função para selecionar/desselecionar opções de checkbox (múltipla escolha)
function toggleCheckbox(option) {
    const screenId = option.closest('.screen').id;
    const questionNumber = screenId.split('-')[0];
    
    // Alterna a classe 'selected' na opção clicada
    option.classList.toggle('selected');
    
    // Atualiza as respostas do usuário
    const optionText = option.querySelector('.option-text').textContent.trim();
    
    if (!userAnswers[questionNumber]) {
        userAnswers[questionNumber] = [];
    }
    
    if (option.classList.contains('selected')) {
        if (!userAnswers[questionNumber].includes(optionText)) {
            userAnswers[questionNumber].push(optionText);
        }
    } else {
        userAnswers[questionNumber] = userAnswers[questionNumber].filter(text => text !== optionText);
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
        const response = await fetch('quiz-data.json');
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
});
