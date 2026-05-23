const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

const yearElement = document.querySelector('[data-year]');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const form = document.querySelector('[data-demo-form]');
const note = document.querySelector('[data-form-note]');

if (form && note) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    note.textContent = 'Demo form submitted. Connect this to your email provider, CRM, or backend service.';
    form.reset();
  });
}
