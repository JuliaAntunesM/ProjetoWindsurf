// Quiz functionality for NatáliaFit

// Variáveis para armazenar as respostas do usuário
let userAnswers = {
    insecurities: [],
    dream: null
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

// Função para selecionar/desselecionar opções do quiz
function selectOption(option) {
    const screenId = option.closest('.screen').id;
    
    // Se estiver na tela de inseguranças, permite selecionar múltiplas opções
    if (screenId === 'insecurity-screen') {
        option.classList.toggle('selected');
        
        // Atualiza as respostas do usuário
        const optionText = option.querySelector('.option-text').textContent.trim();
        if (option.classList.contains('selected')) {
            if (!userAnswers.insecurities.includes(optionText)) {
                userAnswers.insecurities.push(optionText);
            }
        } else {
            userAnswers.insecurities = userAnswers.insecurities.filter(text => text !== optionText);
        }
    } 
    // Se estiver na tela de sonhos, permite selecionar apenas uma opção
    else if (screenId === 'dream-screen') {
        // Remove a classe 'selected' de todas as opções
        option.closest('.quiz-options').querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Adiciona a classe 'selected' apenas à opção clicada
        option.classList.add('selected');
        
        // Atualiza a resposta do usuário
        userAnswers.dream = option.querySelector('.option-text').textContent.trim();
    }
    
    console.log('Respostas atuais:', userAnswers);
}

// Função para mostrar a tela de carregamento e depois redirecionar
function showLoading() {
    // Mostra a tela de carregamento
    nextPage('loading-screen');
    
    // Após 3 segundos, poderia redirecionar para uma página de resultados ou vendas
    setTimeout(() => {
        // Por enquanto, vamos apenas exibir um alerta
        alert('Seu plano personalizado está pronto! Baseado nas suas respostas, você pode alcançar seu corpo dos sonhos com apenas 15 minutos por dia!');
        
        // Aqui você poderia redirecionar para uma página de resultados ou vendas
        // window.location.href = 'resultados.html';
    }, 3000);
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
