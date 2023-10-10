
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const closeMenuButton = document.querySelector(".close-menu-button");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    closeMenuButton.addEventListener("click", function () {
        menu.classList.remove("active");
    });






const carousel = document.querySelector('.carousel');
const carouselContent = document.querySelector('.carousel-content');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const phrases = [
    { title: 'Bienvenido a Pollería Marcus', text: 'Ofreciendo lo holaaaas mejores pollos frescos y deliciosos en la ciudad.', imageUrl: 'https://imgmedia.buenazo.pe/1200x660/buenazo/original/2023/07/14/64ac3e8c599470217672a906.jpg' },
    { title: 'Calidad y Sabor Inigualables', text: 'Nuestros productos frescos y nuestro toque especial hacen la diferencia.', imageUrl: 'https://laturu.com/wp-content/uploads/2021/06/Tca-Pub-A-scaled.jpg' },
    { title: 'Servicio de Delivery Rápido', text: 'Disfruta de nuestros platillos en la comodidad de tu hogar.', imageUrl: 'https://static.mercadonegro.pe/wp-content/uploads/2022/07/15144726/pollo-a-la-brasa.png' }
];

let currentIndex = 0;
const intervalTime = 5000; // Cambia cada 5 segundos (5000 ms)

// Función para actualizar el contenido del carrusel
function updateCarouselContent() {
    const phrase = phrases[currentIndex];
    carousel.style.backgroundImage = `url('${phrase.imageUrl}')`;
    carouselContent.querySelector('h1').textContent = phrase.title;
    carouselContent.querySelector('p').textContent = phrase.text;
}

// Función para mostrar el slide anterior
function showPreviousSlide() {
    currentIndex = (currentIndex - 1 + phrases.length) % phrases.length;
    updateCarouselContent();
}

// Función para mostrar el siguiente slide
function showNextSlide() {
    currentIndex = (currentIndex + 1) % phrases.length;
    updateCarouselContent();
}

// Inicializa el carrusel
updateCarouselContent();

// Configura el carrusel para que se mueva automáticamente
setInterval(showNextSlide, intervalTime);

// Agrega listeners a los botones de "Anterior" y "Siguiente"
prevBtn.addEventListener('click', showPreviousSlide);
nextBtn.addEventListener('click', showNextSlide);


});