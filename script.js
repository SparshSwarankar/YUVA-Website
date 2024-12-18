// navigation prograssive
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// JavaScript to manage image transitions dynamically
const images = document.querySelectorAll('.banner-image');
let currentIndex = 0;

function showNextImage() {
  images[currentIndex].classList.remove('active'); // Remove 'active' class from the current image
  currentIndex = (currentIndex + 1) % images.length; // Move to the next image
  images[currentIndex].classList.add('active'); // Add 'active' class to the next image
}

// Change image every 4 seconds (adjust timing as needed)
setInterval(showNextImage, 4000);

// Initially set the first image as active
images[currentIndex].classList.add('active');

// scroll to top
document.addEventListener("DOMContentLoaded", () => {
  const scrollToTopBtn = document.querySelector("#scrollToTopBtn");

  if (scrollToTopBtn) {
      const toggleButton = () => {
          if (window.scrollY > 100) {
              scrollToTopBtn.classList.add("show");
          } else {
              scrollToTopBtn.classList.remove("show");
          }
      };

      window.addEventListener("scroll", toggleButton);

      scrollToTopBtn.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
      });
  }
});
// Add the scroll effect when sections come into view on every scroll
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          } else {
              entry.target.classList.remove('visible');
          }
      });
  }, {
      threshold: 0.1
  });

  cards.forEach(card => {
      observer.observe(card);
  });
});


