// interacciones de la galeria
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');
const toggleThemeBtn = document.getElementById('toggle-theme');
const backgroundMusic = document.getElementById('background-music');

// imagen click modal
gallery.addEventListener('click', (e) => {
    if (e.target.classList.contains('gallery-item')) {
        modal.style.display = 'flex';
        modalImg.src = e.target.src;
    }
});

// clase modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Clase Modal cuando se clickea afuera
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Cambiar Tema
toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Tema prederteminado
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

//  Carrusel automatico
function carousel() {
    const images = document.querySelectorAll('.gallery-item');
    images.forEach((img, i) => {
        img.style.display = i === 0 ? 'block' : 'none';
    });

    let currentIndex = 0;
    setInterval(() => {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = 'block';
    }, 4000);
}
carousel();