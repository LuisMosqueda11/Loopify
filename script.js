// Carousel Logic
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

// Scroll Text Animation
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.scroll-text');
    
    if (!textElement) {
      console.error("El elemento '.scroll-text' no se encontró en el DOM.");
      return;
    }
  
    const text = textElement.dataset.text;
    const textArray = text.split('');
  
    textElement.innerHTML = textArray
      .map(letter => `<span>${letter === ' ' ? '&nbsp;' : letter}</span>`)
      .join('');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("El elemento es visible, comenzando la animación...");
          const letters = textElement.querySelectorAll('span');
          letters.forEach((span, index) => {
            setTimeout(() => {
              span.classList.add('visible');
            }, index * 50);
          });
          observer.unobserve(entry.target);
        } else {
          console.log("El elemento aún no es visible.");
        }
      });
    }, {
      threshold: 0.5,
    });
  
    observer.observe(textElement);
  });

// Board section
function toggleContent(button) {
  const content = button.parentElement.nextElementSibling;
  const arrow = button.querySelector('.arrow');

  if (content.style.display === 'block') {
      content.style.display = 'none';
      arrow.textContent = '▶';
  } else {
      content.style.display = 'block';
      arrow.textContent = '▼';
  }
}

// Testimonial section
document.addEventListener('DOMContentLoaded', () => {
  const testimonials = document.querySelectorAll('.testimonial');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;

  function updateCarousel(index) {
      testimonials.forEach((testimonial, i) => {
          testimonial.classList.remove('active');
          if (i === index) testimonial.classList.add('active');
      });
  }

  prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
      updateCarousel(currentIndex);
  });

  nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
      updateCarousel(currentIndex);
  });

  setInterval(() => {
      currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
      updateCarousel(currentIndex);
  }, 5000);
});

// Pages section
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item');
  const contentItems = document.querySelectorAll('.content-item');

  items.forEach(item => {
      item.addEventListener('click', () => {
          // Desactivar todos los ítems y reiniciar flechas
          items.forEach(i => {
              i.classList.remove('active');
              const arrow = i.querySelector('.arrow');
              if (arrow) arrow.textContent = '▶';
          });

          // Activar el ítem seleccionado y ajustar flecha
          item.classList.add('active');
          const arrow = item.querySelector('.arrow');
          if (arrow) arrow.textContent = '▼';

          // Obtener el ID del contenido asociado
          const id = item.getAttribute('data-id');

          // Ocultar contenido anterior y mostrar el nuevo
          contentItems.forEach(content => {
              if (content.id === id) {
                  content.classList.add('active'); // Activar nuevo contenido
              } else {
                  content.classList.remove('active'); // Desactivar contenido anterior
              }
          });
      });
  });
});

document.querySelector('.language-btn').addEventListener('click', function (e) {
        e.stopPropagation();
        const dropdown = document.querySelector('.language-dropdown');
        dropdown.classList.toggle('open');
    });

document.addEventListener('click', function () {
        const dropdown = document.querySelector('.language-dropdown');
        if (dropdown.classList.contains('open')) {
            dropdown.classList.remove('open');
        }
    });

