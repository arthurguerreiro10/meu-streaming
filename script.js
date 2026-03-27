// ===== INTRO + SOM =====
const clickScreen = document.getElementById('click-screen');
const introScreen = document.getElementById('intro-screen');

// Esconde o site até a intro terminar
document.querySelector('header').style.visibility = 'hidden';
document.querySelector('main').style.visibility = 'hidden';

clickScreen.addEventListener('click', () => {
    // Toca o som
    const audio = new Audio('assets/netflix-sound.mp3');
    audio.volume = 1;
    audio.play();

    // Esconde tela de clique
    clickScreen.style.display = 'none';

    // Mostra intro
    introScreen.style.display = 'flex';

    // Após 4s esconde intro e mostra o site
    setTimeout(() => {
        introScreen.classList.add('hidden');
        setTimeout(() => {
            introScreen.style.display = 'none';
            document.querySelector('header').style.visibility = 'visible';
            document.querySelector('main').style.visibility = 'visible';
        }, 1000);
    }, 4000);
});

// ===== TOGGLE THEME =====
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme') || 'dark-mode';
if (savedTheme === 'light-mode') {
    body.classList.add('light-mode');
}
updateButton(savedTheme);

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const newTheme = body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
    localStorage.setItem('theme', newTheme);
    updateButton(newTheme);
});

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