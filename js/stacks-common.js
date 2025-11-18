/**
 * Script comum para todas as páginas do projeto
 * Gerencia funcionalidades compartilhadas como toggle de tema
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada!');

    const themeToggleButton = document.getElementById('theme-toggle-button');
    const htmlElement = document.documentElement;

    // Função para alternar o tema
    const toggleTheme = () => {
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-bs-theme', newTheme);
        // Salva a preferência no localStorage
        localStorage.setItem('theme', newTheme);
    };

    // Adiciona o evento de clique ao botão (se existir)
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }

    // Verifica se há um tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-bs-theme', savedTheme);
    }
});

