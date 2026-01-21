const toggleBtn = document.getElementById('dark-mode-toggle');
const html = document.documentElement;

toggleBtn.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';

    if (isDark) {
        html.removeAttribute('data-theme');
    } else {
        html.setAttribute('data-theme', 'dark');
    }
});

const modal = document.getElementById("modal-img");
const modalImg = document.getElementById("modal-img-content");
const close = document.querySelector(".modal-close");

document.querySelectorAll(".slide img, .galeria-grid img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("modal-img");
    const modalImg = document.getElementById("modal-img-content");
    const closeBtn = document.querySelector(".modal-close");
    const prevBtn = document.querySelector(".modal-prev");
    const nextBtn = document.querySelector(".modal-next");

    const images = document.querySelectorAll(".slide img");
    let currentIndex = 0;

    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = index;
            modalImg.src = img.src;
            modal.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        modalImg.src = images[currentIndex].src;
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImg.src = images[currentIndex].src;
    });

});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

document.addEventListener("keydown", (e) =>{
    if (modal.style.display !== "flex") return;
    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "Escape") closeBtn.click();
});

const btnMobile = document.getElementById('btn-mobile');
const navMenu = document.querySelector('.nav-menu');

btnMobile.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
