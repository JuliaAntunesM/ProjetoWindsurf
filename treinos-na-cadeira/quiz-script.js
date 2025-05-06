// Funções para o quiz "Treinos na Cadeira"

// Função para navegar para a próxima página
function nextPage(pageId) {
    // Esconde a tela atual
    document.querySelector('.screen.active').classList.remove('active');
    
    // Mostra a próxima tela
    document.getElementById(pageId).classList.add('active');
    
    // Rola para o topo
    window.scrollTo(0, 0);
}

// Função para selecionar uma opção (opções de escolha única)
function selectOption(option) {
    // Remove a classe 'selected' de todas as opções no mesmo grupo
    const parentOptions = option.parentElement;
    const allOptions = parentOptions.querySelectorAll('.option');
    
    allOptions.forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Adiciona a classe 'selected' à opção clicada
    option.classList.add('selected');
    
    // Avança para a próxima tela após um breve delay
    setTimeout(() => {
        const currentScreen = option.closest('.screen');
        const currentId = currentScreen.id;
        const nextId = getNextScreenId(currentId);
        nextPage(nextId);
    }, 500);
}

// Função para alternar checkboxes (opções de múltipla escolha)
function toggleCheckbox(option) {
    // Alterna a classe 'selected' na opção
    option.classList.toggle('selected');
    
    // Alterna a marca de seleção no checkbox
    const checkbox = option.querySelector('.checkbox');
    if (option.classList.contains('selected')) {
        checkbox.classList.add('checked');
    } else {
        checkbox.classList.remove('checked');
    }
    
    // Verifica se pelo menos uma opção foi selecionada
    const parentOptions = option.parentElement;
    const selectedOptions = parentOptions.querySelectorAll('.option.selected');
    
    // Habilita o botão "Continuar" se houver pelo menos uma opção selecionada
    const continueButton = parentOptions.parentElement.querySelector('.continue-btn');
    if (continueButton) {
        if (selectedOptions.length > 0) {
            continueButton.classList.remove('disabled');
        } else {
            continueButton.classList.add('disabled');
        }
    } else {
        // Se não houver botão "Continuar", avança automaticamente após selecionar pelo menos uma opção
        if (selectedOptions.length === 1) {
            setTimeout(() => {
                const currentScreen = option.closest('.screen');
                const currentId = currentScreen.id;
                const nextId = getNextScreenId(currentId);
                nextPage(nextId);
            }, 1000);
        }
    }
}

// Função para obter o ID da próxima tela
function getNextScreenId(currentId) {
    const currentNumber = parseInt(currentId.split('-')[1]);
    return `question-${currentNumber + 1}`;
}

// Função para salvar o nome do usuário
function saveName() {
    const nameInput = document.getElementById('user-name');
    const name = nameInput.value.trim();
    
    if (name) {
        // Salva o nome em localStorage para uso posterior
        localStorage.setItem('userName', name);
        
        // Atualiza todos os elementos que exibem o nome do usuário
        const nameDisplayElements = document.querySelectorAll('#user-name-display');
        nameDisplayElements.forEach(element => {
            element.textContent = name;
        });
        
        // Avança para a próxima tela
        nextPage('loading-screen');
    } else {
        // Destaca o campo de entrada se estiver vazio
        nameInput.classList.add('error');
        nameInput.placeholder = "Por favor, digite seu nome";
        
        // Remove a classe de erro após um breve delay
        setTimeout(() => {
            nameInput.classList.remove('error');
        }, 1500);
    }
}

// Função para mostrar a tela de carregamento
function showLoading() {
    // Mostra a tela de carregamento
    nextPage('loading-screen');
    
    // Simula o tempo de carregamento e avança para a tela de resultados após 5 segundos
    setTimeout(() => {
        nextPage('results-screen');
    }, 5000);
}

// Inicialização quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Recupera o nome do usuário do localStorage, se existir
    const savedName = localStorage.getItem('userName');
    if (savedName) {
        const nameDisplayElements = document.querySelectorAll('#user-name-display');
        nameDisplayElements.forEach(element => {
            element.textContent = savedName;
        });
    }
    
    // Adiciona listeners para teclas de navegação
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            const activeScreen = document.querySelector('.screen.active');
            const selectedOption = activeScreen.querySelector('.option.selected');
            
            if (selectedOption) {
                const currentId = activeScreen.id;
                const nextId = getNextScreenId(currentId);
                nextPage(nextId);
            }
        }
    });
});
