/* ==========================================
   SCRIPT.JS - SITE IMOBILIÁRIO
   Código limpo, modular e bem comentado
========================================== */

/* ==========================================
   1. REVEAL ANIMATION (Intersection Observer)
========================================== */

(function () {
  const reveals = document.querySelectorAll(".reveal");

  // Configuração do observer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // melhora performance
        }
      });
    },
    {
      threshold: 0.15, // ativa quando 15% do elemento aparece
    }
  );

  reveals.forEach((el) => observer.observe(el));
})();

// ==============================
// CARROSSEL DE IMÓVEIS
// ==============================

// Seleciona elementos
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

// Função para mostrar slide
function showSlide(index) {
    // Remove active de todos
    slides.forEach(slide => slide.classList.remove('active'));

    // Adiciona no atual
    slides[index].classList.add('active');
}

// Próximo
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentIndex++;

        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }

        showSlide(currentIndex);
    });
}

// Anterior
if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }

        showSlide(currentIndex);
    });
}

// Inicialização segura
if (slides.length > 0) {
    showSlide(currentIndex);
}
/* ==========================================
   3. BASE PARA FUTURA INTEGRAÇÃO DINÂMICA
   (Opcional - preparado para expansão)
========================================== */

/*
Exemplo de estrutura futura para carregar imóveis via JS: */

const imoveis = [
  {
    titulo: "Casa moderna",
    preco: "R$ 850.000",
    imagem: "/images/imovel1.jpg",
    quartos: 3,
    banheiros: 2,
    vagas: 2
  }
];

function renderImoveis(lista) {
  const grid = document.querySelector(".grid");

  if (!grid) return;

  grid.innerHTML = "";

  lista.forEach(imovel => {
    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${imovel.imagem}" alt="${imovel.titulo}">
      <h3>${imovel.preco}</h3>
      <p>${imovel.titulo}</p>
      <ul>
        <li>${imovel.quartos} Quartos</li>
        <li>${imovel.banheiros} Banheiros</li>
        <li>${imovel.vagas} Vagas</li>
      </ul>
      <a href="imovel.html" class="btn">Ver imóvel</a>
    `;

    grid.appendChild(card);
  });
}

