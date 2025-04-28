// Quiz functionality for NatáliaFit

// Function to show a specific screen
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show the selected screen
    document.getElementById(screenId).classList.add('active');
    
    // If showing results screen, simulate loading
    if (screenId === 'results-screen') {
        document.getElementById('results').style.display = 'none';
        document.getElementById('loading').style.display = 'block';
        
        // After 3 seconds, show results
        setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('results').style.display = 'block';
        }, 3000);
    }
}

// Function to select/deselect quiz options
function selectOption(option) {
    // Toggle selected class
    option.classList.toggle('selected');
}

// Load quiz data from JSON file
async function loadQuizData() {
    try {
        const response = await fetch('quiz-data.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading quiz data:', error);
        return null;
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', async () => {
    // We're using a simplified version for now, but this could be expanded
    // to dynamically generate the quiz from the JSON data
    
    // For demonstration purposes, we'll just log the data if it loads successfully
    const quizData = await loadQuizData();
    if (quizData) {
        console.log('Quiz data loaded successfully:', quizData);
    }
});
