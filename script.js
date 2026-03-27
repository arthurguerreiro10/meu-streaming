// ===== TOGGLE THEME SCRIPT =====
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se há tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateButton(savedTheme);
}

// Função para alternar tema
themeToggle.addEventListener('click', () => {
    const currentTheme = body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
    const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';

    body.classList.remove(currentTheme);
    body.classList.add(newTheme);

    localStorage.setItem('theme', newTheme);
    updateButton(newTheme);
});

// Função para atualizar o ícone do botão
function updateButton(theme) {
    themeToggle.textContent = theme === 'light-mode' ? '☀️' : '🌙';
}

// ===== ARMAZENAR PERFIL ATIVO =====
const profileLinks = document.querySelectorAll('.perfil figure');

profileLinks.forEach(profile => {
    profile.addEventListener('click', () => {
        const profileName = profile.querySelector('figcaption').textContent;
        const profileImage = profile.querySelector('img').src;
        
        localStorage.setItem('activeProfile', JSON.stringify({
            name: profileName,
            image: profileImage
        }));
    });
});