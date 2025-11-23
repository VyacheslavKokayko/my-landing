'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // ======= Мобільне меню ===========
  const menu = document.getElementById('menu');
  const menuOpenBtn = document.querySelector('.icon--menu');
  const menuCloseBtn = document.querySelector('.icon--close');

  if (menuOpenBtn && menuCloseBtn && menu) {
    menuOpenBtn.addEventListener('click', () => {
      menu.classList.add('menu--open');
    });

    menuCloseBtn.addEventListener('click', () => {
      menu.classList.remove('menu--open');
    });
  }

  // ======= Оновлення лічильника товарів у кошику ===========
  const cartLink = document.querySelector(".nav__link[href='#cart']");
  let cartCount = 0; // Симуляція кількості товарів у кошику

  function updateCartCount() {
    cartLink.innerHTML = `Cart(${cartCount})`;
  }

  updateCartCount();

  // ======= Валідація форми перед відправкою ===========
  const contactForm = document.querySelector('.contacts__form form');

  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      const name = contactForm.querySelector("[name='name']").value.trim();
      const email = contactForm.querySelector("[name='email']").value.trim();
      const message = contactForm
        .querySelector("[name='message']")
        .value.trim();

      if (!name || !email || !message) {
        event.preventDefault();
        alert('Будь ласка, заповніть всі поля форми!');
      }
    });
  }
});
